/**
 * Created by carlitos on 08/08/18
 */

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-denucias',
  templateUrl: 'denuncias.html'
})
export class DenunciasPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  title: string = 'Denuncias';
  nombre: string = "";
  asunto: string = "";
  descripcion: string = "";

  constructor(public navCtrl: NavController) {

  }

  enviarDenuncia() {
    // Debe permanecer sin cambiar
    console.log(this.titlePage);

    // Imprimimos los abributos que debieron cambiar
    console.log(this.nombre);
    console.log(this.asunto);
    console.log(this.descripcion);
  }

}
