import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.component.html',
  styleUrls: ['./info-paciente.component.scss'],
})
export class InfoPacienteComponent implements OnInit {

  forma: FormGroup;
  parametro: any;
  paciente: any;

  constructor(private pacienteService: PacienteService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.parametro = params;
      console.log(params);
    });

    this.forma = new FormGroup({
      nombre:  new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      telefono: new FormControl('', Validators.pattern(''))
    });
  }

  registrarF(form: NgModel) {
    const familiares = {
      id: this.paciente._id,
      familiar: { nombre: form.value.nombre, telefono: form.value.telefono }
    };

    this.pacienteService.registrarF(familiares).subscribe(value => {
      this.clearForm();
      console.log(value);
    });
    console.log(form);
  }

  clearForm() {
    this.forma.reset();
  }

  ngOnInit() {
    this.pacienteService.getP(this.parametro.id).subscribe(value => {
      this.paciente = value;
      console.log(this.paciente);
    });
  }

}
