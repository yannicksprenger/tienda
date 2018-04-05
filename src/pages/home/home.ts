import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string="";
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  Alert(title:string, nessage:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: nessage,
      buttons: ['OK']
    });
    alert.present();
  }

  LogaUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ItemsPage, {
        username:this.username
      });
    }
    else{
      this.Alert("Error", "Invalid user name");
    }
  }

}
