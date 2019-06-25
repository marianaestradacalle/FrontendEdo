import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EncargadoService } from 'src/app/services/encargado.service';
import { AlertsService } from '../services/alerts.service';



@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.page.html',
  styleUrls: ['./registro-e.page.scss'],
})
export class RegistroEPage implements OnInit {

  forma: FormGroup;

  constructor(
    private router: Router,
    private encargadoService: EncargadoService,
    private alertService: AlertsService) {

    this.forma = new FormGroup({
      cc:  new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      telefono: new FormControl(''),
      contrasena: new FormControl('')
    });
    console.log(this.forma);
  }

  ngOnInit() {
  }

  registrarE(form: NgModel) {
    this.encargadoService.registroE(form.value).subscribe (value => {
      this.encargadoService.encargado = value;
      this.router.navigate(['home']);
      console.log(value);
    });
    console.log(form);
  }

}
