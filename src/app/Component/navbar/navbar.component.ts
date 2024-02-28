import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public cartservice : CartServiceService){  }
totalproduct :number =0

  ngOnInit():void{
    this.cartservice.getCartList()
    .subscribe({next:res=>{this.totalproduct=res.length ; 
    },error:err=>{console.log(err)}
   })
}
}