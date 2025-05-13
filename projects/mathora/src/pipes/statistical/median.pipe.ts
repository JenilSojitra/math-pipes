import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'median', standalone: false })
export class MedianPipe implements PipeTransform {
  transform(values: number[]): number {
    if (!Array.isArray(values) || values.length === 0) return NaN;

    const sorted = values
      .filter(v => typeof v === 'number' && !isNaN(v))
      .sort((a, b) => a - b);

    const len = sorted.length;
    if (len === 0) return NaN;

    const mid = Math.floor(len / 2);
    return len % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }
}
