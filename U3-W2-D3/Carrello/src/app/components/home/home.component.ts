import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Model } from 'src/app/models/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  models!: Model[];
  sub!:Subscription;

constructor(private http:ApiService){}

ngOnInit(): void {
  this.addToCart();
}

addToCart(){
  this.sub = this.http.GET().subscribe((e)=>{
    this.models = e;
  })
}

dellToCart(id:number){
this.sub = this.http.DELL(id).subscribe()
}

add() {
  this.http.addFavorite();
}
}
