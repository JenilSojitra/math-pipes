import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sin', standalone: false })
export class SinPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.sin(value);
  }
}
