import { Injectable } from '@angular/core';
import { ComputeService } from './compute.service';
//Servicio mock para devolver el computo

@Injectable()
export class ApiRequesterService {

  constructor(private _computeService: ComputeService) { }

  //mockear get sin peticion http (suponer que la peticion http es el servicio de computo)
  public get(a: number, b: number): Promise<Array<Object>> {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this._computeService.computeAlgorithm(a,b));
        }, 2000);
      });
      return promise;
  }

}
