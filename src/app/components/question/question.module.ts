import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputeService } from '../../util/compute.service';

@NgModule({
  declarations: [
    QuestionComponent,
    Question4Component,
    Question5Component
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ComputeService
  ]
})
export class QuestionModule { }
