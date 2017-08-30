import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input() appSetColor;
  constructor() {
    /*sprobujwmy wyswietlic set color*/
    setTimeout((data)=> {
      console.log(this.appSetColor);
    })
  }
}
