import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartitem : any =[]
  public productList =new BehaviorSubject<any>([])
  constructor() { }

  getCartList(){
    return this.productList.asObservable();
  }

  setCartList(product :any){
    this.cartitem.push(...product)
    this.productList.next(product)
  }

  addCartList(product :any){
    this.cartitem.push(product)
    this.productList.next(this.cartitem)
    this.getTotalCount();
  }
  getTotalCount(){
    let grandtotal=0
    this.cartitem.map((a:any)=>{
      grandtotal +=a.total;
    })
  }
  removerProduct(product :any){
    this.cartitem.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartitem.splice(index,1)
      }
    })
  }

  removerAll(){
    this.cartitem=[]
    this.productList.next(this.cartitem)
  }
}
