import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-popover',
  template: `
    <ion-content style="text-align: center">
      <h1>{{marker.direccion}}</h1>
      <ion-slides padding>
        <ion-slide *ngFor="let imagen of marker.imagenes">
          <img [src]="imagen">
        </ion-slide>
      </ion-slides>
      <p>
          Estado de la denuncia: REPORTADA
      </p>
    </ion-content>
     
  `
})
export class PopoverPage {
  marker:any;
  constructor(public viewCtrl: ViewController, public navParams:NavParams) {
    console.log(navParams);
    this.marker = navParams.get("marker");
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
