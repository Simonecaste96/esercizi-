import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ServicePersonalService } from 'src/app/service/service-personal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents!:Content[];
  randomContent!: Content; 

constructor(private Service:ServicePersonalService){
}

async ngOnInit():Promise<void>{
  const response = await this.Service.getContent();
  this.contents = response;
  this.getRandomContent()
}

 getRandomContent() {
  const randomIndex = Math.floor(Math.random() * this.contents.length);
  this.randomContent = this.contents[randomIndex];
}
}
