import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sqrt', standalone: false })
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || value < 0 || !isFinite(value)) return NaN;
    return Math.sqrt(value);
  }
}
