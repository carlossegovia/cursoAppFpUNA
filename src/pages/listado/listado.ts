/**
 * Created by carlitos on 08/08/18
 */

import {Component} from '@angular/core';
import {Loading, LoadingController, NavController} from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  title: string = 'Mis Denuncias';
  denuncias: Array<{nombre: string, asunto: string, descripcion: string}> = [];
  loading: Loading;

  constructor(public navCtrl: NavController, public storage: Storage, public loadingCtrl: LoadingController) {

    // this.denuncias = [
    //   {nombre: "Denuncia 1", asunto: "Asunto 1", descripcion: "Lorem ipsum ..."},
    //   {nombre: "Denuncia 2", asunto: "Asunto 2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
    //   {nombre: "Denuncia 3", asunto: "Asunto 3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
    //   {nombre: "Denuncia 4", asunto: "Asunto 4", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
    //   {nombre: "Denuncia 5", asunto: "Asunto 5", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."}
    // ]
    this.showLoading();
    storage.get('denuncias').then((denuncias) => {
      if (denuncias){
        this.denuncias = denuncias;
      }
      this.loading.dismissAll();
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }

  verDetalle(denuncia) {
      this.navCtrl.push(DetallePage, {denuncia: denuncia});
  }

}
