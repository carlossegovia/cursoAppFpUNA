/**
 * Created by carlitos on 08/08/18
 */
import {DomSanitizer} from '@angular/platform-browser';
import {NavController, normalizeURL} from 'ionic-angular';

import {Component} from '@angular/core';
import {ImagePicker} from "@ionic-native/image-picker";

@Component({
  selector: 'page-denucias',
  templateUrl: 'denuncias.html'
})
export class DenunciasPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  title: string = 'Nueva Denuncia';
  nombre: string = "";
  asunto: string = "";
  descripcion: string = "";
  imagenes: Array<string> = [];

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker, private DomSanitizer: DomSanitizer) {
  }

  enviarDenuncia() {

  }

  showButton() {
    return !!this.asunto && !!this.descripcion && !!this.nombre;
  }

  agregarImagen() {
    const options = {
      outputType: 0
    };

    if (!ImagePicker.installed()) {
      console.log('Error1', 'Plugin not Found!');
      return;
    } else {
      console.log('ImagePicker', 'Plugin Found!');
    }

    if (!this.imagePicker.hasReadPermission()) {
      this.imagePicker.requestReadPermission();
      console.log("se dio permisos");
      return;
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let str = normalizeURL(results[i]);
        this.imagenes.push(str.replace('file://', ''));
      }
    }, (err) => {
      console.log('Error', err.toString())
    });

  }

}
