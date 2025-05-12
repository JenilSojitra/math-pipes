import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cos', standalone: false })
export class CosPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.cos(value);
  }
}
