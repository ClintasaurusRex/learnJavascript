# Lesson 2 Notes — Comparisons and Conditionals

## Key Idea

Conditionals allow a JavaScript program to make decisions.

```js
if (condition) {
  // Runs when the condition is true
} else {
  // Runs when the condition is false
}
```

---

# Comparison Operators

| Operator | Meaning               | Example              |
| -------- | --------------------- | -------------------- |
| `>`      | Greater than          | `health > 0`         |
| `<`      | Less than             | `score < 50`         |
| `>=`     | Greater than or equal | `score >= 90`        |
| `<=`     | Less than or equal    | `lives <= 0`         |
| `===`    | Strictly equal        | `score === 100`      |
| `!==`    | Strictly not equal    | `weapon !== "Sword"` |

Every comparison produces:

```js
true;
```

or:

```js
false;
```

---

# Quick Comparison Examples

```js
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 10); // true
console.log(100 === 100); // true
console.log(100 === "100"); // false
console.log(10 !== 5); // true
```

---

# Basic `if`

```js
const health = 50;

if (health > 0) {
  console.log("Alive");
}
```

The code runs only when the condition is true.

---

# `if/else`

```js
const health = 0;

if (health > 0) {
  console.log("Alive");
} else {
  console.log("Dead");
}
```

One block runs when the condition is true.

The other block runs when it is false.

---

# `if/else if/else`

```js
const health = 75;

if (health === 100) {
  console.log("Full health");
} else if (health >= 50) {
  console.log("Injured");
} else if (health > 0) {
  console.log("Critical");
} else {
  console.log("Dead");
}
```

JavaScript checks from top to bottom.

It stops at the first true condition.

---

# Condition Order

Check the highest or most specific condition first.

Correct:

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

Incorrect:

```js
if (score >= 50) {
  console.log("Passed");
} else if (score >= 90) {
  console.log("A");
}
```

A score of `95` would match `score >= 50` first.

JavaScript would stop before checking `score >= 90`.

---

# Strict Equality

Use:

```js
===
```

Avoid using:

```js
==
```

Strict equality compares both the value and its data type.

```js
console.log(100 === 100); // true
console.log(100 === "100"); // false
```

---

# Strict Inequality

Use:

```js
!==
```

Example:

```js
const weapon = "Bow";

const isNotUsingSword = weapon !== "Sword";

console.log(isNotUsingSword);
```

Output:

```text
true
```

---

# Storing Comparison Results

```js
const score = 40;
const passingScore = 50;

const needsRetry = score < passingScore;
```

This comparison:

```js
40 < 50;
```

Produces:

```js
true;
```

Therefore:

```js
needsRetry;
```

contains:

```js
true;
```

---

# Printing Boolean Variables

Print the boolean directly:

```js
const hasPerfectScore = score === 100;

console.log(`Perfect score: ${hasPerfectScore}`);
```

This shows the result during every test.

Avoid wrapping it in another `if` unless you only want output when it is true.

---

# Separate `if` Statements

Separate `if` statements are checked independently.

```js
if (score >= 50) {
  console.log("Passed");
}

if (score === 100) {
  console.log("Perfect score");
}
```

With a score of `100`, both messages print.

---

# An `if/else if` Chain

An `if/else if` chain chooses one result.

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
}
```

Once a true condition is found, JavaScript stops checking that chain.

---

# Boundary Testing

Test the values where a result changes.

For this grade system:

```text
90 = A
80 = B
70 = C
50 = Passed
49 = Failed
```

Useful tests:

```text
100
90
89
80
79
70
69
50
49
0
```

You do not always need to test every number.

Focus on the boundaries and values just above or below them.

---

# Common Mistakes

## Wrong condition order

Incorrect:

```js
if (score >= 50) {
  console.log("Passed");
} else if (score >= 90) {
  console.log("A");
}
```

Correct:

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 50) {
  console.log("Passed");
}
```

---

## Using the wrong grade boundary

Incorrect:

```js
} else if (score >= 70) {
  console.log("B");
}
```

If B begins at `80`, use:

```js
} else if (score >= 80) {
  console.log("B");
}
```

---

## Using assignment instead of comparison

Incorrect:

```js
if ((score = 100)) {
  console.log("Perfect");
}
```

A single equals sign assigns a value.

Use strict equality:

```js
if (score === 100) {
  console.log("Perfect");
}
```

---

## Redeclaring test variables

Incorrect in the same file:

```js
const health = 0;
const health = 50;
```

This causes:

```text
SyntaxError: Identifier 'health' has already been declared
```

Change the existing value instead:

```js
const health = 50;
```

Only keep one active declaration.

---

## Forgetting curly braces

Preferred:

```js
if (health > 0) {
  console.log("Alive");
}
```

The curly braces make the structure clear and prevent mistakes when more code is added.

---

## Forgetting that only one branch runs

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
}
```

A score of `95` only prints:

```text
A
```

It does not also print B.

---

# Problem-Solving Checklist

When solving a conditional challenge:

1. Identify what value is being checked.
2. List every possible outcome.
3. Write the boundaries for each outcome.
4. Put the highest or most specific condition first.
5. Decide whether you need `if`, `else if`, or `else`.
6. Write one output for each branch.
7. Test the exact boundary values.
8. Test one value above and below important boundaries.
9. Check that only the expected branch runs.
10. Print boolean variables directly while testing.

---

# Completed Challenges

## Game Over Checker

Skills used:

- `if`
- `else`
- `>`
- Template literals

## Health Status

Skills used:

- `if`
- `else if`
- `else`
- `===`
- `>=`
- `>`
- Condition order

## Grade Checker

Skills used:

- Multiple `else if` branches
- Grade boundaries
- Boolean variables
- `===`
- `<`
- Boundary testing

---

# Clean Grade Checker Solution

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

---

# Quick Reference

```js
// Greater than
value > otherValue;

// Less than
value < otherValue;

// Greater than or equal
value >= otherValue;

// Less than or equal
value <= otherValue;

// Strict equality
value === otherValue;

// Strict inequality
value !== otherValue;

// One condition
if (condition) {
  // Code
}

// Two possible outcomes
if (condition) {
  // True
} else {
  // False
}

// Multiple possible outcomes
if (conditionOne) {
  // First outcome
} else if (conditionTwo) {
  // Second outcome
} else {
  // Fallback outcome
}

// Store a comparison result
const isPassing = score >= passingScore;
```

---

# Extra Practice

Predict the output before running this code:

```js
const playerLevel = 15;

if (playerLevel >= 20) {
  console.log("Advanced player");
} else if (playerLevel >= 10) {
  console.log("Intermediate player");
} else {
  console.log("Beginner player");
}
```

Questions:

1. Which condition is checked first?
2. Is the first condition true or false?
3. Which message prints?
4. Why does JavaScript stop after that branch?

---

# Completion Checklist

- [x] I can use `if`.
- [x] I can use `else`.
- [x] I can use `else if`.
- [x] I understand that comparisons produce booleans.
- [x] I can use `>`.
- [x] I can use `<`.
- [x] I can use `>=`.
- [x] I can use `<=`.
- [x] I can use `===`.
- [x] I can use `!==`.
- [x] I understand why condition order matters.
- [x] I can store a comparison result in a variable.
- [x] I can test boundary values.
- [x] I understand that an `if/else if` chain stops after the first true condition.

---

# Next Lesson

**Lesson 3: Logical Operators and Nested Decisions**

Topics:

- The AND operator: `&&`
- The OR operator: `||`
- The NOT operator: `!`
- Checking multiple conditions
- Combining booleans
- Nested `if` statements
- Login and game-access challenges
