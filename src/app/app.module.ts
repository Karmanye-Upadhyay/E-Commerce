import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MyCartComponent } from './Component/my-cart/my-cart.component';
import { ProductPagingComponent } from './Component/product-paging/product-paging.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuyComponent } from './Component/buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyCartComponent,
    ProductPagingComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
