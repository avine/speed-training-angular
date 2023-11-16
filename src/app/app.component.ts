import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FooDirective } from './foo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgIf, NgTemplateOutlet, RouterOutlet, FooDirective, DemoComponent],
})
export class AppComponent {
  bool = false;
}
