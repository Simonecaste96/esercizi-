import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-contenuto-principale',
  templateUrl: './contenuto-principale.component.html',
  styleUrls: ['./contenuto-principale.component.scss']
})

export class ContenutoPrincipaleComponent {
  @Input ('content') contents!: Content;
}
