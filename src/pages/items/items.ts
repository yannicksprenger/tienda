import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database"; 
import { CartPage } from '../cart/cart';
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
export class ItemsPage  implements OnInit {
  username:string="";
  slides=[];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  SendCart(item){
    this.db.object('user/'+this.username+'/cart/'+item).set({
      quantity:"1"
    });
    var Alert="'"+this.slides[item]["title"]+"' Added to cart";
    this.Alert("Cart", Alert);
  }

  GoCart(){
    this.navCtrl.push(CartPage, {
      username:this.username
    });
  }


  ngOnInit(): void {
    this.username= this.navParams.get("username");
    this.db.object('/Productos').valueChanges().subscribe(data => {
      this.slides=data;
    });
    
  }

  Alert(title:string, nessage:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: nessage,
      buttons: ['OK']
    });
    alert.present();
  }
}
