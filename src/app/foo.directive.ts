import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective {
  private templateRef = inject(TemplateRef);

  private viewContainerRef = inject(ViewContainerRef);

  @Input() set appFoo(value: number) {
    Array(value)
      .fill('')
      .forEach(() => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      });
  }
}
