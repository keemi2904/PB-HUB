import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cartOutline, informationCircleOutline, chatboxEllipsesOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonButtons],
})
export class Tab3Page {
  saladName: string = 'Homemade Salad';
  price: number = 2.5;
  quantity: number = 5;
  buttonText: string = 'UPDATE';

  constructor() {
    addIcons({ cartOutline, informationCircleOutline, chatboxEllipsesOutline, addCircleOutline});
  }

  updateItem() {
    this.saladName = 'Ronaldo Salad';
    this.price = 3;
    this.quantity = 10;
    this.buttonText = 'UPDATED';
  }
}
