import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortenNumber', standalone: false })
export class ShortenNumberPipe implements PipeTransform {
  transform(value: number, digits: number = 1): string {
    if (typeof value !== 'number' || isNaN(value)) return '';

    const units = ['K', 'M', 'B', 'T'];
    const divisor = [1e3, 1e6, 1e9, 1e12];

    for (let i = divisor.length - 1; i >= 0; i--) {
      if (Math.abs(value) >= divisor[i]) {
        return (value / divisor[i]).toFixed(digits) + units[i];
      }
    }

    return value.toString();
  }
}
