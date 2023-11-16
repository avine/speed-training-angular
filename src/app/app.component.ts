import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FancyPipe } from './fancy.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CurrencyPipe, FancyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'speed-training-angular';

  appDate = new Date();

  price = 12.436748967;

  array = ['a', 'c', 'b'];
}
