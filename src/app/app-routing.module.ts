import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'home/:page',component: HomeComponent},
  {path: 'article/:id',component: ArticleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }