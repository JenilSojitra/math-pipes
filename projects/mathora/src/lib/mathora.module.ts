import { NgModule } from '@angular/core';

import { AddPipe } from '../pipes/arithmetic/add.pipe';
import { MultiplyPipe } from '../pipes/arithmetic/multiply.pipe';
import { DividePipe } from '../pipes/arithmetic/divide.pipe';
import { SubtractPipe } from '../pipes/arithmetic/subtract.pipe';
import { PercentagePipe } from '../pipes/arithmetic/percentage.pipe';

import { SqrtPipe } from '../pipes/algebra/sqrt.pipe';
import { LogPipe } from '../pipes/algebra/log.pipe';
import { FactorialPipe } from '../pipes/algebra/factorial.pipe';
import { PowPipe } from '../pipes/algebra/pow.pipe';

import { SinPipe } from '../pipes/trigonometry/sin.pipe';
import { CosPipe } from '../pipes/trigonometry/cos.pipe';
import { TanPipe } from '../pipes/trigonometry/tan.pipe';

import { ModPipe } from '../pipes/arithmetic/mod.pipe';
import { RoundPipe } from '../pipes/rounding/round.pipe';
import { CeilPipe } from '../pipes/rounding/ceil.pipe';
import { FloorPipe } from '../pipes/rounding/floor.pipe';

import { AbsPipe } from '../pipes/misc/abs.pipe';

import { FormatNumberPipe } from '../pipes/developer/format-number.pipe';
import { MathExpressionPipe } from '../pipes/developer/math-expression.pipe';
import { ShortenNumberPipe } from '../pipes/developer/shorten-number.pipe';

@NgModule({
  declarations: [

    AddPipe,
    MultiplyPipe,
    DividePipe,
    SubtractPipe,
    PercentagePipe,

    SqrtPipe,
    LogPipe,
    FactorialPipe,
    PowPipe,

    AbsPipe,

    SinPipe,
    CosPipe,
    TanPipe,

    ModPipe,
    RoundPipe,
    CeilPipe,
    FloorPipe,

    FormatNumberPipe,
    MathExpressionPipe,
    ShortenNumberPipe,
  ],
  exports: [

    AddPipe,
    MultiplyPipe,
    DividePipe,
    SubtractPipe,
    PercentagePipe,

    SqrtPipe,
    LogPipe,
    FactorialPipe,
    PowPipe,

    AbsPipe,

    SinPipe,
    CosPipe,
    TanPipe,

    ModPipe,
    RoundPipe,
    CeilPipe,
    FloorPipe,

    FormatNumberPipe,
    MathExpressionPipe,
    ShortenNumberPipe,

  ]
})
export class MathoraModule { }
