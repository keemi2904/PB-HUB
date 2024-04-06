import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonFooter, IonItem, IonInput, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, informationCircleOutline, chatboxEllipsesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-seller-chat',
  templateUrl: './seller-chat.page.html',
  styleUrls: ['./seller-chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonFooter, IonItem, IonInput, IonIcon]
})
export class SellerChatPage implements OnInit {

  constructor() {
    addIcons({ cartOutline, informationCircleOutline, chatboxEllipsesOutline});
  }

  ngOnInit() {
  }

}
