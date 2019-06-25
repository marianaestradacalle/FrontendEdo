import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, OnInit, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-registro-event',
  templateUrl: './registro-event.page.html',
  styleUrls: ['./registro-event.page.scss'],
})
export class RegistroEventPage implements OnInit {

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

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string, private router: Router ) { }

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
    this.resetEvent();
    this.router.navigate(['calendar']);
  }

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
