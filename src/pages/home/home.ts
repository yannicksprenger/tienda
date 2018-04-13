import { Component} from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemsPage } from '../items/items';

import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  username:string="";

  public image: string = null;


  constructor(public navCtrl: NavController, public nav:Nav, private alertCtrl: AlertController, private camera: Camera) {
    
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
      this.nav.setRoot(ItemsPage, {
        username:this.username
      });
    }
    else{
      this.Alert("Error", "Invalid user name");
    }
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
