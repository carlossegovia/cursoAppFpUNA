import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker, LatLng
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";

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
  map: GoogleMap;
  markers: Array<MarkerOptions>;
  constructor() {
    this.markers = [
      {
        title: 'BTL Marketing',
        icon: {
          url: 'assets/icon/deforestacion.png',
          size: {
            width: 32,
            height: 32
          }
        },
        animation: 'DROP',
        position: new LatLng(43.0741904, -89.3809802)
      },
      {
        title: 'BTL Marketing',
        icon: {
          url: 'assets/icon/deforestacion.png',
          size: {
            width: 32,
            height: 32
          }
        },
        animation: 'DROP',
        position: new LatLng(43.1, -89.3809802)
      } ,
      {
        title: 'BTL Marketing',
        icon: {
          url: 'assets/icon/basurero.png',
          size: {
            width: 32,
            height: 32
          }
        },
        animation: 'DROP',
        position: new LatLng(43.0741904, -89.4009802)
      }
    ];
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log(this.markers);
        console.log(typeof this.markers);
        for(let markerOptions of this.markers){
          this.map.addMarker(markerOptions)
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });

          });
        }
      });
  }

}
