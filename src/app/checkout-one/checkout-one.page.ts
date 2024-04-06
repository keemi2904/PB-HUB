import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout-one',
  templateUrl: './checkout-one.page.html',
  styleUrls: ['./checkout-one.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class CheckoutOnePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
