import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterOneComponent } from './chapters/chapter-one/chapter-one.component';

const routes: Routes = [
  { path: 'chapter-one', component: ChapterOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
