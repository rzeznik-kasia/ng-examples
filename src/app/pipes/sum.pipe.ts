import {Pipe, PipeTransform} from "@angular/core";


/*dekorator bezposrednio nad klasa*/
@Pipe({ /* zadeklarowac w app.module*/
  name: 'sum'
})
export class SumPipe implements PipeTransform { /*alt+enter -> dochodzi import*/ /*alat+enter na klasie implementacje metod wskakuja z menu dropdown wybieramy jak*/
/*ctrl + i -> wskakuje implementacja*/
/*alt + insert -> tez jakies rzeczy ktore moga sie wygenerowac*/

/*shift f6 = refaktoryzacja*/
  transform(arr: any, ...args): any {
    return arr.reduce((acc, item) => {
      return item + acc;
    }, 0);
  }

}
