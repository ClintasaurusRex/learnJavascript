# Lesson 10 Notes — Arrow Functions and Chaining

## Arrow Function Cheat Sheet

Traditional function:

```js
function add(a, b) {
  return a + b;
}
```

Function expression:

```js
const add = function (a, b) {
  return a + b;
};
```

Arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

Short arrow function:

```js
const add = (a, b) => a + b;
```

---

# Short Return Rule

This:

```js
(number) => {
  return number * 2;
};
```

can become:

```js
(number) => number * 2;
```

when there is only one returned expression.

---

# Braces Mean You Need `return`

Correct:

```js
(number) => {
  return number * 2;
};
```

Incorrect:

```js
(number) => {
  number * 2;
};
```

The incorrect version returns:

```text
undefined
```

Short version:

```js
(number) => number * 2;
```

---

# `.map()`

Use `.map()` when you want to **transform every item**.

```js
const doubled = numbers.map((number) => number * 2);
```

Mental model:

```text
One item in → One changed item out
```

---

# `.filter()`

Use `.filter()` when you want to **keep only certain items**.

```js
const passingScores = scores.filter((score) => score >= 60);
```

Mental model:

```text
true  → keep it
false → remove it
```

---

# `.reduce()`

Use `.reduce()` when you want **one final value**.

```js
const total = numbers.reduce((accumulator, number) => accumulator + number, 0);
```

The accumulator remembers the result so far.

---

# `.reduce()` Initial Value

Prefer:

```js
.reduce((accumulator, value) => accumulator + value, 0);
```

The `0`:

- Gives the accumulator a clear starting value
- Handles empty arrays safely
- Makes the code easier to understand

---

# Method Chaining

```js
const result = array.filter((item) => condition).map((item) => transformation);
```

Each method works on the result of the previous method.

---

# Full Chain Pattern

```js
const result = array
  .filter((item) => condition)
  .map((item) => transformation)
  .reduce((accumulator, item) => accumulator + item, 0);
```

Remember:

```text
Filter → Keep
Map    → Change
Reduce → Combine
```

---

# Arrays of Objects

```js
const players = [
  { name: "Arthur", level: 25 },
  { name: "Ellie", level: 18 },
];
```

Inside the callback:

```js
(player) => player.level;
```

gets the level.

```js
(player) => player.name;
```

gets the name.

---

# Filter Objects

```js
const highLevelPlayers = players.filter((player) => player.level >= 18);
```

---

# Map Objects

```js
const playerNames = players.map((player) => player.name);
```

Result:

```js
["Arthur", "Ellie"];
```

---

# Filter Then Map

```js
const highLevelPlayers = players
  .filter((player) => player.level >= 18)
  .map((player) => player.name);
```

Read it as:

```text
Keep high-level players.
Then take their names.
```

---

# Filter → Map → Reduce

```js
const totalPower = players
  .filter((player) => player.level >= 15)
  .map((player) => player.power)
  .reduce((accumulator, power) => accumulator + power, 0);
```

Read it as:

```text
Keep players level 15 or higher.

Take their power values.

Add all the power values together.
```

---

# Common Mistakes

## Forgetting `return`

Incorrect:

```js
numbers.map((number) => {
  number * 2;
});
```

Correct:

```js
numbers.map((number) => {
  return number * 2;
});
```

Or:

```js
numbers.map((number) => number * 2);
```

---

## Forgetting `.reduce()`'s Initial Value

Less ideal:

```js
numbers.reduce((accumulator, number) => accumulator + number);
```

Preferred:

```js
numbers.reduce((accumulator, number) => accumulator + number, 0);
```

---

## Mixing Up `.map()` and `.filter()`

Use:

```js
.filter()
```

when you want **fewer items**.

Use:

```js
.map()
```

when you want **changed items**.

---

# Method Selection Cheat Sheet

### Do something with every item

```js
.forEach()
```

### Transform every item

```js
.map()
```

### Keep only some items

```js
.filter()
```

### Find the first match

```js
.find()
```

### Check whether an exact value exists

```js
.includes()
```

### Produce one final value

```js
.reduce()
```

---

# Quick Reference

```js
// Arrow function
const multiply = (a, b) => a * b;

// Map
const doubled = numbers.map((number) => number * 2);

// Filter
const passing = scores.filter((score) => score >= 60);

// Reduce
const total = numbers.reduce((accumulator, number) => accumulator + number, 0);

// Chain
const result = numbers
  .filter((number) => number >= 10)
  .map((number) => number * 2)
  .reduce((total, number) => total + number, 0);

// Objects
const names = players
  .filter((player) => player.level >= 18)
  .map((player) => player.name);
```

---

# Completed Skills

- [x] I can write an arrow function.
- [x] I understand function expressions.
- [x] I can use short-return syntax.
- [x] I can use arrow functions with `.map()`.
- [x] I can use arrow functions with `.filter()`.
- [x] I can use arrow functions with `.reduce()`.
- [x] I can chain array methods.
- [x] I can filter arrays of objects.
- [x] I can map object properties.
- [x] I can build `filter → map → reduce` pipelines.
- [x] I understand why `.reduce()` should usually have an initial value.

---

# Next Lesson

**Lesson 11 — Destructuring, Spread, and Rest**

Topics:

- Array destructuring
- Object destructuring
- Spread operator `...`
- Copying arrays
- Combining arrays
- Copying objects
- Updating objects without changing the original
- Rest parameters
