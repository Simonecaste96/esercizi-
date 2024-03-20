import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contents!:Content[];
  randomContent!: Content 




constructor(){
  this.getContent().then((contents)=>{
    this.contents = contents;
    this.getRandomContent(); //estraggo indice casuale, invocando la funzione
  });
}

 async getContent() {
  let response = await fetch('../../assets/db.json');
  let data = await response.json();
  return data;
 }


 getRandomContent(): void {
  const randomIndex = Math.floor(Math.random() * this.contents.length);
  this.randomContent = this.contents[randomIndex];
}
}
