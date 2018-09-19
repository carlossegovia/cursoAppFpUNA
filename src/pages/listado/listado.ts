/**
 * Created by carlitos on 08/08/18
 */

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  title: string = 'Listado';
  denuncias: Array<{nombre: string, asunto: string, descripcion: string}> = [];

  constructor(public navCtrl: NavController) {
    this.denuncias = [
      {nombre: "Denuncia 1", asunto: "Asunto 1", descripcion: "Lorem ipsum ..."},
      {nombre: "Denuncia 2", asunto: "Asunto 2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Denuncia 3", asunto: "Asunto 3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Denuncia 4", asunto: "Asunto 4", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Denuncia 5", asunto: "Asunto 5", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."}
    ]

  }

  verDetalle(denuncia) {
      this.navCtrl.push(DetallePage, {denuncia: denuncia});
  }

}
