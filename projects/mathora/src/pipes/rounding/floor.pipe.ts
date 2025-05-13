import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'floor', standalone: false })
export class FloorPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || isNaN(value)) return NaN;
    return Math.floor(value);
  }
}
