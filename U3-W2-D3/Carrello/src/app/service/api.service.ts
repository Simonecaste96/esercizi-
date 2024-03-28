import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Model } from '../models/model';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://dummyjson.com/products';
  cartSubject = new Subject<number>();
  totalCart = 0;

  constructor(private http: HttpClient) {}


GET(){
return this.http.get<{products:Model[]}>(this.apiURL).pipe(map(ris => ris.products))
}

DELL(id:number){
 return this.http.delete(`${this.apiURL}/${id}`)
}

addFavorite(){
  this.totalCart++;
  this.cartSubject.next(this.totalCart);
}

}
