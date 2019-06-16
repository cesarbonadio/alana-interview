import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';

const routes: Routes = [
   {
     path: '',
     component: QuestionComponent,
     children: [
      {
        path: 'pregunta-4',
        component: Question4Component
      },
      {
        path: 'pregunta-5',
        component: Question5Component
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
