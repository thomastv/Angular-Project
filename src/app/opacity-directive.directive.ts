import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacityDirective]'
})
export class OpacityDirectiveDirective {

  constructor(private el:ElementRef) { }
  @Input('appOpacityDirective') opacity:string =""

  @HostListener('dragstart') onDragStart(){
    this.highlight('1');
  }
  @HostListener('dragend') onDragEnd(){
    this.highlight(this.opacity || '1');
  }
  private highlight(opacity:string){
    this.el.nativeElement.style.opacity = opacity;
  }
  
}
