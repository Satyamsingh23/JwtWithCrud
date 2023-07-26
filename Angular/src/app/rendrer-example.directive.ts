import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendrerExample]'
})
export class RendrerExampleDirective {


constructor(private render:Renderer2 , private  el:ElementRef) { }
@HostListener('mouseenter') onRowMouseEnter()
{
  this.render.setStyle(this.el.nativeElement,'background-color','pink');
}
 @HostListener('mouseleave') onRowMousseLeave()
{
 this.highlight(null)
}

private highlight(color :string |null){
  this.render.setStyle(this.el.nativeElement,'background-color','white')
}

}
