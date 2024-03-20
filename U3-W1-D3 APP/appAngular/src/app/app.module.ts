import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { HeaderComponent } from './components/header/header.component';
import { ContenutoPrincipaleComponent } from './components/contenuto-principale/contenuto-principale.component';
import { SottoContenutoComponent } from './components/sotto-contenuto/sotto-contenuto.component';
import { ContenutoConsigliatoComponent } from './components/contenuto-consigliato/contenuto-consigliato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostDetailComponent,
    InactivePostsComponent,
    ActivePostsComponent,
    HeaderComponent,
    ContenutoPrincipaleComponent,
    SottoContenutoComponent,
    ContenutoConsigliatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
