import {
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  LatLng, LocationService,
  MarkerOptions, MyLocation
} from '@ionic-native/google-maps';
import {Component} from "@angular/core/";
import {Loading, LoadingController, NavController, PopoverController} from "ionic-angular";
import {PopoverPage} from "../popover/popover";
import { Storage } from '@ionic/storage';
import {DenunciasPage} from "../denuncias/denuncias";

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  title: string = 'Mapa de Denuncias';
  map: GoogleMap;
  markers: Array<any> = [];
  loading: Loading;
  constructor(public popoverCtrl: PopoverController, public navController: NavController, public storage: Storage, public loadingCtrl: LoadingController) {
    this.showLoading();
    storage.get('denuncias').then((denuncias) => {
      if (denuncias){
        this.markers = denuncias;
      }
      this.loadMap();
      this.loading.dismissAll();
    });
    // this.markers = [
    //   { direccion: "España c/ etc",
    //     categoria: "Deforestación",
    //     imagenes: [
    //       'assets/imgs/deforestacion1.jpeg',
    //       'assets/imgs/deforestacion2.jpeg',
    //       'assets/imgs/deforestacion3.jpeg',
    //       'assets/imgs/deforestacion4.jpg',
    //     ],
    //     markerOptions: {
    //       title: 'Caso España',
    //       icon: {
    //         url: 'assets/icon/deforestacion.png',
    //         size: {
    //           width: 32,
    //           height: 32
    //         }
    //       },
    //       animation: 'DROP',
    //       position: new LatLng(43.0741904, -89.3809802)
    //     }
    //   },
    //   {
    //     direccion: "España c/ etc",
    //     categoria: "Deforestación",
    //     imagenes: [
    //       'assets/imgs/deforestacion1.jpeg',
    //       'assets/imgs/deforestacion2.jpeg',
    //       'assets/imgs/deforestacion3.jpeg',
    //       'assets/imgs/deforestacion4.jpg',
    //     ],
    //     markerOptions: {
    //       title: 'BTL Marketing',
    //       icon: {
    //         url: 'assets/icon/deforestacion.png',
    //         size: {
    //           width: 32,
    //           height: 32
    //         }
    //       },
    //       animation: 'DROP',
    //       position: new LatLng(43.1, -89.3809802)
    //     }
    //   } ,
    //   {
    //     direccion: "España c/ etc",
    //     categoria: "Basura",
    //     imagenes: [
    //       'assets/imgs/basura1.jpg',
    //       'assets/imgs/basura2.jpg',
    //       'assets/imgs/basura3.jpg',
    //       'assets/imgs/basura4.jpeg',
    //     ],
    //     markerOptions: {
    //       title: 'BTL Marketing',
    //       icon: {
    //         url: 'assets/icon/basurero.png',
    //         size: {
    //           width: 32,
    //           height: 32
    //         }
    //       },
    //       animation: 'DROP',
    //       position: new LatLng(43.0741904, -89.4009802)
    //     }
    //   }
    // ];
  }

  ionViewDidLoad() {

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }

  presentPopover(marker) {
    let popover = this.popoverCtrl.create(PopoverPage, {marker: marker});
    popover.present();
  }

  loadMap() {
    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: myLocation.latLng,
          zoom: 18,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          for (let markerIt of this.markers) {
            this.map.addMarker(markerIt.markerOptions)
              .then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    this.presentPopover(markerIt);
                  });

              });
          }
          this.map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe((result) => {
            this.navController.setRoot(DenunciasPage, {ubicacion: result[0]})
          });
        });
    });
  }

}
