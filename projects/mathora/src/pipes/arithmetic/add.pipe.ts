import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'add', standalone: false })
export class AddPipe implements PipeTransform {
  transform(value: number, addend: number): number {
    if (typeof value !== 'number' || typeof addend !== 'number' || isNaN(value) || isNaN(addend)) {
      return NaN;
    }
    return value + addend;
  }
}
