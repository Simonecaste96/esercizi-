import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

  contents!:Content[];
  
  constructor(){
    this.getContent().then((contents)=>{
      this.contents = contents;
    });
  }

async getContent() {
  let response = await fetch('../../assets/db.json');
  let data = await response.json();
  return data;
 }
}
