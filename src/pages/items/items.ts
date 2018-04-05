import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database"; 
/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  username:string="";
  message:string="";

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username= this.navParams.get("username");
    this.db.object('/Productos').valueChanges().subscribe(data => {
      console.log(data);
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  SendCart(item){
    this.db.object('user/'+this.username+'/cart/'+item).set({
      quantity:"1"
    });
  }
}
