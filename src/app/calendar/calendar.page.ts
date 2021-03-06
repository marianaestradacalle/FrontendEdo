import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { RegistroEventPage } from '../registro-event/registro-event.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  event = {
    Titulo: '',
    Descripcion: '',
    Inicio: '',
    Fin: '',
    Dia: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  evento: RegistroEventPage;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      Titulo: '',
      Descripcion: '',
      Inicio: new Date().toISOString(),
      Fin: new Date().toISOString(),
      Dia: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.Titulo,
      startTime:  new Date(this.event.Inicio),
      endTime: new Date(this.event.Fin),
      allDay: this.event.Dia,
      desc: this.event.Descripcion
    };

    if (eventCopy.allDay) {
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  // Change current month/week/day
 next() {

  // tslint:disable-next-line:no-string-literal
  const swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

back() {
  // tslint:disable-next-line:no-string-literal
  const swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}

// Focus today
today() {
  this.calendar.currentDate = new Date();
}

// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}

// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  const start = formatDate(event.startTime, 'medium', this.locale);
  const end = formatDate(event.endTime, 'medium', this.locale);

  const alert = await this.alertCtrl.create({
    header: event.Titulo,
    subHeader: event.Descripcion,
    message: 'De: ' + start + '<br><br>Hasta: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

// Time slot was clicked
onTimeSelected(ev) {
  const selected = new Date(ev.selectedTime);
  this.event.Inicio = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.Fin = (selected.toISOString());
}
}
