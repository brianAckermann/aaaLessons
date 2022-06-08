import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'lightblue';
  @Input() defaultTextColor: string = 'blue';

  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @Input() highlightTextColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultTextColor);
  }

  @HostListener('mouseenter') mouseover(EventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.highlightTextColor);
  }

  @HostListener('mouseleave') mouseleave(EventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultTextColor);
  }

}
