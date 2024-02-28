import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {

  product : any =[]

  constructor(public cartservice :CartServiceService){  }

  totalProduct : number =0
  productInCart : boolean =false
  cartEmpty :boolean =true
  ngOnInit(){
    this.cartservice.getCartList()
    .subscribe({
      next:res=>{this.product=res;
      this.totalProduct=res.length;
        if(this.totalProduct !=0){
          this.productInCart = true;
          this.cartEmpty=false
        }
      
    },
      error:err=>{console.log(err);
      }
    })
  }
  
  removeproduct(item : any){
    this.cartservice.removerProduct(item)
  }

  removerAllProduct(){
    this.cartservice.removerAll()
  }
}
