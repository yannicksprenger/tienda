import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database"; 
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  username:string="";
  slides=[];
  carts=[];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  RemoveCart(item){
    this.db.object('user/'+this.username+'/cart/'+item).remove();
    var Alert="'"+this.slides[item]["title"]+"' Removed to cart";
    this.Alert("Cart", Alert);
  }

  ngOnInit(): void {
    this.username= this.navParams.get("username");
    this.db.object('/Productos').valueChanges().subscribe(data => {
      this.slides=data;
    });
    this.db.object('/user/'+this.username+'/cart').valueChanges().subscribe(data => {
      if(data==null){
        this.carts=[];
      }
      else{
        this.carts=data;
      }
      console.log(data);
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

/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
