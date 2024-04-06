import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout-two',
  templateUrl: './checkout-two.page.html',
  styleUrls: ['./checkout-two.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class CheckoutTwoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
