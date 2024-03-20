import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-sotto-contenuto',
  templateUrl: './sotto-contenuto.component.html',
  styleUrls: ['./sotto-contenuto.component.scss']
})
export class SottoContenutoComponent {
  @Input('content') contents!: Content;
}
