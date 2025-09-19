import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardShadow]'
})
export class CardShadow {

  constructor(private element:ElementRef , private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'box-shadow .8s ease-in-out');


    this.renderer.setStyle( 
      this.element.nativeElement,
      'box-shadow',
      '0 2px 6px 0 rgba(0, 0, 0, 0.15)'
    );
   }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow =  '0 12px 24px 0 rgba(0, 0, 0, 0.3), 0 18px 40px 0 rgba(0, 0, 0, 0.25)';
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid #28a745');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow =   '0 2px 6px 0 rgba(0, 0, 0, 0.15)';
      this.renderer.setStyle(this.element.nativeElement, 'border', '.5px solid transparent'); }

} 
