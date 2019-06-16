import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
  path: "",
    component: LayoutComponent,
    children: [
      {
        path: "preguntas",
        loadChildren: '../components/question/question.module#QuestionModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
