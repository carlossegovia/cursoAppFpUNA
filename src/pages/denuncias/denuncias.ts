/**
 * Created by carlitos on 08/08/18
 */
import { DomSanitizer } from '@angular/platform-browser';
import {normalizeURL} from 'ionic-angular';

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImagePicker} from "@ionic-native/image-picker";

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
  imagenes: Array<string> = [];

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker, private DomSanitizer: DomSanitizer) {

  }

  enviarDenuncia() {
    // Debe permanecer sin cambiar
    console.log(this.title);

    // Imprimimos los abributos que debieron cambiar
    console.log(this.nombre);
    console.log(this.asunto);
    console.log(this.descripcion);
  }

  agregarImagen() {
    const options = {
      outputType: 0
    };


    if(!ImagePicker.installed()){
      console.log('Error1','Plugin not Found!');
      return;
    } else console.log('ImagePicker','Plugin Found!');
    if(!this.imagePicker.hasReadPermission()){
      this.imagePicker.requestReadPermission();
      return;
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let str =  normalizeURL(results[i]);
        this.imagenes.push( str.replace('file://', ''));
      }
    }, (err) => {
      console.log('Error',err.toString())
    });

  }

}
