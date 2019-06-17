import { Injectable } from '@angular/core';

@Injectable()
export class ComputeService {
  constructor() { }

  public isSquare(n: number){
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  public sumOfDivisors(n: number){
    let sum = 0;
    for (let j=1; j<=n; j++)
        if(n%j==0)
          sum += (j*j);
    return sum;
  }

  public computeAlgorithm(a: number,b: number): Array<Object>{
    let divisors = [];
    let index = 0;
    let from = 0;
    let to = 0;

    if (a>b) {
       from = b;
       to = a;
    } else {
       from = a;
       to = b;
    }
    for (let i=from; i<=to; i++){
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

}
