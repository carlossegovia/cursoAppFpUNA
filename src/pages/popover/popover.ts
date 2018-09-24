import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-popover',
  template: `
    <ion-content style="text-align: center">
      <ion-toolbar>
        <ion-title>{{marker.asunto}}</ion-title>
      </ion-toolbar>
      <ion-slides padding>
        <ion-slide *ngFor="let imagen of marker.imagenes">
          <div class="image-container">
            <img [src]="imagen">
          </div>
        </ion-slide>
      </ion-slides>
      <p>
        Reportado por: {{marker.nombre}}
      </p>
      <p>
        Estado de la denuncia: REPORTADA
      </p>
    </ion-content>
     
  `
})
export class PopoverPage {
  @ViewChild(Slides) slides: Slides;

  marker:any;
  constructor(public viewCtrl: ViewController, public navParams:NavParams) {
    console.log(navParams);
    this.marker = navParams.get("marker");
  }
  ngAfterViewInit() {
    this.slides.centeredSlides = true;
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
