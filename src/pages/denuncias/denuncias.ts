/**
 * Created by carlitos on 08/08/18
 */
import {AlertController, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {ChangeDetectorRef, Component} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {DomSanitizer} from "@angular/platform-browser";
import {ListadoPage} from "../listado/listado";
import {CameraOptions} from "@ionic-native/camera";
import {
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  LatLng,
  LocationService,
  Marker, MyLocation
} from "@ionic-native/google-maps";

@Component({
  selector: 'page-denuncias',
  templateUrl: 'denuncias.html'
})
export class DenunciasPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  title: string = 'Nueva Denuncia';
  segment: string;
  nombre: string = "";
  marker: Marker;
  asunto: string = "";
  ubicacion: LatLng;
  descripcion: string = "";
  imagenes: Array<string> = [];
  image: string;
  map: GoogleMap;
  loading: Loading;

  constructor(public navCtrl: NavController, private camera: Camera,
              public alertCtrl: AlertController,
              public domSanitizer: DomSanitizer,
              public navParams: NavParams,
              public storage: Storage,
              private cf: ChangeDetectorRef,
              public loadingCtrl: LoadingController) {
    let ubicacion = navParams.get("ubicacion");
    if (ubicacion){
      this.ubicacion = ubicacion;
    }
    this.segment = 'datos';

  }
  ionViewDidLoad(){
    if(this.ubicacion){
      this.loadMap();
    }else{
      this.getLocation();
    }
  }

  segmentChanged()
  {
    this.cf.detectChanges();
  }

  enviarDenuncia() {
    this.showLoading();
    this.storage.get('denuncias').then((denuncias) => {
      if(!denuncias){
        denuncias = [];
      }
      let denuncia = {
        nombre: this.nombre,
        asunto: this.asunto,
        descripcion: this.descripcion,
        imagenes: this.imagenes,
        markerOptions: {
          title: this.asunto,
          icon: {
            url: this.asunto === 'Deforestación' ? 'assets/icon/deforestacion.png' : 'assets/icon/basurero.png',
            size: {
              width: 32,
              height: 32
            }
          },
          animation: 'DROP',
          position: this.ubicacion
        }
      };
      denuncias.push(denuncia);
      this.storage.set('denuncias', denuncias).then(() => {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Registro Exitoso',
          subTitle: 'Su denuncia se realizó correctamente',
          buttons: ['Aceptar']
        });
        alert.present();
        this.navCtrl.setRoot(ListadoPage);

      },(err) => {
        this.loading.dismiss();
        this.displayErrorAlert(err, 'Ocurrió un error al guardar la denuncia!')
      });

    },(err) => {
      this.loading.dismiss();
      this.displayErrorAlert(err, 'Ocurrió un error al guardar la denuncia!')
    });

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }

  showButton() {
    return !!this.asunto && !!this.descripcion && !!this.nombre && this.imagenes.length;
  }

  openCamera(sourceType: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imagenes.push('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      this.displayErrorAlert(err, 'Error mientras se capturaba la foto');
    });

  }

  displayErrorAlert(err, errorMessage) {
    console.log(err);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: errorMessage,
      buttons: ['OK']
    });
    alert.present();
  }

  loadMap(){
    console.log(this.ubicacion);
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.ubicacion,
        zoom: 14,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
          this.map.addMarker({
            title: 'Lugar de denuncia',
            animation: 'DROP',
            position: this.ubicacion,
            draggable: false
          }).then((marker) => {
            this.marker = marker;
          }, (error) => {
            console.log(error);
          });
          this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((result) => {
            console.log(result);
            this.marker.setPosition(result[0]);
            this.ubicacion = result[0];
          })
        },
        (error) =>{
          console.log(error);
        });

  }

  getLocation() {
    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      this.ubicacion = myLocation.latLng;
      this.loadMap();
    });

  }

}
