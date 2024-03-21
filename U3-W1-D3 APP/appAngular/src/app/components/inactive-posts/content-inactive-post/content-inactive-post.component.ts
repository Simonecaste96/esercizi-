import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-content-inactive-post',
  templateUrl: './content-inactive-post.component.html',
  styleUrls: ['./content-inactive-post.component.scss']
})
export class ContentInactivePostComponent {
  @Input('content') contents!: Content;
}

