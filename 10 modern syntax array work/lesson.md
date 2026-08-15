# Lesson 10 — Arrow Functions and Array Method Chaining

## Lesson Goal

In this lesson, you learned modern JavaScript function syntax and how to combine array methods into clean data-processing chains.

You learned:

- Arrow functions
- Function expressions
- Short-return arrow functions
- Arrow functions with `.map()`
- Arrow functions with `.filter()`
- Arrow functions with `.reduce()`
- Method chaining
- Working with arrays of objects
- Extracting object properties with `.map()`
- Building complete `filter → map → reduce` pipelines

---

# 1. Function Declarations

A traditional function declaration looks like this:

```js
function multiply(num1, num2) {
  return num1 * num2;
}
```

Call it with:

```js
multiply(5, 5);
```

Result:

```text
25
```

---

# 2. Function Expressions

A function can also be stored inside a variable:

```js
const multiply = function (num1, num2) {
  return num1 * num2;
};
```

Call it normally:

```js
multiply(5, 5);
```

---

# 3. Arrow Functions

Arrow functions are another way to write function expressions.

```js
const multiply = (num1, num2) => {
  return num1 * num2;
};
```

The arrow is:

```js
=>
```

---

# 4. Short-Return Arrow Functions

When an arrow function only returns one expression, the braces and `return` can be removed.

Long version:

```js
const multiply = (num1, num2) => {
  return num1 * num2;
};
```

Short version:

```js
const multiply = (num1, num2) => num1 * num2;
```

Both do the same thing.

---

# 5. Arrow Functions with `.map()`

Older syntax:

```js
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});
```

Arrow function:

```js
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
```

Short arrow function:

```js
const squaredNumbers = numbers.map((number) => number * number);
```

---

# 6. Arrow Functions with `.filter()`

```js
const scores = [45, 82, 67, 91, 38, 75];

const passingScores = scores.filter((score) => score >= 60);
```

Result:

```js
[82, 67, 91, 75];
```

The callback returns a boolean.

If the result is `true`, the value is kept.

---

# 7. Method Chaining

Array methods can be connected together.

```js
const poweredLevels = levels
  .filter((level) => level >= 15)
  .map((level) => level * 2);
```

Each method receives the result of the previous method.

```text
Original array
      ↓
   filter
      ↓
Filtered array
      ↓
     map
      ↓
Final array
```

---

# 8. Filter Then Map

```js
const levels = [5, 10, 15, 20, 25, 30];

const poweredLevels = levels
  .filter((level) => level >= 15)
  .map((level) => level * 2);
```

Original:

```text
[5, 10, 15, 20, 25, 30]
```

After `.filter()`:

```text
[15, 20, 25, 30]
```

After `.map()`:

```text
[30, 40, 50, 60]
```

---

# 9. Filter → Map → Reduce

A common JavaScript pipeline is:

```js
array
  .filter(...)
  .map(...)
  .reduce(...);
```

Example:

```js
const scores = [40, 75, 90, 55, 100, 65];

const totalScore = scores
  .filter((score) => score >= 60)
  .map((score) => score + 10)
  .reduce((accumulator, score) => accumulator + score, 0);
```

Flow:

```text
[40, 75, 90, 55, 100, 65]

        ↓ filter >= 60

[75, 90, 100, 65]

        ↓ map + 10

[85, 100, 110, 75]

        ↓ reduce

370
```

---

# 10. Arrays of Objects

Array methods also work with objects.

```js
const players = [
  { name: "Clint", level: 10 },
  { name: "Arthur", level: 25 },
  { name: "Ellie", level: 18 },
];
```

The current item passed into the callback is now an object:

```js
players.filter((player) => player.level >= 18);
```

---

# 11. Filtering Objects

```js
const highLevelPlayers = players.filter((player) => player.level >= 18);
```

This means:

```text
Keep the player when their level is 18 or higher.
```

---

# 12. Mapping Objects to Properties

`.map()` can transform whole objects into one property.

```js
const names = players.map((player) => player.name);
```

Instead of:

```js
[
  { name: "Clint", level: 10 },
  { name: "Arthur", level: 25 },
];
```

you get:

```js
["Clint", "Arthur"];
```

---

# 13. Filter and Map Objects

```js
const highLevelPlayers = players
  .filter((player) => player.level >= 18)
  .map((player) => player.name);
```

Flow:

```text
Player objects
      ↓
Keep level >= 18
      ↓
Matching player objects
      ↓
Extract .name
      ↓
Array of names
```

---

# 14. Complete Object Pipeline

```js
const partyMembers = [
  { name: "Clint", level: 10, power: 40 },
  { name: "Arthur", level: 25, power: 80 },
  { name: "Ellie", level: 18, power: 65 },
  { name: "Geralt", level: 30, power: 100 },
  { name: "Joel", level: 12, power: 55 },
];

const totalPartyPower = partyMembers
  .filter((player) => player.level >= 15)
  .map((player) => player.power)
  .reduce((accumulator, power) => accumulator + power, 0);
```

First, `.filter()` keeps:

```text
Arthur
Ellie
Geralt
```

Then `.map()` extracts:

```js
[80, 65, 100];
```

Then `.reduce()` calculates:

```text
245
```

---

# 15. Why `.reduce()` Starts at Zero

```js
.reduce((accumulator, power) => accumulator + power, 0);
```

The final `0` is the starting accumulator.

```text
Start: 0

0 + 80 = 80
80 + 65 = 145
145 + 100 = 245
```

It also means an empty array safely reduces to:

```text
0
```

---

# 16. Reading Chains Top to Bottom

When you see:

```js
const result = array
  .filter(...)
  .map(...)
  .reduce(...);
```

Read it like instructions:

```text
Take the array.

Keep certain items.

Transform the remaining items.

Combine them into one result.
```

---

# Final Solution

```js
const partyMembers = [
  { name: "Clint", level: 10, power: 40 },
  { name: "Arthur", level: 25, power: 80 },
  { name: "Ellie", level: 18, power: 65 },
  { name: "Geralt", level: 30, power: 100 },
  { name: "Joel", level: 12, power: 55 },
];

const totalPartyPower = partyMembers
  .filter((player) => player.level >= 15)
  .map((player) => player.power)
  .reduce((accumulator, power) => accumulator + power, 0);

console.log(`Total party power: ${totalPartyPower}`);
```

---

# Lesson Summary

You learned how to:

- Write arrow functions
- Use short returns
- Convert regular callbacks into arrow functions
- Use arrow functions with array methods
- Chain array methods
- Filter arrays of objects
- Map objects into individual properties
- Reduce mapped values into totals
- Build modern JavaScript processing pipelines
