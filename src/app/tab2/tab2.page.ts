import { Component, OnInit, } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, IonButton, IonButtons],
})
export class Tab2Page implements OnInit {
  show = true;
  price = 2.5;
  quantity = 0;
  subtotal = 0;
  grandTotal = 0;
  maxQuantity = 5;
  discount = 0.2; // 20% discount

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.show$.subscribe(show => this.show = show);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.subtotal -= this.price;
      this.updateGrandTotal();
    }
  }

  increaseQuantity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
      this.subtotal += this.price;
      this.updateGrandTotal();
    }
  }

  updateGrandTotal() {
    this.grandTotal = this.subtotal * (1 - this.discount);
  }
}
