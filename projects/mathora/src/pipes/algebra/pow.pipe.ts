import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pow', standalone: false })
export class PowPipe implements PipeTransform {
  transform(base: number, exponent: number): number {
    if (
      typeof base !== 'number' ||
      typeof exponent !== 'number' ||
      isNaN(base) ||
      isNaN(exponent)
    ) {
      return NaN;
    }
    return Math.pow(base, exponent);
  }
}
