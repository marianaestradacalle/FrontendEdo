import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroEPage } from './registro-e.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: RegistroEPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule

  ],
  declarations: [RegistroEPage]
})
export class RegistroEPageModule {}
