import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {DenunciasPage} from "../pages/denuncias/denuncias";
import {ListadoPage} from "../pages/listado/listado";
import {DetallePage} from "../pages/detalle/detalle";
import {MapaPage} from "../pages/mapa/mapa";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {PopoverPage} from "../pages/popover/popover";
import {Camera} from "@ionic-native/camera";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    LoginPage,
    RegisterPage,
    MapaPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    MapaPage,
    PopoverPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
