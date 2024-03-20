import { Component } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
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
