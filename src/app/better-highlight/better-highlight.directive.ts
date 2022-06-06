import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseenter') mouseover(EventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(EventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

}
