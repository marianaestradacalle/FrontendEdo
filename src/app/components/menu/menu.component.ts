import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  Opciones: Opcion[] = [{
    icon: 'person',
    titulo: 'Paciente',
    redirectTo: '/inicio/paciente'
},
{
    icon: 'contacts',
    titulo: 'Nosotros',
    redirectTo: '/inicio/nosotros'
},
{
  icon: 'calendar',
  titulo: 'Calendario',
  redirectTo: '/calendar'
}
];

  constructor() { }

  ngOnInit() {}

}

export interface Opcion {
  icon: string;
  titulo: string;
  redirectTo: string;
}
