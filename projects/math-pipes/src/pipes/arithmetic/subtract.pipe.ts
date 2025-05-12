import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'subtract', standalone: false })
export class SubtractPipe implements PipeTransform {
  transform(value: number, subtrahend: number): number {
    if (
      typeof value !== 'number' ||
      typeof subtrahend !== 'number' ||
      isNaN(value) ||
      isNaN(subtrahend)
    ) {
      return NaN;
    }
    return value - subtrahend;
  }
}
