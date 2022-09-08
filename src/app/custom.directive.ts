import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})

export class CustomDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string = ''

  @Input('appCustom') highlightColor: string = ""


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "red")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }



  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
