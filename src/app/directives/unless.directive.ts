import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(cond: boolean) {
    if (!cond) {
      this.vcRef.createEmbeddedView(this.tRef)
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
