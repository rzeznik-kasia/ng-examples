import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input() set appSetColor(value){
    this.renderer.setStyle(
      this.element.nativeElement, /*wskazuje na natywny obiekt javascriptowy*/
      'background', value
    );
  };
  constructor(private element: ElementRef, /*referencaj do znacznika */
              private renderer: Renderer2) { /*umozliwi prace na znaczkiku*/

  }
}
