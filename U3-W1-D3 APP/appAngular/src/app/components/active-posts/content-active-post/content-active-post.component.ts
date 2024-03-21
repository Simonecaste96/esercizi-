import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-content-active-post',
  templateUrl: './content-active-post.component.html',
  styleUrls: ['./content-active-post.component.scss']
})
export class ContentActivePostComponent {
  @Input('content') contents!: Content;
}
