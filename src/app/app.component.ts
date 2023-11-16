import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'speed-training-angular';

  constructor() {
    console.log('CONSTRUCTOR PARENT');
  }

  ngOnInit(): void {
    console.log('INIT PARENT');
  }

  protected log(e?: Event) {
    console.log('PARENT', e);
  }
}
