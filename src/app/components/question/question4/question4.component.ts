import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';
import { ComputeService } from '../../../util/compute.service';


@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  public resultObject: Array<Object>;
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

  constructor(private _location: Location, private _computeService: ComputeService) {
    this.submitted = false;
  }

  ngOnInit() {}

  onSubmit(){
    let a = this.numberForm.get('Inumber1').value;
    let b = this.numberForm.get('Inumber2').value;
    this.resultObject = this._computeService.computeAlgorithm(a,b);
    console.log(this.resultObject);
    this.submitted = true;
  }

}
