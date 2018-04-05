import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  slides = [
    {
      title: "Cigarros electricos",
      description: "Diferentes modelos para elegir, en diferentes colores",
      image: "../../assets/imgs/cigarros.jpg",
    },
    {
      title: "Kit especial",
      description: "Oferta con kit especial que contiene todo lo que necesitas para disfrutar tu nuevo cigarro electrico",
      image: "../../assets/imgs/kit.jpg",
    },
    {
      title: "Liquidos de diferentes sabores",
      description: "Tenemos una variedad de sabores para elegir, disfruta de la variedad",
      image: "../../assets/imgs/sabores.jpg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {

  }

}
