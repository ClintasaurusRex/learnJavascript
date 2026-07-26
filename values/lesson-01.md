# Lesson 1 — Variables, Values, and Data Types

## Lesson Goal

In this lesson, you will learn:

- What values are
- What data types are
- How to create variables
- The difference between `const` and `let`
- How to print information with `console.log()`
- How to insert variables into strings
- How to check a value's type
- How to update a number
- How comparisons create boolean values

---

# 1. Values

A value is a piece of information stored or used by a JavaScript program.

Examples:

```js
"Joel";
100;
true;
```

These values represent different kinds of information.

- `"Joel"` represents text
- `100` represents a number
- `true` represents a yes-or-no state

---

# 2. Variables

A variable gives a value a name.

```js
const characterName = "Joel";
```

This creates a variable named `characterName`.

The variable contains the string `"Joel"`.

You can use the variable later:

```js
console.log(characterName);
```

Output:

```text
Joel
```

---

# 3. Using `const`

Use `const` when the variable will not be reassigned.

```js
const characterName = "Joel";
const characterLevel = 100;
const damageTaken = 35;
```

These values remain assigned to the same variables.

You cannot reassign a `const` variable:

```js
const characterName = "Joel";

characterName = "Ellie";
```

That would cause an error.

A useful beginner rule is:

> Use `const` unless you know the variable needs to change.

---

# 4. Using `let`

Use `let` when a variable needs to be reassigned.

```js
let health = 100;

health = 65;
```

The value stored in `health` changed from `100` to `65`.

You can also calculate the new value using the old value:

```js
let health = 100;
const damageTaken = 35;

health = health - damageTaken;
```

JavaScript evaluates the right side first:

```js
health - damageTaken;
```

That becomes:

```js
100 - 35;
```

The result, `65`, is stored back inside `health`.

---

# 5. Basic Data Types

## String

A string represents text.

```js
const characterName = "Joel";
```

Strings are surrounded by quotation marks.

```js
"Joel";
"Joel";
```

For this course, double quotation marks will usually be used for regular strings.

---

## Number

A number represents numeric information.

```js
const characterLevel = 100;
const health = 65;
```

Numbers do not use quotation marks.

```js
100;
35;
65;
```

This is a number:

```js
100;
```

This is a string:

```js
"100";
```

They may look similar, but JavaScript treats them differently.

---

## Boolean

A boolean can only be:

```js
true;
```

or:

```js
false;
```

Booleans are useful for tracking yes-or-no conditions.

```js
const hasWeapon = true;
const isAlive = true;
```

Do not put quotation marks around boolean values.

Correct:

```js
const isAlive = true;
```

Incorrect:

```js
const isAlive = "true";
```

The incorrect version is a string rather than a boolean.

---

# 6. Printing Values

Use `console.log()` to print information.

```js
console.log("Hello");
```

You can print a variable:

```js
const characterName = "Joel";

console.log(characterName);
```

You can use multiple `console.log()` statements:

```js
console.log(characterName);
console.log(characterLevel);
console.log(health);
```

---

# 7. Template Literals

Template literals let you insert variables into text.

They use backticks:

```js
` `;
```

A variable is inserted using:

```js
${variableName}
```

Example:

```js
const characterName = "Joel";
const characterLevel = 100;

console.log(`${characterName} is level ${characterLevel}.`);
```

Output:

```text
Joel is level 100.
```

Template literals are easier to read than joining many strings together.

---

# 8. Checking Types with `typeof`

The `typeof` operator tells you the type of a value.

```js
const characterName = "Joel";
const characterLevel = 100;
const hasWeapon = true;

console.log(typeof characterName);
console.log(typeof characterLevel);
console.log(typeof hasWeapon);
```

Output:

```text
string
number
boolean
```

You can also check a value directly:

```js
console.log(typeof "Joel");
console.log(typeof 100);
console.log(typeof true);
```

---

# 9. Arithmetic

JavaScript can perform mathematical calculations.

```js
const damageTaken = 35;
let health = 100;

health = health - damageTaken;
```

Common arithmetic operators:

| Operator | Purpose        | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `5 + 2`  |
| `-`      | Subtraction    | `5 - 2`  |
| `*`      | Multiplication | `5 * 2`  |
| `/`      | Division       | `10 / 2` |
| `%`      | Remainder      | `10 % 3` |

In this lesson, subtraction was used to reduce the character's health.

---

# 10. Comparisons

A comparison produces a boolean value.

```js
const isAlive = health > 0;
```

The greater-than operator is:

```js
>
```

JavaScript checks whether `health` is greater than `0`.

When health is `65`:

```js
65 > 0;
```

The result is:

```js
true;
```

When health is `0`:

```js
0 > 0;
```

The result is:

```js
false;
```

This means comparisons can create boolean variables automatically.

---

# Complete Example

```js
const characterName = "Joel";
const characterLevel = 100;
let health = 100;
const hasWeapon = true;

console.log(`${characterName} is level ${characterLevel}.`);
console.log(`Health: ${health}`);
console.log(`Has weapon: ${hasWeapon}`);

const damageTaken = 35;

health = health - damageTaken;

const isAlive = health > 0;

console.log(`${characterName} took ${damageTaken} damage.`);
console.log(`Remaining health: ${health}`);
console.log(`${characterName} is alive: ${isAlive}`);
```

Output:

```text
Joel is level 100.
Health: 100
Has weapon: true
Joel took 35 damage.
Remaining health: 65
Joel is alive: true
```

---

# Lesson Summary

You learned how to:

- Store values inside variables
- Use `const` for values that do not need reassignment
- Use `let` for values that need reassignment
- Work with strings, numbers, and booleans
- Print values with `console.log()`
- Insert variables into template literals
- Check types with `typeof`
- Perform subtraction
- Create booleans using comparisons
