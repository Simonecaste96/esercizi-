import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

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
import { Error404Component } from './components/error404/error404.component';
import { ContentActivePostComponent } from './components/active-posts/content-active-post/content-active-post.component';
import { ContentInactivePostComponent } from './components/inactive-posts/content-inactive-post/content-inactive-post.component';
import { DirettivaDirective } from './directives/direttiva.directive';
import { PipePersonalPipe } from './pipes/pipe-personal.pipe';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'activePost',
    component: ActivePostsComponent,
  },
  {
    path: 'inactivePost',
    component: InactivePostsComponent,
  },
  {
    path:'postdetail/:id',
    component:PostDetailComponent,

  },
  {
    path: '**',
    component: Error404Component,
  },
];
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
    ContenutoConsigliatoComponent,
    Error404Component,
    ContentActivePostComponent,
    ContentInactivePostComponent,
    DirettivaDirective,
    PipePersonalPipe,
    SinglePostComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
