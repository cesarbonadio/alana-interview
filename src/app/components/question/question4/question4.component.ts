import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';


@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  public   resultObject: Array<Object>;


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

  constructor(private _location: Location) {
  }

  ngOnInit() {}

  isSquare(n: number){
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  sumOfDivisors(n: number){
    let sum = 0;
    for (let j=1; j<=n; j++)
        if(n%j==0)
          sum += (j*j);
    return sum;
  }

  computeAlgorithm(a: number,b: number): Array<Object>{
    let divisors = [];
    let index = 0;
    for (let i=a; i<=b; i++){
      let sum = this.sumOfDivisors(i);
      if(this.isSquare(sum)){
        divisors[index]={
          "number":i,
          "sum":sum
        };
        index++;
      }
    }
    return divisors;
  }

  onSubmit(){
    let a = this.numberForm.get('Inumber1').value;
    let b = this.numberForm.get('Inumber2').value;
    this.resultObject = this.computeAlgorithm(a,b);
    console.log(this.resultObject);
  }

  goBack(){
    this._location.back();
  }

}
