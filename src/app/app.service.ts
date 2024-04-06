import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private show = new BehaviorSubject<boolean>(false);
  show$ = this.show.asObservable();

  constructor() { }

  toggleShow() {
    this.show.next(!this.show.value);
  }
}
