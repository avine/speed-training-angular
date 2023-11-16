import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  @Input({ required: true }) theTmpl!: TemplateRef<unknown>;
}
