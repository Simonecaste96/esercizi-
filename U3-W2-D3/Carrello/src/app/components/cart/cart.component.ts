import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
totPrice: number = 0;
constructor (private http:ApiService){}

ngOnInit():void{
this.http.cartSubject.subscribe((count)=>{
  this.totPrice = count});
}
}
