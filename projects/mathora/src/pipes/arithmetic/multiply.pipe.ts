import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'multiply', standalone: false })
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multiplier: number): number {
    if (
      typeof value !== 'number' ||
      typeof multiplier !== 'number' ||
      isNaN(value) ||
      isNaN(multiplier)
    ) {
      return NaN;
    }
    return value * multiplier;
  }
}
