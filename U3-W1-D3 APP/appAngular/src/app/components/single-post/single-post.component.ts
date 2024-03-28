import { Component,Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  @Input('content') contents!: Content[];

  rimuoviDuplicati(tags: string[]): string[] {
    return Array.from(new Set(tags));
  }
}





