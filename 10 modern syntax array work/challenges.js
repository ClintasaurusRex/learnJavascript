import { spacer } from "../util.js";

/*
==================================================
LESSON 10 — CHALLENGE 1: ARROW FUNCTIONS
==================================================

Create this function using arrow-function syntax:

multiply

It should accept:

- numberOne
- numberTwo

Return the two numbers multiplied together.

Call:

multiply(5, 4)

Store the result in:

result

Print:

Result: 20

REQUIREMENTS:

1. Store the function in a const variable.
2. Use =>.
3. Use two parameters.
4. Use the short-return syntax.
5. Do not use the function keyword.

EXPECTED SHAPE:

const multiply = (numberOne, numberTwo) =>
  numberOne * numberTwo;

==================================================
*/

// Write your code below
const multipy = (num1, num2) => num1 * num2;
console.log(multipy(5, 5));
spacer();
/*
==================================================
LESSON 10 — CHALLENGE 2: ARROW FUNCTION + MAP
==================================================

Create this array:

const numbers = [2, 4, 6, 8];

Use .map() with an arrow function to create:

squaredNumbers

Each number should be multiplied by itself.

EXPECTED RESULT:

[4, 16, 36, 64]

REQUIREMENTS:

1. Use .map().
2. Use an arrow function.
3. Use short-return syntax.
4. Do not use the function keyword.
5. Do not use a for loop.

EXPECTED SHAPE:

const squaredNumbers = numbers.map((number) =>
  number * number
);

Print the final array.

==================================================
*/

// Write your code below
const numbers = [2, 4, 6, 8];

const squaredNumbers = numbers.map((number) => number * number);

console.log(squaredNumbers);
spacer();

/*
==================================================
LESSON 10 — CHALLENGE 3: ARROW FUNCTION + FILTER
==================================================

Create this array:

const scores = [45, 82, 67, 91, 38, 75];

Use .filter() with a short arrow function to create:

passingScores

Only keep scores greater than or equal to 60.

EXPECTED RESULT:

[82, 67, 91, 75]

REQUIREMENTS:

1. Use .filter().
2. Use an arrow function.
3. Use short-return syntax.
4. Do not use the function keyword.
5. Do not use braces.
6. Do not write return.
7. Print passingScores.

EXPECTED SHAPE:

const passingScores = scores.filter(
  (score) => score >= 60
);

==================================================
*/

// Write your code below
const scores = [45, 82, 67, 91, 38, 75];

const passingScores = scores.filter((score) => score >= 60);
console.log(passingScores);
spacer();
/*
==================================================
LESSON 10 — CHALLENGE 4: CHAIN ARRAY METHODS
==================================================

Create this array:

const levels = [5, 10, 15, 20, 25, 30];

In ONE expression:

1. Filter the array so only levels >= 15 remain.
2. Then use .map() to double those values.

Store the result in:

poweredLevels

EXPECTED RESULT:

[30, 40, 50, 60]

REQUIREMENTS:

1. Use .filter().
2. Use .map().
3. Chain the methods together.
4. Use arrow functions.
5. Use short-return syntax.
6. Do not create an intermediate filtered array.
7. Print poweredLevels.

STARTING SHAPE:

const poweredLevels = levels
  .filter((level) => ...)
  .map((level) => ...);

==================================================
*/

// Write your code below

const levels = [5, 10, 15, 20, 25, 30];

const poweredLevels = levels
  .filter((level) => level >= 15)
  .map((level) => level * 2);
console.log(poweredLevels);
spacer();
/*
==================================================
LESSON 10 — CHALLENGE 5: FULL METHOD CHAIN
==================================================

Create this array:

const scores = [40, 75, 90, 55, 100, 65];

In ONE chained expression:

1. Keep scores greater than or equal to 60.
2. Add 10 points to each passing score.
3. Add all of the new scores together.

Store the final number in:

totalScore

EXPECTED FLOW:

Original:

[40, 75, 90, 55, 100, 65]

After filter:

[75, 90, 100, 65]

After adding 10:

[85, 100, 110, 75]

Final total:

370

Print:

Total score: 370

REQUIREMENTS:

1. Use .filter().
2. Use .map().
3. Use .reduce().
4. Chain all three methods.
5. Use arrow functions.
6. Use short-return syntax.
7. Give .reduce() a starting value of 0.
8. Do not create intermediate arrays.

STARTING SHAPE:

const totalScore = scores
  .filter((score) => ...)
  .map((score) => ...)
  .reduce((accumulator, score) => ..., 0);

==================================================
*/

// Write your code below
