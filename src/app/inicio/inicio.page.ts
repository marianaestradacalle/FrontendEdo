import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { datos } from '../../imagenes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  data = datos;
  
  constructor(private menuCtrl: MenuController) {

    console.log(this.data);
    
   }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
