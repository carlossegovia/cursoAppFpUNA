import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {DenunciasPage} from "../pages/denuncias/denuncias";
import {ListadoPage} from "../pages/listado/listado";
import {MapaPage} from "../pages/mapa/mapa";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array < {component: any, nombre: string, icon: string} > = [];

  constructor(platform: Platform, statusBar: StatusBar,
              public menu: MenuController, splashScreen: SplashScreen) {
    //Las páginas que se mostrarán en el menú
    this.pages = [
      {component: HomePage, nombre: 'Inicio', icon: 'home'},
      {component: DenunciasPage, nombre: 'Nueva Denuncia', icon: 'add'},
      {component: ListadoPage, nombre: 'Mis Denuncias', icon: 'list'},
      {component: MapaPage, nombre: 'Mapa de Denuncias', icon: 'locate'},
      {component: LoginPage, nombre: 'Salir', icon: 'exit'}
    ];

    platform.ready().then(() => {
      // Se controla que los plugins estén cargados
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina) {
    //Se cierra el menú
    this.menu.close();
    //Se usa setRoot para que no aparezca el botón de atrás
    this.nav.setRoot(pagina.component);
  }


}

