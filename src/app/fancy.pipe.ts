import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancy',
  standalone: true,
  pure: false,
})
export class FancyPipe implements PipeTransform {
  transform(value: string[], sep = ', '): string {
    return value.join(sep);
  }
}
