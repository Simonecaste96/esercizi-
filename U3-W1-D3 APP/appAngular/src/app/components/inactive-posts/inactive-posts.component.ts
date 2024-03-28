import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ServicePersonalService } from 'src/app/service/service-personal.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  contents:Content[]=[]
    
  
  constructor(private Service:ServicePersonalService){
  }

 ngOnInit():void{
  this.Service.getContent().then((contents)=>{
    this.contents = contents;
  })
 } 

}
