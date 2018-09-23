import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DenunciasPage} from "../denuncias/denuncias";
import {MapaPage} from "../mapa/mapa";
import {ListadoPage} from "../listado/listado";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Inicio';
  pages: Array<{ icon: string, title: string, component: any, id: string }> = [
    {icon: 'add', title: 'Nueva Denuncia', component: DenunciasPage, id: 'nueva-denuncia'},
    {icon: 'list', title: 'Mis Denuncias', component: ListadoPage, id: 'mis-denuncias'},
    {icon: 'locate', title: 'Mapa de Denuncias', component: MapaPage, id: 'mapa-denuncias'},
    {icon: 'exit', title: 'Salir', component: LoginPage, id: 'salir'}
  ];

  constructor(public navCtrl: NavController) {

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

}
