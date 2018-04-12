import { Component} from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  username:string="";
  constructor(public navCtrl: NavController, public nav:Nav, private alertCtrl: AlertController) {

  }

  Alert(title:string, nessage:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: nessage,
      buttons: ['OK']
    });
    alert.present();
  }

  LoginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.nav.setRoot(ItemsPage, {
        username:this.username
      });
    }
    else{
      this.Alert("Error", "Invalid user name");
    }
  }

}
