import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatNumber', standalone: false })
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, locale: string = 'en-US'): string {
    if (typeof value !== 'number' || isNaN(value)) return '';
    return new Intl.NumberFormat(locale).format(value);
  }
}
