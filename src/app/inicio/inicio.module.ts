import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from '../components/components.module';
import { NosotrosComponent } from '../components/nosotros/nosotros.component';
import { PacienteComponent } from '../components/paciente/paciente.component';
import { RegistroPComponent } from '../components/registro-p/registro-p.component';
import { InfoPacienteComponent } from '../components/info-paciente/info-paciente.component';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';
import { CalendarPage } from '../calendar/calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarioComponent } from '../components/calendario/calendario.component';


const routes: Routes = [
  {
    path: '', component: InicioPage, children: [
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'registro-p', component: RegistroPComponent },
      { path: 'info-paciente/:id', component: InfoPacienteComponent },
      { path: 'tarjetas', component: TarjetasComponent },
      { path: 'calendar', component: CalendarioComponent},
      { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarPageModule'},
      // { path: '**', pathMatch: 'full', redirectTo: 'tarjetas' }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgCalendarModule,
  ],
  declarations: [InicioPage, CalendarioComponent]
})
export class InicioPageModule {}
