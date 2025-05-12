import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'log', standalone: false })
export class LogPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || value <= 0 || !isFinite(value)) return NaN;
    return Math.log(value);
  }
}
