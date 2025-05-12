import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage', standalone: false })
export class PercentagePipe implements PipeTransform {
  transform(value: number, total: number): number {
    if (
      typeof value !== 'number' ||
      typeof total !== 'number' ||
      isNaN(value) ||
      isNaN(total) ||
      total === 0
    ) {
      return NaN;
    }
    return (value / total) * 100;
  }
}
