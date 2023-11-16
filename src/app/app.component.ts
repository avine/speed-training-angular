import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, ChildComponent],
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ChildComponent) childComponent?: ChildComponent;

  @ViewChildren(ChildComponent) childs?: ChildComponent;

  constructor() {
    console.log('PARENT: constructor', this.childComponent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PARENT: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('PARENT: ngOnInit', this.childComponent);
  }

  ngAfterViewInit(): void {
    console.log('PARENT: ngAfterViewInit', this.childComponent, this.childs);
  }

  ngOnDestroy(): void {
    console.log('PARENT: ngOnDestroy');
  }
}
