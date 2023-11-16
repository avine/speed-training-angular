import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FindDirective } from '../../find.directive';

@Component({
  selector: 'app-kid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.scss',
})
export class KidComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) data!: number;

  @ContentChild(FindDirective) find?: FindDirective;

  constructor() {
    console.log('KID: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('KID: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('KID: ngOnInit', this.data, this.find);
  }

  ngAfterContentInit(): void {
    console.log('KID: ngAfterContentInit', this.find);
  }

  ngAfterViewInit(): void {
    console.log('KID: ngAfterViewInit', this.find);
  }

  ngOnDestroy(): void {
    console.log('KID: ngOnDestroy');
  }
}
