import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FindDirective } from '../find.directive';
import { KidComponent } from './kid/kid.component';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  imports: [CommonModule, FindDirective, KidComponent],
})
export class ChildComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) data!: number;

  bool = true;

  constructor() {
    console.log('CHILD: constructor', this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('CHILD: ngOnInit', this.data);
  }

  ngAfterViewInit(): void {
    console.log('CHILD: ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('CHILD: ngOnDestroy');
  }
}
