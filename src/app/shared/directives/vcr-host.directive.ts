import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[vcrHost]'
})
export class VcrHostDirective {
  constructor(public vcr: ViewContainerRef) {}
}
