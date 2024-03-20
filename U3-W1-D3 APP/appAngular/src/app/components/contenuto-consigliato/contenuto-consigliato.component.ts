import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-contenuto-consigliato',
  templateUrl: './contenuto-consigliato.component.html',
  styleUrls: ['./contenuto-consigliato.component.scss']
})
export class ContenutoConsigliatoComponent {
@Input('content') contents!: Content;
}
