import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mode', standalone: false })
export class ModePipe implements PipeTransform {
  transform(values: number[]): number | number[] | null {
    if (!Array.isArray(values) || values.length === 0) return null;

    const freqMap = new Map<number, number>();
    values.forEach(v => {
      if (typeof v === 'number' && !isNaN(v)) {
        freqMap.set(v, (freqMap.get(v) || 0) + 1);
      }
    });

    if (freqMap.size === 0) return null;

    const maxFreq = Math.max(...Array.from(freqMap.values()));
    const modes = Array.from(freqMap.entries())
      .filter(([_, freq]) => freq === maxFreq)
      .map(([num]) => num);

    return modes.length === 1 ? modes[0] : modes;
  }
}
