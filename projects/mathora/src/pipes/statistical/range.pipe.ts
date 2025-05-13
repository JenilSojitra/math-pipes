import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'range', standalone: false })
export class RangePipe implements PipeTransform {
  transform(values: number[]): number {
    if (!Array.isArray(values) || values.length === 0) return NaN;

    const validNumbers = values.filter(v => typeof v === 'number' && !isNaN(v));
    if (validNumbers.length === 0) return NaN;

    const min = Math.min(...validNumbers);
    const max = Math.max(...validNumbers);
    return max - min;
  }
}
