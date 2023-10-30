import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PopularComponent } from './popular/popular.component';
import { DishesComponent } from './dishes/dishes.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PopularComponent,
    DishesComponent,
    AboutComponent,
    MenuComponent,
    ReviewComponent,
    OrderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
