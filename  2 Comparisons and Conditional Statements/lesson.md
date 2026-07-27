# Lesson 2 — Comparisons and Conditional Statements

## Lesson Goal

In this lesson, you learned how to make JavaScript choose which code should run.

You learned:

- How comparisons produce boolean values
- How to use `if`
- How to use `else`
- How to use `else if`
- Why condition order matters
- How to check equality
- How to check whether values are different
- How to create boolean variables from comparisons

---

# 1. Comparisons

A comparison asks a question about two values.

JavaScript answers the question with one of two boolean values:

```js
true;
false;
```

Example:

```js
const health = 50;

console.log(health > 0);
```

Output:

```text
true
```

JavaScript is answering this question:

> Is `50` greater than `0`?

Because it is, the result is `true`.

---

# 2. Comparison Operators

## Greater than

```js
>
```

Example:

```js
const health = 50;

console.log(health > 0);
```

Output:

```text
true
```

---

## Less than

```js
<
```

Example:

```js
const score = 40;
const passingScore = 50;

console.log(score < passingScore);
```

Output:

```text
true
```

---

## Greater than or equal to

```js
>=
```

This checks whether a value is greater than or exactly equal to another value.

```js
const score = 90;

console.log(score >= 90);
```

Output:

```text
true
```

Both of these would also be true:

```js
console.log(95 >= 90);
console.log(90 >= 90);
```

---

## Less than or equal to

```js
<=
```

This checks whether a value is less than or exactly equal to another value.

```js
const lives = 0;

console.log(lives <= 0);
```

Output:

```text
true
```

---

## Strict equality

```js
===
```

This checks whether two values are exactly equal.

```js
const health = 100;

console.log(health === 100);
```

Output:

```text
true
```

Strict equality checks both:

- The value
- The data type

Example:

```js
console.log(100 === 100);
```

Output:

```text
true
```

But:

```js
console.log(100 === "100");
```

Output:

```text
false
```

The first value is a number.

The second value is a string.

For this course, use `===` when checking equality.

---

## Strict inequality

```js
!==
```

This checks whether two values are different.

```js
const equippedWeapon = "Bow";

console.log(equippedWeapon !== "Sword");
```

Output:

```text
true
```

JavaScript is answering:

> Is `"Bow"` different from `"Sword"`?

---

# 3. The `if` Statement

An `if` statement runs code only when its condition is true.

```js
const health = 50;

if (health > 0) {
  console.log("The character is alive.");
}
```

The condition is:

```js
health > 0;
```

Because that condition is true, the code inside the braces runs.

---

# 4. Anatomy of an `if` Statement

```js
if (condition) {
  // Code to run
}
```

## `if`

Tells JavaScript that a decision is being made.

## Parentheses

```js
condition;
```

The condition goes inside the parentheses.

## Curly braces

```js
{
  // Code
}
```

The code that belongs to the condition goes inside the curly braces.

---

# 5. Using `else`

`else` provides an alternative when the `if` condition is false.

```js
const health = 0;

if (health > 0) {
  console.log("The character is alive.");
} else {
  console.log("The character has died.");
}
```

Because `health > 0` is false, the `else` block runs.

Only one of these blocks will run.

---

# 6. Using `else if`

Use `else if` when there are more than two possible outcomes.

```js
const health = 25;

if (health === 100) {
  console.log("Full health");
} else if (health >= 50) {
  console.log("Injured");
} else if (health > 0) {
  console.log("Critically injured");
} else {
  console.log("Game over");
}
```

JavaScript checks the conditions from top to bottom.

It stops when it finds the first true condition.

---

# 7. Why Condition Order Matters

Consider this incorrect order:

```js
const score = 95;

if (score >= 50) {
  console.log("Passed");
} else if (score >= 90) {
  console.log("Received an A");
}
```

The first condition is already true:

```js
95 >= 50;
```

JavaScript prints:

```text
Passed
```

It never reaches the A-grade condition.

The more specific or difficult condition should come first:

```js
if (score >= 90) {
  console.log("Received an A");
} else if (score >= 50) {
  console.log("Passed");
}
```

A useful rule is:

> Check from the highest boundary to the lowest boundary.

---

# 8. Health Status Example

```js
const characterName = "Joel";
const health = 75;

if (health === 100) {
  console.log(`${characterName} has full health.`);
} else if (health >= 50) {
  console.log(`${characterName} is injured.`);
} else if (health > 0) {
  console.log(`${characterName} is critically injured.`);
} else {
  console.log(`Game over. ${characterName} has died.`);
}
```

Output:

```text
Joel is injured.
```

The checks happen in this order:

1. Is health exactly `100`?
2. Is health at least `50`?
3. Is health greater than `0`?
4. Otherwise, the character has died

---

# 9. Boundary Values

A boundary value is a value where the result changes.

For this health checker:

```text
100 = Full health
50–99 = Injured
1–49 = Critically injured
0 or lower = Dead
```

Important boundary values include:

```text
100
99
50
49
1
0
```

Testing boundary values helps find mistakes.

Example:

```js
const health = 50;
```

This should enter:

```js
health >= 50;
```

But:

```js
const health = 49;
```

This should enter:

```js
health > 0;
```

---

# 10. Creating Booleans from Comparisons

A comparison can be stored inside a variable.

```js
const score = 40;
const passingScore = 50;

const needsRetry = score < passingScore;
```

JavaScript evaluates:

```js
40 < 50;
```

The result is:

```js
true;
```

So this variable contains:

```js
const needsRetry = true;
```

You can print it directly:

```js
console.log(`Needs retry: ${needsRetry}`);
```

---

# 11. Grade Checker Example

```js
const studentName = "Clint";
const score = 40;
const passingScore = 50;

if (score >= 90) {
  console.log(`${studentName} received an A.`);
} else if (score >= 80) {
  console.log(`${studentName} received a B.`);
} else if (score >= 70) {
  console.log(`${studentName} received a C.`);
} else if (score >= passingScore) {
  console.log(`${studentName} passed.`);
} else {
  console.log(`${studentName} failed.`);
}

const hasPerfectScore = score === 100;
const needsRetry = score < passingScore;

console.log(`Perfect score: ${hasPerfectScore}`);
console.log(`Needs retry: ${needsRetry}`);
```

With `score = 40`, the output is:

```text
Clint failed.
Perfect score: false
Needs retry: true
```

---

# 12. Printing a Boolean Directly

You do not need another `if` statement just to print a boolean.

Longer version:

```js
const hasPerfectScore = score === 100;

if (score === 100) {
  console.log(`Perfect score: ${hasPerfectScore}`);
}
```

This only prints when the score is `100`.

Better version:

```js
const hasPerfectScore = score === 100;

console.log(`Perfect score: ${hasPerfectScore}`);
```

Now you can see whether the value is `true` or `false` during every test.

---

# 13. Separate `if` Statements vs. an `if/else if` Chain

Two separate `if` statements are checked independently:

```js
if (score >= 50) {
  console.log("Passed");
}

if (score === 100) {
  console.log("Perfect score");
}
```

Both messages could print.

An `if/else if` chain stops after the first true condition:

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
}
```

Only one grade will print.

Use separate `if` statements when multiple conditions may all need to run.

Use an `if/else if/else` chain when choosing one outcome from a group.

---

# Complete Lesson Example

```js
const studentName = "Clint";
const score = 85;
const passingScore = 50;

if (score >= 90) {
  console.log(`${studentName} received an A.`);
} else if (score >= 80) {
  console.log(`${studentName} received a B.`);
} else if (score >= 70) {
  console.log(`${studentName} received a C.`);
} else if (score >= passingScore) {
  console.log(`${studentName} passed.`);
} else {
  console.log(`${studentName} failed.`);
}

const hasPerfectScore = score === 100;
const needsRetry = score < passingScore;

console.log(`Perfect score: ${hasPerfectScore}`);
console.log(`Needs retry: ${needsRetry}`);
```

Output:

```text
Clint received a B.
Perfect score: false
Needs retry: false
```

---

# Lesson Summary

You learned how to:

- Compare two values
- Produce boolean results
- Run code with `if`
- Provide an alternative with `else`
- Handle multiple outcomes with `else if`
- Use `===` for strict equality
- Use `!==` for strict inequality
- Use `>`, `<`, `>=`, and `<=`
- Put conditions in the correct order
- Create boolean variables from comparisons
- Test important boundary values
