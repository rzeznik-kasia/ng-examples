import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class ItemsService {

  constructor(private http:Http) { }

  getItemsFromServer(): Observable<any> {
    return this.http
      .get('https://emitter.pl/api/items') /*dane zanim dojda do subscriba mozemy przetwarzac np. funcja map.*/
      .map((resp)=> {
        return resp.json().data;
      })
  }

}
