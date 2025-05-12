import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'abs', standalone: false })
export class AbsPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.abs(value);
  }
}
