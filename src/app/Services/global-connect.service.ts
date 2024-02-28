import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GlobalConnectService {

  constructor(private http :HttpClient) { }
  list : [] = []; 
  getProduct(){
   return this.http.get("https://fakestoreapi.com/products")
   
  }
}
