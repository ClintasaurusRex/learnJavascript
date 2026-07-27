# Lesson 3 — Logical Operators and Nested Decisions

## Lesson Goal

In this lesson, you learned how to combine multiple conditions and create more detailed decision-making logic.

You learned:

- The AND operator: `&&`
- The OR operator: `||`
- The NOT operator: `!`
- How to group conditions with parentheses
- How JavaScript evaluates combined conditions
- How to use nested `if` statements
- How to build multi-step access and login checks

---

# 1. Logical Operators

Logical operators let you combine boolean values and comparisons.

The three main logical operators are:

| Operator | Name | Meaning                      |     |                                     |
| -------- | ---- | ---------------------------- | --- | ----------------------------------- |
| `&&`     | AND  | Every condition must be true |     |                                     |
| `        |      | `                            | OR  | At least one condition must be true |
| `!`      | NOT  | Reverses a boolean           |     |                                     |

---

# 2. The AND Operator

The AND operator is written as:

```js
&&
```

It requires every connected condition to be `true`.

```js
const playerLevel = 12;
const hasKey = true;

if (playerLevel >= 10 && hasKey) {
  console.log("Dungeon access granted.");
}
```

This asks:

```text
Is the player's level at least 10
AND
does the player have the key?
```

Both conditions are true, so the message prints.

---

## AND Truth Table

| First condition | Second condition | Result  |
| --------------- | ---------------- | ------- |
| `true`          | `true`           | `true`  |
| `true`          | `false`          | `false` |
| `false`         | `true`           | `false` |
| `false`         | `false`          | `false` |

The only way an AND expression becomes true is when every condition is true.

---

## Multiple AND Conditions

You can combine more than two conditions:

```js
const playerLevel = 12;
const hasDungeonKey = true;
const isBanned = false;

if (playerLevel >= 10 && hasDungeonKey && !isBanned) {
  console.log("The player may enter.");
}
```

All three requirements must pass.

---

# 3. The OR Operator

The OR operator is written as:

```js
||
```

At least one connected condition must be `true`.

```js
const hasSword = false;
const hasBow = true;

if (hasSword || hasBow) {
  console.log("The player has a weapon.");
}
```

This asks:

```text
Does the player have a sword
OR
does the player have a bow?
```

Because `hasBow` is true, the entire condition is true.

---

## OR Truth Table

| First condition | Second condition | Result  |
| --------------- | ---------------- | ------- |
| `true`          | `true`           | `true`  |
| `true`          | `false`          | `true`  |
| `false`         | `true`           | `true`  |
| `false`         | `false`          | `false` |

An OR expression is false only when every condition is false.

---

## Multiple OR Conditions

```js
const hasSword = false;
const hasBow = false;
const hasMagic = true;

if (hasSword || hasBow || hasMagic) {
  console.log("The player is ready for battle.");
}
```

Only one of the weapon values needs to be true.

---

# 4. The NOT Operator

The NOT operator is written as:

```js
!
```

It reverses a boolean value.

```js
console.log(!true);
```

Output:

```text
false
```

And:

```js
console.log(!false);
```

Output:

```text
true
```

---

## Using NOT with Variables

```js
const isBanned = false;

if (!isBanned) {
  console.log("The player is not banned.");
}
```

This:

```js
!isBanned;
```

means:

```text
isBanned is false
```

You could write:

```js
isBanned === false;
```

But this is shorter:

```js
!isBanned;
```

---

# 5. Checking Booleans Directly

When a variable already contains a boolean, you usually do not need to compare it with `true`.

Longer version:

```js
if (hasKey === true) {
  console.log("The player has the key.");
}
```

Cleaner version:

```js
if (hasKey) {
  console.log("The player has the key.");
}
```

For a false check, use NOT:

```js
if (!isBanned) {
  console.log("The player is not banned.");
}
```

---

# 6. Combining AND, OR, and NOT

Logical operators can be used together:

```js
const playerLevel = 15;
const hasSword = true;
const hasBow = false;
const isInjured = false;

if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
  console.log("The player may enter battle.");
}
```

This requires:

1. The player must be at least level 10
2. The player must have a sword or bow
3. The player must not be injured

---

# 7. Grouping Conditions with Parentheses

Parentheses show which conditions belong together.

```js
hasSword || hasBow;
```

This treats the weapon check as one combined requirement.

The full condition becomes:

```js
playerLevel >= 10 && (hasSword || hasBow) && !isInjured;
```

Read it as:

```text
High enough level
AND
has at least one weapon
AND
is not injured
```

---

# 8. Why Grouping Matters

Consider this incorrect condition:

```js
if ((playerLevel >= 10 && hasBow) || (hasSword && !isInjured)) {
  console.log("Battle allowed.");
}
```

This creates two separate ways to enter:

```text
High enough level AND has a bow

OR

Has a sword AND is not injured
```

A low-level player could enter simply by having a sword.

That does not match the original rules.

The correct grouping is:

```js
if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
  console.log("Battle allowed.");
}
```

Now all three main requirements must pass.

---

# 9. Breaking a Large Condition into Parts

Long conditions can be easier to understand when stored in boolean variables.

Instead of:

```js
if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
  console.log("Battle allowed.");
}
```

You can write:

```js
const hasRequiredLevel = playerLevel >= 10;
const hasWeapon = hasSword || hasBow;
const isReadyToFight = !isInjured;

if (hasRequiredLevel && hasWeapon && isReadyToFight) {
  console.log("Battle allowed.");
}
```

Both versions work.

The second version can be easier to read and debug.

---

# 10. Nested `if` Statements

A nested `if` is an `if` statement inside another `if` block.

```js
const hasTicket = true;
const isAdult = true;

if (hasTicket) {
  if (isAdult) {
    console.log("Entry allowed.");
  } else {
    console.log("Adult supervision required.");
  }
} else {
  console.log("A ticket is required.");
}
```

JavaScript checks the outside condition first.

The inside condition is only checked if the outside condition passes.

---

# 11. When Nested Conditions Are Useful

Nested conditions are useful when a second decision should only happen after the first requirement succeeds.

For example:

1. Is the account unlocked?
2. Are the username and password correct?
3. Does the user have a two-factor code?

There is no reason to check the two-factor code when the username or password is incorrect.

---

# 12. Login Example

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

Output:

```text
Login successful. Welcome, Clint.
```

---

# 13. How the Login Logic Runs

JavaScript first checks:

```js
isAccountLocked;
```

If that is true, it prints:

```text
Account locked.
```

Nothing else is checked in the chain.

If the account is not locked, JavaScript checks:

```js
enteredUsername === username && enteredPassword === password;
```

Both values must match.

If they match, JavaScript enters the nested section:

```js
if (hasTwoFactorCode)
```

If the two-factor code exists, login succeeds.

Otherwise, JavaScript requests the code.

If the username or password does not match, the final `else` runs.

---

# 14. Short-Circuit Evaluation

JavaScript evaluates logical conditions from left to right.

With AND:

```js
false && true;
```

Once JavaScript sees the first value is false, the entire expression must be false.

It does not need the second value to determine the result.

With OR:

```js
true || false;
```

Once JavaScript sees the first value is true, the entire expression must be true.

This behaviour is called short-circuit evaluation.

For now, the most important idea is:

```text
&& stops when it finds false
|| stops when it finds true
```

---

# Complete Lesson Example

```js
const playerName = "Clint";
const playerLevel = 15;
const hasSword = true;
const hasBow = false;
const isInjured = false;
const isBanned = false;

const hasRequiredLevel = playerLevel >= 10;
const hasWeapon = hasSword || hasBow;
const canFight = !isInjured && !isBanned;

if (hasRequiredLevel && hasWeapon && canFight) {
  console.log(`${playerName} may enter battle.`);
} else {
  console.log(`${playerName} may not enter battle.`);
}
```

---

# Lesson Summary

You learned how to:

- Require multiple conditions with `&&`
- Accept multiple possibilities with `||`
- Reverse a boolean with `!`
- Check boolean variables directly
- Group related conditions with parentheses
- Combine comparisons and logical operators
- Break large conditions into smaller booleans
- Use nested `if` statements
- Build multi-step login logic
- Understand basic short-circuit evaluation
