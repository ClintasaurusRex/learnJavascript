# Lesson 9 Notes — Array Methods

## Key Idea

Array methods perform common operations without manually writing a `for` loop every time.

The main methods covered were:

```text
.forEach()
.map()
.filter()
.find()
.includes()
.reduce()
```

---

# Quick Comparison

| Method        | Main Job                    | Returns                 |
| ------------- | --------------------------- | ----------------------- |
| `.forEach()`  | Do something for every item | Usually nothing useful  |
| `.map()`      | Transform every item        | New array               |
| `.filter()`   | Keep matching items         | New array               |
| `.find()`     | Find first match            | One item or `undefined` |
| `.includes()` | Check whether value exists  | Boolean                 |
| `.reduce()`   | Combine items               | One final value         |

---

# `.forEach()`

Basic pattern:

```js
array.forEach(function (item) {
  // Do something with item
});
```

Example:

```js
const party = ["Clint", "Arthur", "Ellie"];

party.forEach(function (player) {
  console.log(`Player: ${player}`);
});
```

Use `.forEach()` when you want to perform an action for every item.

---

# `.forEach()` Versus `for`

Traditional loop:

```js
for (let i = 0; i < party.length; i++) {
  console.log(party[i]);
}
```

`.forEach()`:

```js
party.forEach(function (player) {
  console.log(player);
});
```

The current item is handed directly to the callback.

---

# Callback Function

This part:

```js
function (player) {
  console.log(player);
}
```

is a function passed into another function.

This is commonly called a **callback function**.

The array method calls that function for you.

---

# `.map()`

Pattern:

```js
const newArray = array.map(function (item) {
  return changedItem;
});
```

Example:

```js
const levels = [5, 10, 15, 20];

const doubledLevels = levels.map(function (level) {
  return level * 2;
});
```

Result:

```js
[10, 20, 30, 40];
```

---

# `.map()` Rule

Think:

```text
One item in
One transformed item out
```

Example:

```text
5  → 10
10 → 20
15 → 30
20 → 40
```

The new array normally has the same number of items as the original.

---

# `.map()` Does Not Change the Original

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(function (number) {
  return number * 2;
});
```

Results:

```text
numbers → [1, 2, 3]
doubled → [2, 4, 6]
```

---

# Forgetting `return` in `.map()`

Incorrect:

```js
const doubled = numbers.map(function (number) {
  number * 2;
});
```

This produces values of:

```text
undefined
```

Correct:

```js
const doubled = numbers.map(function (number) {
  return number * 2;
});
```

---

# `.filter()`

Pattern:

```js
const filteredArray = array.filter(function (item) {
  return condition;
});
```

Example:

```js
const levels = [5, 10, 15, 20, 25, 30];

const highLevels = levels.filter(function (level) {
  return level >= 20;
});
```

Result:

```js
[20, 25, 30];
```

---

# `.filter()` Rule

Think:

```text
true  → keep item
false → remove item
```

Example:

```js
return level >= 20;
```

---

# `.find()`

Pattern:

```js
const result = array.find(function (item) {
  return condition;
});
```

Example:

```js
const party = ["Clint", "Arthur", "Ellie"];

const foundPlayer = party.find(function (player) {
  return player === "Ellie";
});
```

Result:

```text
Ellie
```

---

# `.find()` Only Returns the First Match

```js
const numbers = [5, 10, 15, 20];

const result = numbers.find(function (number) {
  return number > 10;
});
```

Result:

```text
15
```

It stops when the first match is found.

---

# `.find()` Can Return `undefined`

```js
const foundPlayer = party.find(function (player) {
  return player === "Kratos";
});
```

If Kratos does not exist:

```text
undefined
```

This means:

```text
No matching item was found.
```

---

# Case-Insensitive `.find()`

```js
const foundPlayer = party.find(function (player) {
  return player.toLowerCase() === "ELLIE".toLowerCase();
});
```

This makes capitalization irrelevant.

---

# `.includes()`

Pattern:

```js
array.includes(value);
```

Example:

```js
const hasGeralt = party.includes("Geralt");
```

Result:

```js
true;
```

Another example:

```js
const hasKratos = party.includes("Kratos");
```

Result:

```js
false;
```

---

# `.find()` Versus `.includes()`

Use:

```js
.find()
```

when you want:

```text
the actual matching item
```

Use:

```js
.includes()
```

when you want:

```text
true or false
```

---

# `.reduce()`

Pattern:

```js
const result = array.reduce(function (accumulator, item) {
  return accumulator + item;
}, startingValue);
```

Example:

```js
const healthValues = [100, 80, 65, 90];

const totalHealth = healthValues.reduce(function (accumulator, health) {
  return accumulator + health;
}, 0);
```

Result:

```text
335
```

---

# Accumulator Mental Model

```text
The accumulator remembers the result so far.
```

Example:

```text
Start: 0

0 + 100 = 100
100 + 80 = 180
180 + 65 = 245
245 + 90 = 335
```

---

# Initial Value

This:

```js
}, 0);
```

means:

```text
Start accumulator at zero.
```

For numeric totals, this is usually what you want.

---

# Empty Arrays and `.reduce()`

Without an initial value:

```js
[].reduce(function (accumulator, number) {
  return accumulator + number;
});
```

JavaScript throws an error.

With an initial value:

```js
[].reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

Result:

```text
0
```

---

# Array Method Pipeline

Methods can process data in stages.

```js
const scores = [45, 80, 72, 30, 95, 60];

const passingScores = scores.filter(function (score) {
  return score >= 60;
});

const bonusScores = passingScores.map(function (score) {
  return score + 5;
});

const totalScore = bonusScores.reduce(function (accumulator, score) {
  return accumulator + score;
}, 0);
```

Flow:

```text
Original
↓
Filter
↓
Map
↓
Reduce
↓
Final value
```

---

# Choosing the Correct Method

Ask yourself what you want.

## "Do something with every item"

Use:

```js
.forEach()
```

## "Change every item"

Use:

```js
.map()
```

## "Keep only some items"

Use:

```js
.filter()
```

## "Find one matching item"

Use:

```js
.find()
```

## "Does this exact value exist?"

Use:

```js
.includes()
```

## "Turn the entire array into one result"

Use:

```js
.reduce()
```

---

# Common Mistakes

## Using `.forEach()` When You Need a New Array

Instead of trying to transform with:

```js
.forEach()
```

use:

```js
.map()
```

when the goal is a new transformed array.

---

## Forgetting `return`

Incorrect:

```js
const highScores = scores.filter(function (score) {
  score >= 60;
});
```

Correct:

```js
const highScores = scores.filter(function (score) {
  return score >= 60;
});
```

---

## Expecting `.find()` to Return an Array

`.find()`:

```js
15;
```

`.filter()`:

```js
[15, 20];
```

They solve different problems.

---

## Forgetting `.find()` Can Return `undefined`

Always remember:

```text
Match found    → item
No match found → undefined
```

---

## Expecting `.includes()` to Return the Item

This:

```js
party.includes("Geralt");
```

returns:

```js
true;
```

not:

```text
Geralt
```

---

## Forgetting the Initial `.reduce()` Value

Preferred:

```js
const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

The `0` gives the accumulator a clear starting value.

---

# Problem-Solving Checklist

Before choosing an array method:

1. Do I want to perform an action for every item?
   - `.forEach()`

2. Do I want a changed version of every item?
   - `.map()`

3. Do I want only some items?
   - `.filter()`

4. Do I want the first matching item?
   - `.find()`

5. Do I only need true or false for an exact value?
   - `.includes()`

6. Do I want one final result?
   - `.reduce()`

Then:

7. Decide what the current item parameter should be named.
8. Decide what the callback needs to return.
9. Store new arrays in new variables.
10. Check whether the original array should remain unchanged.

---

# Completed Skills

- [x] I can use `.forEach()`.
- [x] I understand callback parameters.
- [x] I can use `.map()`.
- [x] I understand that `.map()` returns a new array.
- [x] I can use `.filter()`.
- [x] I understand that `.filter()` keeps items when the condition is true.
- [x] I can use `.find()`.
- [x] I understand that `.find()` returns one item.
- [x] I know `.find()` can return `undefined`.
- [x] I can use `.includes()`.
- [x] I understand that `.includes()` returns a boolean.
- [x] I can use `.reduce()`.
- [x] I understand the accumulator.
- [x] I can provide an initial `.reduce()` value.
- [x] I can combine `.filter()`, `.map()`, and `.reduce()`.

---

# Quick Reference

```js
const numbers = [5, 10, 15, 20];

// forEach
numbers.forEach(function (number) {
  console.log(number);
});

// map
const doubled = numbers.map(function (number) {
  return number * 2;
});

// filter
const largeNumbers = numbers.filter(function (number) {
  return number >= 15;
});

// find
const foundNumber = numbers.find(function (number) {
  return number > 10;
});

// includes
const hasTen = numbers.includes(10);

// reduce
const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

---

# Final Solution

```js
const scores = [45, 80, 72, 30, 95, 60];

const passingScores = scores.filter(function (score) {
  return score >= 60;
});

const bonusScores = passingScores.map(function (score) {
  return score + 5;
});

const totalScore = bonusScores.reduce(function (accumulator, score) {
  return accumulator + score;
}, 0);

console.log("Passing scores:", passingScores);
console.log("Bonus scores:", bonusScores);
console.log(`Total score: ${totalScore}`);
```

---

# Next Lesson

**Lesson 10: More Modern Function Syntax and Array Work**

Topics:

- Arrow functions
- Converting normal functions to arrow functions
- Short arrow-function returns
- Using arrow functions with array methods
- Chaining array methods
- Cleaner intermediate JavaScript patterns
