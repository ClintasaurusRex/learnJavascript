# Lesson 7 Notes — Arrays

## Key Idea

Arrays store multiple related values inside one variable.

```js
const players = ["Clint", "Joel", "Ellie"];
```

---

# Array Syntax

```js
const arrayName = [valueOne, valueTwo, valueThree];
```

Examples:

```js
const names = ["Clint", "Joel", "Ellie"];

const scores = [100, 85, 72];

const booleans = [true, false, true];
```

---

# Indexes Start at `0`

```js
const party = ["Clint", "Arthur", "Ellie", "Geralt"];
```

```text
party[0] → Clint
party[1] → Arthur
party[2] → Ellie
party[3] → Geralt
```

---

# Array Length

```js
party.length;
```

If the array contains four items:

```text
party.length = 4
```

Final index:

```text
3
```

---

# First Item

```js
party[0];
```

---

# Last Item

```js
party[party.length - 1];
```

This pattern works no matter how large the array becomes.

---

# Changing an Item

```js
party[1] = "Arthur";
```

Arrays declared with `const` can still have their contents modified.

---

# `.push()`

Adds an item to the end:

```js
party.push("Kratos");
```

---

# `.pop()`

Removes the final item:

```js
party.pop();
```

`.pop()` also returns the removed value:

```js
const removedPlayer = party.pop();
```

---

# Loop Through an Array

```js
for (let i = 0; i < party.length; i++) {
  console.log(party[i]);
}
```

Pattern:

```text
Start: 0
Condition: i < array.length
Update: i++
Current item: array[i]
```

---

# Display Numbers Starting at 1

```js
for (let i = 0; i < party.length; i++) {
  console.log(`Player ${i + 1}: ${party[i]}`);
}
```

Use:

```js
i;
```

for the array index.

Use:

```js
i + 1;
```

for human-friendly numbering.

---

# Numeric Arrays

```js
const healthValues = [100, 80, 65, 90];
```

Values can be accessed with:

```js
healthValues[i];
```

---

# Array Total Pattern

```js
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
```

This is the same accumulator pattern learned with loops.

---

# Average Pattern

```js
const average = total / numbers.length;
```

Average means:

```text
Total ÷ Number of Values
```

---

# Finding the Largest Number

```js
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
```

Important:

```js
let largest = numbers[0];
```

Do not guess what the largest value will be.

---

# Searching an Array

```js
const itemToFind = "Ellie";
let itemFound = false;

for (let i = 0; i < party.length; i++) {
  if (party[i] === itemToFind) {
    itemFound = true;
  }
}
```

---

# Flag Variables

A flag tracks whether something happened.

```js
let playerFound = false;
```

Then:

```js
playerFound = true;
```

when the desired event occurs.

Other examples:

```js
let gameOver = false;
let hasMatch = false;
let enemyFound = false;
let validInput = false;
```

---

# Ternary Operator

Basic structure:

```js
condition ? valueIfTrue : valueIfFalse;
```

Example:

```js
const message = playerFound ? "Found" : "Not found";
```

Another example:

```js
console.log(score >= 50 ? "Passed" : "Failed");
```

---

# When to Use a Ternary

Good:

```js
const status = health > 0 ? "Alive" : "Dead";
```

Good:

```js
console.log(playerFound ? "Found" : "Not found");
```

Less clear:

```js
condition ? performSeveralChanges() : performSeveralOtherChanges();
```

For larger logic, prefer `if/else`.

---

# Common Mistakes

## Forgetting Arrays Start at Zero

Incorrect idea:

```js
party[1];
```

for the first player.

Correct:

```js
party[0];
```

---

## Using `.length` as the Last Index

Incorrect:

```js
party[party.length];
```

Correct:

```js
party[party.length - 1];
```

---

## Using `<=` in an Array Loop

Incorrect:

```js
for (let i = 0; i <= party.length; i++) {
  console.log(party[i]);
}
```

The final iteration accesses an item that does not exist.

Correct:

```js
for (let i = 0; i < party.length; i++) {
  console.log(party[i]);
}
```

---

## Starting a Total Inside the Loop

Incorrect:

```js
for (let i = 0; i < numbers.length; i++) {
  let total = 0;
  total += numbers[i];
}
```

The total resets every iteration.

Correct:

```js
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
```

---

## Hard-Coding the Largest Number

Incorrect:

```js
let highestHealth = 100;
```

Correct:

```js
let highestHealth = healthValues[0];
```

---

## Incrementing the Loop Counter Yourself

Avoid:

```js
for (let i = 0; i < numbers.length; i++) {
  if (condition) {
    // something
  } else {
    i++;
  }
}
```

The `for` loop already handles:

```js
i++;
```

Doing it again can skip array values.

---

# Debugging Arrays

Print the full array:

```js
console.log(party);
```

Print the current index:

```js
console.log(i);
```

Print the current item:

```js
console.log(party[i]);
```

Print both:

```js
console.log(`Index ${i}: ${party[i]}`);
```

---

# Array Problem-Solving Checklist

When solving an array challenge:

1. Look at what values the array contains.
2. Check the array's length.
3. Remember that indexes start at `0`.
4. Use `array.length - 1` for the final item.
5. Decide whether the array must be changed.
6. Use `.push()` for adding to the end.
7. Use `.pop()` for removing from the end.
8. Loop with `i < array.length`.
9. Use `array[i]` for the current item.
10. Use an accumulator for totals.
11. Start maximum searches with `array[0]`.
12. Use a flag when you need to remember whether something happened.

---

# Completed Skills

- [x] I can create an array.
- [x] I understand array indexes.
- [x] I can access array values.
- [x] I can use `.length`.
- [x] I can find the final array item.
- [x] I can change an array item.
- [x] I can use `.push()`.
- [x] I can use `.pop()`.
- [x] I can loop through an array.
- [x] I can total an array of numbers.
- [x] I can calculate an average.
- [x] I can find the largest value.
- [x] I can manually search an array.
- [x] I understand flag variables.
- [x] I can use a ternary for simple decisions.

---

# Quick Reference

```js
// Create an array
const party = ["Clint", "Joel", "Ellie"];

// First item
party[0];

// Last item
party[party.length - 1];

// Number of items
party.length;

// Change item
party[1] = "Arthur";

// Add to end
party.push("Geralt");

// Remove from end
const removedPlayer = party.pop();

// Loop
for (let i = 0; i < party.length; i++) {
  console.log(party[i]);
}

// Total
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

// Find largest
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

// Search
let found = false;

for (let i = 0; i < party.length; i++) {
  if (party[i] === itemToFind) {
    found = true;
  }
}
```

---

# Next Lesson

**Lesson 8: Objects**

Topics:

- Creating objects
- Properties and values
- Dot notation
- Changing properties
- Adding properties
- Methods
- Arrays inside objects
- Objects inside arrays
- Building a complete character object
