import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DenunciasPage} from "../denuncias/denuncias";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Inicio';

  constructor(public navCtrl: NavController) {

  }

  goToDenuncias() {
    // NavController es la clase que nos permite navegar entre Pages de nuestra APP
    this.navCtrl.push(DenunciasPage);
  }

}
