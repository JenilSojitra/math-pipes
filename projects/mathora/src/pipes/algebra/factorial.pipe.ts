import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'factorial', standalone: false })
export class FactorialPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) return NaN;

    let result = 1;
    for (let i = 2; i <= value; i++) {
      result *= i;
    }
    return result;
  }
}
