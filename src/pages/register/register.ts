import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {email: '', password: ''};

  constructor(private nav: NavController, private alertCtrl: AlertController) {
  }

  public register() {
    if (this.registerCredentials.email == 'usuario' && this.registerCredentials.password == 'usuario') {
      this.createSuccess = true;
      this.showPopup("Éxito", "Cuenta Creada");
    } else {
      this.showPopup("Error", "Problema creando la cuenta.");
    }
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
