# Mathora

A collection of custom Angular pipes for mathematical operations, including arithmetic, algebra, trigonometry, rounding, statistical calculations, and developer utilities.

## Table of Contents

- [Installation](#installation)
- [Available Pipes](#available-pipes)
  - [Algebra](#algebra)
  - [Arithmetic](#arithmetic)
  - [Developer](#developer)
  - [Misc](#misc)
  - [Rounding](#rounding)
  - [Statistical](#statistical)
  - [Trigonometry](#trigonometry)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To use `mathora` in your Angular project, follow these steps:

1. Install the package using npm or yarn:

   ```bash
   npm install mathora
   ```

   or

   ```bash
   yarn add mathora
   ```

2. Import the `MathoraModule` in your Angular module (e.g., `app.module.ts`):

   ```typescript
   import { MathoraModule } from "mathora";

   @NgModule({
     imports: [
       // other imports
       MathoraModule,
     ],
     // other configurations
   })
   export class AppModule {}
   ```

   **Note**: Verify the package name and Angular version compatibility in the project's documentation or `package.json`. You may need specific versions of Angular or other dependencies.

## Available Pipes

The `mathora` library provides a variety of pipes organized by functionality. Below is a detailed list of all available pipes, including descriptions and usage examples.

### Algebra

| Pipe        | Description                             | Example                | Output |
| ----------- | --------------------------------------- | ---------------------- | ------ |
| `factorial` | Calculates the factorial of a number.   | `{{ 5 \| factorial }}` | 120    |
| `log`       | Calculates the logarithm (base 10).     | `{{ 100 \| log }}`     | 2      |
| `pow`       | Raises a number to a specified power.   | `{{ 2 \| pow:3 }}`     | 8      |
| `sqrt`      | Calculates the square root of a number. | `{{ 16 \| sqrt }}`     | 4      |

### Arithmetic

| Pipe         | Description                            | Example                     | Output |
| ------------ | -------------------------------------- | --------------------------- | ------ |
| `add`        | Adds two numbers.                      | `{{ 2 \| add:3 }}`          | 5      |
| `subtract`   | Subtracts two numbers.                 | `{{ 5 \| subtract:3 }}`     | 2      |
| `multiply`   | Multiplies two numbers.                | `{{ 4 \| multiply:3 }}`     | 12     |
| `divide`     | Divides two numbers.                   | `{{ 10 \| divide:2 }}`      | 5      |
| `mod`        | Calculates the modulus of two numbers. | `{{ 10 \| mod:3 }}`         | 1      |
| `percentage` | Calculates the percentage of a number. | `{{ 50 \| percentage:20 }}` | 10     |

### Developer

| Pipe              | Description                                | Example                               | Output  |
| ----------------- | ------------------------------------------ | ------------------------------------- | ------- |
| `format-number`   | Formats a number with decimal places.      | `{{ 1234.5678 \| formatNumber:2 }}`   | 1234.57 |
| `math-expression` | Evaluates a mathematical expression.       | `{{ '2 + 3 * 4' \| mathExpression }}` | 14      |
| `shorten-number`  | Shortens large numbers (e.g., 1000 to 1K). | `{{ 1000000 \| shortenNumber }}`      | 1M      |

### Misc

| Pipe  | Description                             | Example           | Output |
| ----- | --------------------------------------- | ----------------- | ------ |
| `abs` | Returns the absolute value of a number. | `{{ -5 \| abs }}` | 5      |

### Rounding

| Pipe    | Description                         | Example              | Output |
| ------- | ----------------------------------- | -------------------- | ------ |
| `ceil`  | Rounds up to the nearest integer.   | `{{ 4.2 \| ceil }}`  | 5      |
| `floor` | Rounds down to the nearest integer. | `{{ 4.8 \| floor }}` | 4      |
| `round` | Rounds to the nearest integer.      | `{{ 4.5 \| round }}` | 5      |

### Statistical

| Pipe     | Description                        | Example                            | Output |
| -------- | ---------------------------------- | ---------------------------------- | ------ |
| `mean`   | Calculates the mean of an array.   | `{{ [1, 2, 3, 4, 5] \| mean }}`    | 3      |
| `median` | Calculates the median of an array. | `{{ [1, 2, 3, 4, 5] \| median }}`  | 3      |
| `mode`   | Calculates the mode of an array.   | `{{ [1, 2, 2, 3, 3, 3] \| mode }}` | 3      |
| `range`  | Calculates the range of an array.  | `{{ [1, 2, 3, 4, 5] \| range }}`   | 4      |

### Trigonometry

| Pipe  | Description                                   | Example          | Output |
| ----- | --------------------------------------------- | ---------------- | ------ |
| `cos` | Calculates the cosine of an angle (radians).  | `{{ 0 \| cos }}` | 1      |
| `sin` | Calculates the sine of an angle (radians).    | `{{ 0 \| sin }}` | 0      |
| `tan` | Calculates the tangent of an angle (radians). | `{{ 0 \| tan }}` | 0      |

## Contact

For questions, issues, or feedback, please contact Jenil Sojitra:

- **Email**: [jenilsojitra19@gmail.com](mailto:jenilsojitra19@gmail.com)
- **Portfolio**: [Jenil Sojitra](https://jenilsojitra.vercel.app/)
- **GitHub**: [jenilsojitra](https://github.com/jenilsojitra)
- **LinkedIn**: [jenilsojitra](https://www.linkedin.com/in/jenilsojitra/)
