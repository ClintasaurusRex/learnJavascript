# Lesson 9 — Array Methods

## Lesson Goal

In this lesson, you learned built-in JavaScript array methods that perform common looping tasks.

You learned:

- `.forEach()`
- `.map()`
- `.filter()`
- `.find()`
- `.includes()`
- `.reduce()`
- How these methods differ
- How to combine multiple array methods

---

# 1. Why Array Methods?

You already know how to process arrays using a `for` loop:

```js
const players = ["Clint", "Arthur", "Ellie"];

for (let i = 0; i < players.length; i++) {
  console.log(players[i]);
}
```

JavaScript also provides built-in methods for common operations.

For example:

```js
players.forEach(function (player) {
  console.log(player);
});
```

Both loop through the array.

Array methods often make the intention of the code clearer.

---

# 2. `.forEach()`

`.forEach()` runs a function once for every item in an array.

```js
const players = ["Clint", "Arthur", "Ellie"];

players.forEach(function (player) {
  console.log(`Player: ${player}`);
});
```

Output:

```text
Player: Clint
Player: Arthur
Player: Ellie
```

The parameter:

```js
player;
```

represents the current item.

You do not need:

```js
players[i];
```

because `.forEach()` gives the item directly to the function.

---

# 3. `.forEach()` Does Not Create a New Array

`.forEach()` is mainly useful when you want to perform an action for every item.

Example:

```js
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
```

It does not return a transformed array.

Use `.map()` when you want to create a new array.

---

# 4. `.map()`

`.map()` creates a new array by transforming every item.

```js
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
```

Result:

```js
[2, 4, 6];
```

The original array remains:

```js
[1, 2, 3];
```

---

# 5. `.map()` Requires a Returned Value

The value returned from the callback becomes the value placed into the new array.

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

Think:

```text
5  → 10
10 → 20
15 → 30
20 → 40
```

---

# 6. Original Array Versus New Array

```js
const levels = [5, 10, 15, 20];

const doubledLevels = levels.map(function (level) {
  return level * 2;
});
```

Now there are two arrays:

```text
levels         → [5, 10, 15, 20]
doubledLevels  → [10, 20, 30, 40]
```

`.map()` does not change the original array.

---

# 7. Printing Arrays

This:

```js
console.log(`Original: ${levels}`);
```

converts the array into a string:

```text
Original: 5,10,15,20
```

To see the array structure more clearly:

```js
console.log("Original:", levels);
console.log("Doubled:", doubledLevels);
```

The console can display:

```text
Original: [5, 10, 15, 20]
Doubled: [10, 20, 30, 40]
```

---

# 8. `.filter()`

`.filter()` creates a new array containing only the items that pass a condition.

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

# 9. How `.filter()` Works

For each item, the callback returns either:

```js
true;
```

or:

```js
false;
```

If the result is `true`, the item is kept.

If the result is `false`, the item is removed from the new array.

Example:

```js
return level >= 20;
```

For the value `25`:

```js
25 >= 20;
```

returns:

```js
true;
```

So `25` is kept.

---

# 10. `.filter()` Does Not Change the Original

```js
const levels = [5, 10, 15, 20];

const highLevels = levels.filter(function (level) {
  return level >= 15;
});
```

Results:

```text
levels      → [5, 10, 15, 20]
highLevels  → [15, 20]
```

---

# 11. `.find()`

`.find()` searches an array and returns the first matching item.

```js
const players = ["Clint", "Arthur", "Ellie", "Geralt"];

const foundPlayer = players.find(function (player) {
  return player === "Ellie";
});
```

Result:

```text
Ellie
```

---

# 12. `.find()` Stops at the First Match

Consider:

```js
const numbers = [5, 10, 15, 20];

const result = numbers.find(function (number) {
  return number > 10;
});
```

The first matching value is:

```text
15
```

So `.find()` returns:

```js
15;
```

It does not return:

```js
[15, 20];
```

That would be the job of `.filter()`.

---

# 13. `.find()` and `undefined`

If `.find()` cannot find a matching value, it returns:

```js
undefined;
```

Example:

```js
const players = ["Clint", "Arthur", "Ellie"];

const result = players.find(function (player) {
  return player === "Kratos";
});

console.log(result);
```

Output:

```text
undefined
```

---

# 14. Case-Insensitive Searching

String methods can be combined with `.find()`.

```js
const foundPlayer = players.find(function (player) {
  return player.toLowerCase() === "ELLIE".toLowerCase();
});
```

Both sides are converted to lowercase before comparing.

This lets:

```text
Ellie
ELLIE
ellie
```

match successfully.

---

# 15. `.includes()`

`.includes()` checks whether an array contains a specific value.

```js
const party = ["Clint", "Arthur", "Ellie", "Geralt"];

const hasGeralt = party.includes("Geralt");
```

Result:

```js
true;
```

---

# 16. `.includes()` Returns a Boolean

```js
const hasKratos = party.includes("Kratos");
```

Result:

```js
false;
```

`.includes()` does not return the matching item.

It returns:

```text
true
or
false
```

---

# 17. `.find()` Versus `.includes()`

Use `.find()` when you want the actual matching value:

```js
const player = party.find(function (player) {
  return player === "Geralt";
});
```

Result:

```text
Geralt
```

Use `.includes()` when you only want to know whether something exists:

```js
const hasGeralt = party.includes("Geralt");
```

Result:

```text
true
```

---

# 18. `.reduce()`

`.reduce()` takes an entire array and reduces it down to one final value.

A common example is adding numbers:

```js
const numbers = [10, 20, 30];

const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

Result:

```text
60
```

---

# 19. The Accumulator

The first parameter is commonly called:

```js
accumulator;
```

It stores the running result.

```js
const healthValues = [100, 80, 65, 90];

const totalHealth = healthValues.reduce(function (accumulator, health) {
  return accumulator + health;
}, 0);
```

The accumulator changes like this:

```text
Start: 0

0 + 100   = 100
100 + 80  = 180
180 + 65  = 245
245 + 90  = 335
```

Final result:

```text
335
```

---

# 20. Initial Value

The final argument here:

```js
}, 0);
```

is the initial value of the accumulator.

```js
0;
```

means:

```text
Start the running total at zero.
```

This is generally preferred when adding numbers.

---

# 21. Why Use an Initial Value?

This works for a non-empty array:

```js
const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
});
```

But this is clearer:

```js
const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

It also works safely with an empty array:

```js
const numbers = [];
```

The result will be:

```text
0
```

---

# 22. Combining Array Methods

Array methods can work together.

Starting array:

```js
const scores = [45, 80, 72, 30, 95, 60];
```

First, filter:

```js
const passingScores = scores.filter(function (score) {
  return score >= 60;
});
```

Result:

```js
[80, 72, 95, 60];
```

Then map:

```js
const bonusScores = passingScores.map(function (score) {
  return score + 5;
});
```

Result:

```js
[85, 77, 100, 65];
```

Then reduce:

```js
const totalScore = bonusScores.reduce(function (accumulator, score) {
  return accumulator + score;
}, 0);
```

Result:

```text
327
```

---

# 23. Visualizing the Flow

```text
[45, 80, 72, 30, 95, 60]

        ↓ filter >= 60

[80, 72, 95, 60]

        ↓ map + 5

[85, 77, 100, 65]

        ↓ reduce

327
```

Each method has one clear job.

---

# 24. Array Method Roles

## `.forEach()`

Do something for each item.

```js
players.forEach(function (player) {
  console.log(player);
});
```

## `.map()`

Transform every item.

```js
const doubled = numbers.map(function (number) {
  return number * 2;
});
```

## `.filter()`

Keep some items.

```js
const passing = scores.filter(function (score) {
  return score >= 60;
});
```

## `.find()`

Find the first matching item.

```js
const player = players.find(function (player) {
  return player === "Ellie";
});
```

## `.includes()`

Check if a value exists.

```js
const hasEllie = players.includes("Ellie");
```

## `.reduce()`

Combine everything into one result.

```js
const total = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
```

---

# Lesson Summary

You learned how to:

- Loop through arrays with `.forEach()`
- Transform arrays with `.map()`
- Filter arrays with `.filter()`
- Find individual values with `.find()`
- Check membership with `.includes()`
- Combine arrays into one value with `.reduce()`
- Use an accumulator
- Give `.reduce()` an initial value
- Combine array methods into a processing pipeline
