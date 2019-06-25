import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgModel, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';


@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.scss'],
})
export class RegistroPComponent implements OnInit {

  forma: FormGroup;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private alertService: AlertsService) {

    this.forma = new FormGroup({
      cc:  new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      nombre: new FormControl('', Validators.pattern('')),
      apellidos: new FormControl(''),
      genero: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      tarjeta: new FormControl('')
    });
    console.log(this.forma);
  }

  ngOnInit() {
  }

  registrarP(form: NgModel) {
    this.pacienteService.registroP(form.value).subscribe (value => {
      this.pacienteService.Paciente = value;
      this.clearForm();
      this.router.navigate(['inicio/paciente']);
      console.log(value);
    });
    console.log(form);
  }

  clearForm() {
    this.forma.reset();
  }


}
