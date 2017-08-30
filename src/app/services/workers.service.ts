import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class WorkersService {

  constructor(private http:Http) { }

  getWorkersFromServer(): Observable<any> {
    return this.http
      .get('https://emitter.pl/api/workers') /*dane zanim dojda do subscriba mozemy przetwarzac np. funcja map.*/
      .map((resp)=> {
        return resp.json().data;
      })
  }

}
