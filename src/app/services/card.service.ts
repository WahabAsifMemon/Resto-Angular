import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cartItems: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartItemCount.next(this.cartItems.length);
  }
}
