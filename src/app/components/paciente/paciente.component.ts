import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EncargadoService} from '../../services/encargado.service';
import {PacienteService} from 'src/app/services/paciente.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {

  pacientes = [];

    ionViewWillEnter() {
      this.encargadoService.getPacientes().subscribe((res: any) => {
        this.pacientes = res;
        console.log(this.pacientes);
    });
    }
  constructor(public pacienteService: PacienteService, private encargadoService: EncargadoService, private route: Router) {

  }

  ngOnInit() {}

  info(id) {
    this.route.navigate(['inicio/info-paciente/' + id]);
  }

}
