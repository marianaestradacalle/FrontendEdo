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


const routes: Routes = [
  {
    path: '', component: InicioPage, children: [
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'registro-p', component: RegistroPComponent },
      { path: 'info-paciente/:id', component: InfoPacienteComponent }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
