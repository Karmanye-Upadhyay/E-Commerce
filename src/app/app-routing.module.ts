import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './Component/buy/buy.component';
import { MyCartComponent } from './Component/my-cart/my-cart.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProductPagingComponent } from './Component/product-paging/product-paging.component';

const routes: Routes = [
  {path:"" , component:ProductPagingComponent},
  {path:"navbar" , component:NavbarComponent},
  {path:"product" , component:ProductPagingComponent},
  {path:"cart" , component:MyCartComponent},
  {path:"buy" , component:BuyComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
