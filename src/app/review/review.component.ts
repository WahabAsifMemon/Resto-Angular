import { Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  ngAfterViewInit() {
    const swiper = new Swiper(".review-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }
}
