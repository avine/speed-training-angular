import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight?: string;

  private currentColor?: string;

  @HostBinding('style.color') get color() {
    return this.currentColor;
  }

  @HostListener('mouseover') onOover() {
    this.currentColor = this.appHighlight || 'red';
  }

  @HostListener('mouseleave') onLeave() {
    this.currentColor = undefined;
  }
}
