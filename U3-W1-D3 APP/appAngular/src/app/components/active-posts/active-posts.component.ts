import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ServicePersonalService } from 'src/app/service/service-personal.service';
@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  contents:Content[] = [];
  
  constructor(private Service:ServicePersonalService){
  }

ngOnInit():void{
  this.Service.getContent().then((contents)=>{
    this.contents = contents;
  })
}
}
