import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mean', standalone: false })
export class MeanPipe implements PipeTransform {
  transform(values: number[]): number {
    if (!Array.isArray(values) || values.length === 0) return NaN;

    const validNumbers = values.filter(v => typeof v === 'number' && !isNaN(v));
    if (validNumbers.length === 0) return NaN;

    const sum = validNumbers.reduce((acc, val) => acc + val, 0);
    return sum / validNumbers.length;
  }
}
