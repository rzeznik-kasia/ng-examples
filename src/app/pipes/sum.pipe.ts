import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {


  transform(arr: any, ...args): any {
    return arr.reduce((acc, item) => {
      return item + acc;
    }, 0);
  }

}
