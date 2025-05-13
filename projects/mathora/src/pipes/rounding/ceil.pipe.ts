import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ceil', standalone: false })
export class CeilPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.ceil(value);
  }
}
