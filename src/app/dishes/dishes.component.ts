import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {

  list: any[] = [];

  constructor(private cardService: CardService) {
    this.list = [
      {
        title: 'Tasty Food 1',
        image: 'assets/images/dish-1.png',
        rating: 4.5,
        price: 15.99,
      },
      {
        title: 'Tasty Food 2',
        image: 'assets/images/dish-2.png',
        rating: 4.0,
        price: 12.99,
      },

      {
        title: 'Tasty Food 3',
        image: 'assets/images/dish-3.png',
        rating: 4.0,
        price: 12.99,
      },

      {
        title: 'Tasty Food 4',
        image: 'assets/images/dish-4.png',
        rating: 4.0,
        price: 12.99,
      },

      {
        title: 'Tasty Food 5',
        image: 'assets/images/dish-5.png',
        rating: 4.5,
        price: 15.99,
      },
      {
        title: 'Tasty Food 6',
        image: 'assets/images/dish-6.png',
        rating: 4.0,
        price: 12.99,
      },

      {
        title: 'Tasty Food 7',
        image: 'assets/images/dish-3.png',
        rating: 4.0,
        price: 12.99,
      },

      {
        title: 'Tasty Food 8',
        image: 'assets/images/dish-1.png',
        rating: 4.0,
        price: 12.99,
      },
    ];
  }

  addToCart(item: any) {
    this.cardService.addToCart(item);
  }


}
