import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EncargadoService } from 'src/app/services/encargado.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  forma: FormGroup;

  constructor(
    private router: Router,
    private encargadoService: EncargadoService,
    private alertService: AlertsService
  ) {
    this.forma = new FormGroup({
      cc: new FormControl('', [
        Validators.required,
        // Validators.pattern('/^[0-9]{10}+$/')
      ]),
      contrasena: new FormControl('')
    });
  }

  ngOnInit() {}

  ingresar(form: NgForm) {
    // this.alertService.presentLoading();
    // El subscribe captura la respuesta de la peticiony la guarda en 'value'
    this.encargadoService.login(form.value).subscribe((value: any) => {
      // this.alertService.loadingController.dismiss();
      this.encargadoService.encargado = value;
      this.router.navigate(['inicio']);
      localStorage.setItem('_id', value._id);
      console.log(value);
    });
    console.log(form);
  }

}
