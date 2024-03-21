import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';
@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

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
