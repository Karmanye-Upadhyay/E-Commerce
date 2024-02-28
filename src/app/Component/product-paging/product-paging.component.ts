import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { GlobalConnectService } from 'src/app/Services/global-connect.service';

@Component({
  selector: 'app-product-paging',
  templateUrl: './product-paging.component.html',
  styleUrls: ['./product-paging.component.css']
})
export class ProductPagingComponent {

  constructor(public service : GlobalConnectService,public cartservice : CartServiceService){}

prlist :any
  ngOnInit():void{
    this.service.getProduct()
    .subscribe({next:res=>{this.prlist=res; console.log(res);
    },error:err=>{console.log(err)}
   })
 
   
  }
  addToCart(product:any){
    this.cartservice.addCartList(product);
    console.log(product);
        
  }
}