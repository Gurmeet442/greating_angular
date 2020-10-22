import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(element:ElementRef) {
    element.nativeElement.autofocus = true
   }

}
