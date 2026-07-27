# Lesson 1 Notes — Variables, Values, and Data Types

## Key Idea

Variables are named storage locations for values.

```js
const characterName = "Joel";
```

- `const` declares the variable
- `characterName` is the variable name
- `"Joel"` is the stored value

---

# Variables

## `const`

Use `const` when the variable does not need to be reassigned.

```js
const characterName = "Joel";
const damageTaken = 35;
```

Preferred beginner rule:

> Start with `const`. Change it to `let` only when reassignment is required.

---

## `let`

Use `let` when the variable needs to receive a new value.

```js
let health = 100;

health = 65;
```

---

# Data Types

## String

Text surrounded by quotation marks:

```js
const name = "Joel";
```

Type:

```text
string
```

---

## Number

A numeric value without quotation marks:

```js
const level = 100;
```

Type:

```text
number
```

---

## Boolean

A value that is either `true` or `false`:

```js
const hasWeapon = true;
```

Type:

```text
boolean
```

---

# `console.log()`

Use `console.log()` to display information:

```js
console.log("Hello");
```

Print a variable:

```js
console.log(characterName);
```

Print formatted information:

```js
console.log(`${characterName} is level ${characterLevel}.`);
```

---

# Template Literals

Template literals use backticks:

```js
`Hello`;
```

Insert a variable with `${}`:

```js
const name = "Joel";

console.log(`Hello, ${name}.`);
```

Multiple variables can be inserted:

```js
console.log(`${characterName} is level ${characterLevel}.`);
```

---

# `typeof`

Use `typeof` to inspect a value's data type.

```js
console.log(typeof characterName);
```

Examples:

```js
console.log(typeof "Joel"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
```

---

# Reassigning a Variable

A `let` variable can receive a new value:

```js
let health = 100;

health = 65;
```

A variable can also be updated using its current value:

```js
let health = 100;
const damage = 35;

health = health - damage;
```

Result:

```js
65;
```

---

# Comparisons Produce Booleans

```js
const isAlive = health > 0;
```

When `health` is `65`:

```js
65 > 0;
```

Result:

```js
true;
```

When `health` is `0`:

```js
0 > 0;
```

Result:

```js
false;
```

---

# Operators Used

| Operator | Meaning                            | Example            |
| -------- | ---------------------------------- | ------------------ |
| `=`      | Assignment                         | `const level = 10` |
| `-`      | Subtraction                        | `100 - 35`         |
| `>`      | Greater than                       | `health > 0`       |
| `${}`    | Insert value into template literal | `${health}`        |

---

# Common Mistakes

## Using quotation marks around numbers

```js
const health = "100";
```

This stores a string.

Use:

```js
const health = 100;
```

---

## Using quotation marks around booleans

```js
const isAlive = "true";
```

This is a string.

Use:

```js
const isAlive = true;
```

---

## Reassigning a `const`

```js
const health = 100;

health = 65;
```

This causes an error.

Use `let`:

```js
let health = 100;

health = 65;
```

---

## Using `let` when nothing changes

This works:

```js
let hasWeapon = true;
```

But `const` communicates the intention more clearly:

```js
const hasWeapon = true;
```

---

## Forgetting the backticks

This will not insert the variable:

```js
console.log("${characterName} is ready.");
```

Use backticks:

```js
console.log(`${characterName} is ready.`);
```

---

# Problem-Solving Checklist

When solving a beginner challenge:

1. Identify the values you need.
2. Give each value a clear variable name.
3. Decide whether each variable should use `const` or `let`.
4. Identify which data type each value uses.
5. Perform any required calculations.
6. Store useful results in variables.
7. Print the result with `console.log()`.
8. Run the program.
9. Read any error from the first line downward.
10. Check the output against the challenge.

---

# Completed Challenges

## Character Card

Skills used:

- Variables
- Strings
- Numbers
- Booleans
- `const`
- `let`
- `console.log()`
- Template literals
- `typeof`

## Taking Damage

Skills used:

- Subtraction
- Reassignment
- Comparisons
- Creating a boolean from a condition

---

# Clean Final Solution

```js
const characterName = "Joel";
const characterLevel = 100;
let health = 100;
const hasWeapon = true;

console.log(`${characterName} is level ${characterLevel}.`);
console.log(`Health: ${health}`);
console.log(`Has weapon: ${hasWeapon}`);

console.log(typeof characterName);
console.log(typeof characterLevel);
console.log(typeof health);
console.log(typeof hasWeapon);

const damageTaken = 35;

health = health - damageTaken;

const isAlive = health > 0;

console.log(`${characterName} took ${damageTaken} damage.`);
console.log(`Remaining health: ${health}`);
console.log(`${characterName} is alive: ${isAlive}`);
```

---

# Quick Reference

```js
// String
const name = "Joel";

// Number
const level = 100;

// Boolean
const hasWeapon = true;

// Changeable variable
let health = 100;

// Reassign a variable
health = 65;

// Update using its current value
health = health - 10;

// Comparison
const isAlive = health > 0;

// Print output
console.log(health);

// Check a type
console.log(typeof health);

// Template literal
console.log(`Health: ${health}`);
```

---

# Practice

Try changing these values and predict the output before running the code:

```js
const damageTaken = 120;
let health = 100;

health = health - damageTaken;

const isAlive = health > 0;

console.log(`Health: ${health}`);
console.log(`Is alive: ${isAlive}`);
```

Questions:

1. What will `health` contain?
2. Will `isAlive` be `true` or `false`?
3. What type will `isAlive` be?

---

# Completion Checklist

- [x] I can create a variable with `const`.
- [x] I can create a changeable variable with `let`.
- [x] I understand strings.
- [x] I understand numbers.
- [x] I understand booleans.
- [x] I can print values with `console.log()`.
- [x] I can use template literals.
- [x] I can check a type with `typeof`.
- [x] I can update a numeric variable.
- [x] I understand that comparisons return booleans.

---

# Next Lesson

**Lesson 2: Comparisons and Conditional Statements**

Topics:

- `===`
- `!==`
- `>`
- `<`
- `>=`
- `<=`
- `if`
- `else`
- `else if`
- Making decisions in JavaScript
