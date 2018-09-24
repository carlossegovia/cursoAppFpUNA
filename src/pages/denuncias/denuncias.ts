/**
 * Created by carlitos on 08/08/18
 */
import {AlertController, NavController} from 'ionic-angular';

import {Component} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {DomSanitizer} from "@angular/platform-browser";
import {ListadoPage} from "../listado/listado";

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
  image: string;

  constructor(public navCtrl: NavController, private camera: Camera,
              public alertCtrl: AlertController,
              public domSanitizer: DomSanitizer) {
  }

  enviarDenuncia() {
    let alert = this.alertCtrl.create({
      title: 'Registro Exitoso',
      subTitle: 'Su denuncia se realizó correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.setRoot(ListadoPage);
  }

  showButton() {
    return !!this.asunto && !!this.descripcion && !!this.nombre && !!this.image;
  }

  setOptions(srcType) {
    let options: CameraOptions = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: srcType,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    };
    return options;
  }


  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.displayErrorAlert(err);
    });

  }

  displayErrorAlert(err) {
    console.log(err);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error mientras se capturaba la foto',
      buttons: ['OK']
    });
    alert.present();
  }

}
