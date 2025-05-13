import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tan', standalone: false })
export class TanPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.tan(value);
  }
}
