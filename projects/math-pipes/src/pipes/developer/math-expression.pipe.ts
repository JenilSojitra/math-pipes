import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mathExpression', standalone: false })
export class MathExpressionPipe implements PipeTransform {
  transform(expression: string): number {
    try {
      if (typeof expression !== 'string') return NaN;

      // Replace ^ with ** for exponentiation
      const sanitized = expression.replace(/\^/g, '**');

      // Use Function constructor (sandboxed eval alternative)
      const result = new Function(`return (${sanitized})`)();
      return typeof result === 'number' && isFinite(result) ? result : NaN;
    } catch {
      return NaN;
    }
  }
}
