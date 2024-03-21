import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models/content';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input ('content') contents!: Content;
}



