import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {
  @Input('appOapacity') opacity: number = 1
  @Input('newOpacity') newOpacity: number = 0.5

  constructor(private el: ElementRef) { }

  @HostListener('dragstart') OnDragStart() { }

  @HostListener('dragend') OnDragEnd() {
    this.setOpacity()
  }

  setOpacity() {
    this.el.nativeElement.style.opacity = this.newOpacity.toString()
  }


}
