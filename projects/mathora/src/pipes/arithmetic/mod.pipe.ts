import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mod', standalone: false })
export class ModPipe implements PipeTransform {
  transform(value: number, divisor: number): number {
    if (
      typeof value !== 'number' ||
      typeof divisor !== 'number' ||
      isNaN(value) ||
      isNaN(divisor) ||
      divisor === 0
    ) {
      return NaN;
    }
    return value % divisor;
  }
}
