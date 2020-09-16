import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterOneComponent } from './chapters/chapter-one/chapter-one.component';
import { ChaptersComponent } from './chapters/chapters.component';

const routes: Routes = [
  { path: '', redirectTo: 'chapters', pathMatch: 'full' },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'chapters/chapter-one', component: ChapterOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
