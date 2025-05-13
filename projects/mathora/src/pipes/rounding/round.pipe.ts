import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'round', standalone: false })
export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.round(value);
  }
}
