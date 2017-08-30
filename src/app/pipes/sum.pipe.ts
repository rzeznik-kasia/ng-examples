import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ /* zadeklarowac w app.module*/ /*dekorator bezposrednio nad klasa*/
  name: 'sum'
})
export class SumPipe implements PipeTransform { /*alt+enter -> dochodzi import*/ /*alat+enter na klasie implementacje metod wskakuja z menu dropdown wybieramy jak*/
/*ctrl + i -> wskakuje implementacja*/
/*alt + insert -> tez jakies rzeczy ktore moga sie wygenerowac*/


  transform(arr: any, ...args): any { /*shift f6 = refaktoryzacja*/
    return arr.reduce((acc, item) => {
      return item + acc;
    }, 0); /*acc na poczatku jest ustawione na 0*/
  }

}
