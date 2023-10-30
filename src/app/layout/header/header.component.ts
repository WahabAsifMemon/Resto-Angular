import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItemCount$: Observable<number>;
  constructor(private router: Router, private cardService: CardService) {
    this.cartItemCount$ = this.cardService.getCartItemCount();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActive(event.url);
      }
    });
  }

  ngOnInit() {
    this.updateActive(this.router.url);
  }

  updateActive(currentRoute: string) {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && currentRoute.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   updateActiveLink(currentRoute: string) {
//     const navLinks = document.querySelectorAll('.navbar a');
//     navLinks.forEach((link) => {
//       const href = link.getAttribute('href');
//       if (href && currentRoute.includes(href)) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   }
// }
