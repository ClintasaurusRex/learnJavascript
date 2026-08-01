# Lesson 4 Notes — `for` Loops and Repetition

## Key Idea

A loop repeats code while a condition remains true.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

# `for` Loop Pattern

```js
for (startingPoint; condition; update) {
  // Repeated code
}
```

Example:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

| Part      | Code        | Meaning             |
| --------- | ----------- | ------------------- |
| Start     | `let i = 1` | Begin at 1          |
| Condition | `i <= 10`   | Continue through 10 |
| Update    | `i++`       | Add 1 each time     |

---

# Loop Counter

A loop counter tracks the current repetition.

```js
let i = 1;
```

Common names include:

```js
i;
number;
count;
index;
```

Use a descriptive name when it improves readability.

---

# Increasing Values

```js
i++;
```

Same as:

```js
i = i + 1;
```

Also equivalent to:

```js
i += 1;
```

---

# Decreasing Values

```js
i--;
```

Same as:

```js
i = i - 1;
```

Also equivalent to:

```js
i -= 1;
```

---

# Count Forward

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Remember:

```text
Start low
Use <=
Increase with ++
```

---

# Count Backward

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

Remember:

```text
Start high
Use >=
Decrease with --
```

---

# Code Inside and Outside the Loop

Inside the loop:

```js
for (let i = 1; i <= 3; i++) {
  console.log("Repeats");
}
```

Prints three times.

After the loop:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("Finished");
```

`"Finished"` prints once.

---

# Accumulators

An accumulator stores a growing result.

```js
let total = 0;
```

Update it inside the loop:

```js
total += i;
```

Full example:

```js
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(total);
```

Output:

```text
55
```

---

# Why Accumulators Use `let`

The value changes:

```js
let total = 0;

total = total + 1;
total = total + 2;
total = total + 3;
```

Because reassignment happens, use `let`.

---

# Shorthand Assignment Operators

| Shorthand    | Full version        |
| ------------ | ------------------- |
| `total += i` | `total = total + i` |
| `total -= i` | `total = total - i` |
| `total *= i` | `total = total * i` |
| `total /= i` | `total = total / i` |

---

# Multiplication Loop

```js
const value = 2;

for (let i = 1; i <= 10; i++) {
  const result = value * i;

  console.log(`${value} x ${i} = ${result}`);
}
```

The loop counter changes the calculation during each repetition.

---

# Loop Scope

Variables declared inside the loop block remain inside that block.

```js
for (let i = 1; i <= 5; i++) {
  const result = i * 2;

  console.log(result);
}
```

`result` cannot be used after the loop.

```js
console.log(result);
```

That would cause:

```text
ReferenceError: result is not defined
```

---

# Conditionals Inside Loops

```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

The loop checks every number.

The `if` statement filters which numbers are printed.

---

# Remainder Operator

```js
%
```

The `%` operator returns the remainder after division.

```js
console.log(10 % 2); // 0
console.log(11 % 2); // 1
console.log(10 % 3); // 1
```

---

# Even and Odd Checks

Even:

```js
number % 2 === 0;
```

Odd:

```js
number % 2 !== 0;
```

Examples:

```js
console.log(8 % 2 === 0); // true
console.log(7 % 2 !== 0); // true
```

---

# Divisibility

Divisible by `3`:

```js
number % 3 === 0;
```

Divisible by `5`:

```js
number % 5 === 0;
```

Divisible by both:

```js
number % 3 === 0 && number % 5 === 0;
```

---

# FizzBuzz Pattern

```js
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Condition order:

```text
Both 3 and 5
Then 3
Then 5
Then everything else
```

---

# Common Mistakes

## Using `<` instead of `<=`

```js
for (let i = 1; i < 10; i++) {
  console.log(i);
}
```

This stops at `9`.

To include `10`:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

## Increasing When Counting Backward

Incorrect:

```js
for (let i = 10; i >= 1; i++) {
  console.log(i);
}
```

`i` keeps getting larger, so the condition may never become false.

Correct:

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

---

## Forgetting to Update the Counter

Incorrect:

```js
for (let i = 1; i <= 10; ) {
  console.log(i);
}
```

`i` never changes, which can create an infinite loop.

Correct:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

## Printing the Final Message Inside the Loop

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
  console.log("Blast off!");
}
```

This prints `"Blast off!"` ten times.

Place it after the loop:

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Blast off!");
```

---

## Creating the Accumulator Inside the Loop

Incorrect:

```js
for (let i = 1; i <= 10; i++) {
  let total = 0;

  total += i;
}
```

`total` resets to `0` during every repetition.

Correct:

```js
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}
```

---

## Using `const` for a Changing Total

Incorrect:

```js
const total = 0;

total += 1;
```

Correct:

```js
let total = 0;

total += 1;
```

---

## Incorrect FizzBuzz Order

Incorrect:

```js
if (i % 3 === 0) {
  console.log("Fizz");
} else if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz");
}
```

A number like `15` matches the first condition and prints `"Fizz"`.

Correct:

```js
if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz");
} else if (i % 3 === 0) {
  console.log("Fizz");
}
```

---

# Debugging Checklist

When a loop does not work:

1. Check the starting value.
2. Check the loop condition.
3. Check whether the final number should be included.
4. Check whether the counter increases or decreases.
5. Make sure the counter eventually makes the condition false.
6. Check whether output belongs inside or after the loop.
7. Check whether changing variables use `let`.
8. Check whether an accumulator was created before the loop.
9. Test with a smaller range.
10. Print the counter during each loop.

Debugging example:

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Current i: ${i}`);
}
```

---

# Problem-Solving Checklist

When solving a loop challenge:

1. Decide where the loop starts.
2. Decide where the loop stops.
3. Decide whether the final value is included.
4. Decide how the counter changes.
5. Identify what code must repeat.
6. Identify what should happen after the loop.
7. Create an accumulator before the loop when needed.
8. Put filters inside the loop using `if`.
9. Test the first and last values.
10. Check how many times the loop runs.

---

# Completed Skills

- [x] I can write a `for` loop.
- [x] I can count forward.
- [x] I can count backward.
- [x] I understand `i++`.
- [x] I understand `i--`.
- [x] I can run code after a loop.
- [x] I can create an accumulator.
- [x] I can calculate a running total.
- [x] I can create a multiplication table.
- [x] I can use an `if` statement inside a loop.
- [x] I can use the remainder operator.
- [x] I can identify even numbers.
- [x] I can check divisibility.
- [x] I can solve FizzBuzz.
- [x] I understand why condition order matters.

---

# Quick Reference

```js
// Count forward
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count backward
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Running total
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

// Multiplication table
const value = 5;

for (let i = 1; i <= 10; i++) {
  const result = value * i;

  console.log(`${value} x ${i} = ${result}`);
}

// Even-number check
if (number % 2 === 0) {
  console.log("Even");
}

// Odd-number check
if (number % 2 !== 0) {
  console.log("Odd");
}

// Divisible by 3
if (number % 3 === 0) {
  console.log("Divisible by 3");
}
```

---

# Final FizzBuzz Solution

```js
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

# Next Lesson

**Lesson 5: Functions**

Topics:

- What functions are
- Creating functions
- Calling functions
- Parameters
- Arguments
- Returning values
- Local variables
- Turning previous challenges into reusable code
