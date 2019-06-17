import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';
import { ApiRequesterService } from '../../../util/api-requester.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  public  resultObject: Array<Object>;
  public submitted: boolean;

  public numberForm: FormGroup = new FormGroup({
    Inumber1: new FormControl(null, [
      Validators.required,
      Validators.min(1)
    ]),
    Inumber2: new FormControl(null, [
      Validators.required,
      Validators.min(1)
    ])
  });

  constructor( private _location: Location, private _apiRequester : ApiRequesterService) {
    this.submitted = false;
  }

  ngOnInit() {}

  onSubmit(){
    let a = this.numberForm.get('Inumber1').value;
    let b = this.numberForm.get('Inumber2').value;
    this.requestAlgorithCompute(a,b);
  }


  requestAlgorithCompute(a:number,b:number){
    this._apiRequester
        .get(a,b)
        .then(response => {
              this.resultObject = response,
              this.submitted = true
        });
  }

}
