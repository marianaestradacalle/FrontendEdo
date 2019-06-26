import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RegistroPComponent } from './registro-p/registro-p.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfoPacienteComponent } from './info-paciente/info-paciente.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NosotrosComponent,
    PacienteComponent,
    RegistroPComponent,
    InfoPacienteComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    NosotrosComponent,
    PacienteComponent,
    RegistroPComponent,
    InfoPacienteComponent,
    TarjetasComponent
  ]
})
export class ComponentsModule { }
