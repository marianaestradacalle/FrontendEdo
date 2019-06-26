import { Component, OnInit } from '@angular/core';
import { datos } from '../../../imagenes';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {

  data = datos;

  constructor() { }

  ngOnInit() {}

}
