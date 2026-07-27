# Lesson 3 Notes — Logical Operators and Nested Decisions

## Key Idea

Logical operators combine multiple conditions.

```js
conditionOne && conditionTwo;
conditionOne || conditionTwo;
!booleanValue;
```

---

# Logical Operators Cheat Sheet

| Operator | Meaning | Rule                        |     |                                     |
| -------- | ------- | --------------------------- | --- | ----------------------------------- |
| `&&`     | AND     | All conditions must be true |     |                                     |
| `        |         | `                           | OR  | At least one condition must be true |
| `!`      | NOT     | Reverses true and false     |     |                                     |

---

# AND: `&&`

Use AND when every requirement must pass.

```js
const hasKey = true;
const level = 12;

if (hasKey && level >= 10) {
  console.log("Access granted.");
}
```

Both must be true:

```text
hasKey
AND
level is at least 10
```

---

## AND Examples

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

---

# OR: `||`

Use OR when one or more possibilities are acceptable.

```js
const hasSword = false;
const hasBow = true;

if (hasSword || hasBow) {
  console.log("The player has a weapon.");
}
```

Only one value needs to be true.

---

## OR Examples

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

---

# NOT: `!`

NOT flips a boolean.

```js
console.log(!true); // false
console.log(!false); // true
```

Example:

```js
const isInjured = false;

if (!isInjured) {
  console.log("The player is healthy.");
}
```

Read:

```js
!isInjured;
```

as:

```text
not injured
```

---

# Checking Booleans

When checking for true:

```js
if (hasKey) {
  console.log("Has key");
}
```

Avoid unnecessary comparisons:

```js
if (hasKey === true) {
  console.log("Has key");
}
```

When checking for false:

```js
if (!isBanned) {
  console.log("Not banned");
}
```

---

# Combining Conditions

```js
if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
  console.log("Battle allowed.");
}
```

Read from left to right:

```text
Level 10 or higher
AND
has a sword or bow
AND
not injured
```

---

# Parentheses

Use parentheses to group related conditions.

```js
hasSword || hasBow;
```

This creates one weapon requirement.

```js
playerLevel >= 10 && (hasSword || hasBow) && !isInjured;
```

---

# Incorrect Grouping

```js
if ((playerLevel >= 10 && hasBow) || (hasSword && !isInjured)) {
  console.log("Battle allowed.");
}
```

This means:

```text
High enough level and has a bow

OR

Has a sword and is not injured
```

The level requirement does not apply to both weapons.

---

# Correct Grouping

```js
if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
  console.log("Battle allowed.");
}
```

Now the level and injury requirements apply to the entire weapon check.

---

# Helpful Boolean Variables

Long conditions can be split into smaller pieces.

```js
const hasRequiredLevel = playerLevel >= 10;
const hasWeapon = hasSword || hasBow;
const canFight = !isInjured;

if (hasRequiredLevel && hasWeapon && canFight) {
  console.log("Battle allowed.");
}
```

Benefits:

- Easier to read
- Easier to test
- Easier to debug
- Variable names explain the rules

---

# Nested `if` Statements

A nested `if` is placed inside another conditional block.

```js
if (hasTicket) {
  if (isAdult) {
    console.log("Entry allowed.");
  } else {
    console.log("Adult supervision required.");
  }
} else {
  console.log("Ticket required.");
}
```

The inside condition only runs when the outside condition is true.

---

# Login Pattern

```js
if (isAccountLocked) {
  console.log("Account locked.");
} else if (enteredUsername === username && enteredPassword === password) {
  if (hasTwoFactorCode) {
    console.log("Login successful.");
  } else {
    console.log("Two-factor code required.");
  }
} else {
  console.log("Invalid username or password.");
}
```

Logic order:

1. Check whether the account is locked
2. Check the username and password
3. Check two-factor authentication
4. Otherwise reject the login

---

# Why Order Matters

This should be checked first:

```js
if (isAccountLocked)
```

Even correct login information should not allow access to a locked account.

Security or blocking conditions often need to appear before success conditions.

---

# Short-Circuit Evaluation

JavaScript reads logical expressions from left to right.

## AND

```js
false && true;
```

Once JavaScript finds `false`, the entire AND expression is false.

```text
&& stops at the first false value
```

## OR

```js
true || false;
```

Once JavaScript finds `true`, the entire OR expression is true.

```text
|| stops at the first true value
```

---

# Common Mistakes

## Using AND instead of OR

Incorrect weapon check:

```js
if (hasSword && hasBow) {
  console.log("Ready");
}
```

This requires both weapons.

Use OR when either weapon is accepted:

```js
if (hasSword || hasBow) {
  console.log("Ready");
}
```

---

## Using OR instead of AND

Incorrect access check:

```js
if (hasKey || playerLevel >= 10) {
  console.log("Access granted");
}
```

This allows access with only one requirement.

Use AND when both are required:

```js
if (hasKey && playerLevel >= 10) {
  console.log("Access granted");
}
```

---

## Forgetting NOT

Incorrect:

```js
if (isBanned) {
  console.log("Access granted");
}
```

This grants access when the player is banned.

Correct:

```js
if (!isBanned) {
  console.log("Access granted");
}
```

---

## Incorrect Parentheses

Incorrect:

```js
(level >= 10 && hasSword) || hasBow;
```

A player with a bow could pass without meeting the level requirement.

Correct:

```js
level >= 10 && (hasSword || hasBow);
```

---

## Comparing Booleans Unnecessarily

Longer:

```js
if (hasTwoFactorCode === true) {
  console.log("Verified");
}
```

Cleaner:

```js
if (hasTwoFactorCode) {
  console.log("Verified");
}
```

---

## Checking Later Requirements Too Early

Avoid checking two-factor authentication before confirming the username and password.

Nested logic keeps related steps in the correct order.

---

## Creating Excessive Nesting

Nested conditions are useful, but too many levels become difficult to read.

Harder to follow:

```js
if (conditionOne) {
  if (conditionTwo) {
    if (conditionThree) {
      if (conditionFour) {
        console.log("Allowed");
      }
    }
  }
}
```

As your skills improve, you will learn ways to simplify deeply nested code.

---

# Problem-Solving Checklist

When solving a logical-operator challenge:

1. Write every rule in plain English.
2. Decide which requirements are mandatory.
3. Connect mandatory requirements with `&&`.
4. Connect acceptable alternatives with `||`.
5. Use `!` for a false requirement.
6. Put related OR conditions inside parentheses.
7. Read the entire condition aloud.
8. Test each requirement separately.
9. Test when every requirement passes.
10. Test when each individual requirement fails.

---

# Test Strategy

For this condition:

```js
playerLevel >= 10 && (hasSword || hasBow) && !isInjured;
```

Test:

```text
Valid level, has weapon, healthy
Low level, has weapon, healthy
Valid level, no weapon, healthy
Valid level, has weapon, injured
```

Each failed requirement should block access.

---

# Completed Skills

- [x] I can use `&&`.
- [x] I can use `||`.
- [x] I can use `!`.
- [x] I can check booleans directly.
- [x] I can group conditions with parentheses.
- [x] I can combine comparisons and booleans.
- [x] I can read a combined condition in plain English.
- [x] I can identify incorrectly grouped logic.
- [x] I can use nested `if` statements.
- [x] I can create multi-step login logic.
- [x] I can test each requirement independently.

---

# Quick Reference

```js
// Every condition must pass
if (conditionOne && conditionTwo) {
  // Code
}

// At least one condition must pass
if (conditionOne || conditionTwo) {
  // Code
}

// Boolean must be false
if (!booleanValue) {
  // Code
}

// Group OR choices
if (requiredCondition && (choiceOne || choiceTwo)) {
  // Code
}

// Nested decision
if (firstRequirement) {
  if (secondRequirement) {
    // Both passed
  }
}

// Store smaller conditions
const hasAccess = level >= 10;
const hasWeapon = hasSword || hasBow;

if (hasAccess && hasWeapon) {
  // Code
}
```

---

# Final Solution

```js
const username = "Clint";
const enteredUsername = "Clint";
const password = "javascript123";
const enteredPassword = "javascript123";
const hasTwoFactorCode = true;
const isAccountLocked = false;

if (isAccountLocked) {
  console.log("Account locked.");
} else if (enteredUsername === username && enteredPassword === password) {
  if (hasTwoFactorCode) {
    console.log(`Login successful. Welcome, ${username}.`);
  } else {
    console.log("Two-factor code required.");
  }
} else {
  console.log("Invalid username or password.");
}
```

---

# Next Lesson

**Lesson 4: Loops and Repetition**

Topics:

- Why loops are useful
- `for` loops
- Loop counters
- Counting forward
- Counting backward
- Repeating actions
- Classic multiplication and number challenges
