# Lesson 5 — Functions

## Lesson Goal

In this lesson, you learned how to organize reusable blocks of JavaScript code using functions.

You learned how to:

- Create functions
- Call functions
- Use parameters and arguments
- Return values
- Store returned values
- Use conditional logic inside functions
- Call one function from another function
- Separate calculations from output

---

# 1. What Is a Function?

A function is a reusable block of code.

```js
function sayHello() {
  console.log("Hello!");
}
```

Creating the function does not run it.

To run the function, call it:

```js
sayHello();
```

You can call the same function multiple times:

```js
sayHello();
sayHello();
sayHello();
```

Output:

```text
Hello!
Hello!
Hello!
```

---

# 2. Function Structure

A basic function follows this structure:

```js
function functionName() {
  // Code to run
}
```

Example:

```js
function startBattle() {
  console.log("The battle has started!");
  console.log("Prepare your weapon.");
}
```

Call the function:

```js
startBattle();
```

---

# 3. Defining Versus Calling

Defining a function creates its instructions:

```js
function startBattle() {
  console.log("The battle has started!");
}
```

Calling the function runs those instructions:

```js
startBattle();
```

A useful mental model is:

```text
Define = create the instructions
Call = run the instructions
```

---

# 4. Reusing Functions

Functions prevent repeated code.

Instead of:

```js
console.log("The battle has started!");
console.log("Prepare your weapon.");

console.log("The battle has started!");
console.log("Prepare your weapon.");
```

Create the instructions once:

```js
function startBattle() {
  console.log("The battle has started!");
  console.log("Prepare your weapon.");
}

startBattle();
startBattle();
```

The function is defined once and called twice.

---

# 5. Parameters

Parameters are variables that belong to a function.

```js
function greetPlayer(playerName) {
  console.log(`Welcome, ${playerName}!`);
}
```

In this function:

```js
playerName;
```

is a parameter.

It receives a value when the function is called.

---

# 6. Arguments

Arguments are the actual values passed into a function.

```js
greetPlayer("Clint");
```

In this call:

```js
"Clint";
```

is the argument.

The argument is stored temporarily in the `playerName` parameter.

---

# 7. Multiple Parameters

A function can accept more than one parameter.

```js
function introducePlayer(playerName, playerLevel) {
  console.log(`${playerName} is level ${playerLevel}.`);
}
```

Call it with two arguments:

```js
introducePlayer("Clint", 10);
introducePlayer("Joel", 25);
introducePlayer("Ellie", 18);
```

Output:

```text
Clint is level 10.
Joel is level 25.
Ellie is level 18.
```

Argument order matters.

```js
introducePlayer("Clint", 10);
```

means:

```text
playerName receives "Clint"
playerLevel receives 10
```

---

# 8. Functions with `console.log()`

A function can display information directly:

```js
function introducePlayer(playerName, playerLevel) {
  console.log(`${playerName} is level ${playerLevel}.`);
}
```

This function performs an action.

It prints a message but does not send a value back.

---

# 9. Returning Values

Use `return` when a function should calculate or create a value and send it back.

```js
function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
```

Call the function:

```js
const total = addNumbers(5, 3);
```

The returned value is stored in `total`.

```js
console.log(total);
```

Output:

```text
8
```

---

# 10. `console.log()` Versus `return`

`console.log()` displays something:

```js
function addNumbers(numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
}
```

`return` sends a value back:

```js
function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
```

A returned value can be:

- Stored in a variable
- Printed later
- Used in another calculation
- Passed into another function
- Returned from another function

---

# 11. Storing Returned Values

```js
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

const totalDamage = calculateDamage(20, 15);

console.log(`Total damage: ${totalDamage}`);
```

Output:

```text
Total damage: 35
```

The function call:

```js
calculateDamage(20, 15);
```

produces:

```js
35;
```

Therefore this:

```js
const totalDamage = calculateDamage(20, 15);
```

becomes similar to:

```js
const totalDamage = 35;
```

---

# 12. Always Declare Variables

Variables should be declared with `const` or `let`.

Incorrect:

```js
totalDamage = calculateDamage(20, 15);
```

Correct:

```js
const totalDamage = calculateDamage(20, 15);
```

Use `const` when the variable will not be reassigned.

Use `let` when the variable must change later.

---

# 13. Returning Strings

Functions can return strings:

```js
function getGreeting(playerName) {
  return `Welcome, ${playerName}!`;
}

const greeting = getGreeting("Clint");

console.log(greeting);
```

Output:

```text
Welcome, Clint!
```

Functions can return many types of values:

```text
Strings
Numbers
Booleans
Arrays
Objects
```

Arrays and objects will be covered in later lessons.

---

# 14. Conditional Logic Inside Functions

Functions can contain `if`, `else if`, and `else`.

```js
function getHealthStatus(health) {
  if (health >= 75) {
    return "Healthy";
  } else if (health >= 25) {
    return "Injured";
  } else if (health > 0) {
    return "Critical";
  } else {
    return "Dead";
  }
}
```

Test it:

```js
const fullHealth = getHealthStatus(100);
const halfHealth = getHealthStatus(50);
const lowHealth = getHealthStatus(10);
const dead = getHealthStatus(0);

console.log(fullHealth);
console.log(halfHealth);
console.log(lowHealth);
console.log(dead);
```

Output:

```text
Healthy
Injured
Critical
Dead
```

---

# 15. `return` Ends the Function

When JavaScript reaches `return`, the function stops.

```js
function getHealthStatus(health) {
  if (health >= 75) {
    return "Healthy";
  }

  console.log("This only runs when health is below 75.");
}
```

When health is `100`, JavaScript returns `"Healthy"` and exits the function.

Any code after that return is skipped.

---

# 16. Returning Early

Because `return` ends the function, an `else` is not always required.

This version is valid:

```js
function getHealthStatus(health) {
  if (health >= 75) {
    return "Healthy";
  } else if (health >= 25) {
    return "Injured";
  } else if (health > 0) {
    return "Critical";
  } else {
    return "Dead";
  }
}
```

This version is also valid:

```js
function getHealthStatus(health) {
  if (health >= 75) {
    return "Healthy";
  }

  if (health >= 25) {
    return "Injured";
  }

  if (health > 0) {
    return "Critical";
  }

  return "Dead";
}
```

The second pattern is sometimes called an early-return pattern.

---

# 17. Function Scope

Parameters and variables created inside a function only exist inside that function.

```js
function calculateDamage(attackPower, weaponDamage) {
  const totalDamage = attackPower + weaponDamage;

  return totalDamage;
}
```

These variables exist inside the function:

```text
attackPower
weaponDamage
totalDamage
```

This would cause an error outside the function:

```js
console.log(attackPower);
```

Output:

```text
ReferenceError: attackPower is not defined
```

---

# 18. Calling One Function from Another

Functions can reuse other functions.

```js
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

function createBattleSummary(playerName, attackPower, weaponDamage) {
  const totalDamage = calculateDamage(attackPower, weaponDamage);

  return `${playerName} dealt ${totalDamage} damage.`;
}
```

Call the second function:

```js
const result = createBattleSummary("Clint", 20, 15);

console.log(result);
```

Output:

```text
Clint dealt 35 damage.
```

---

# 19. How the Functions Work Together

This call happens first:

```js
createBattleSummary("Clint", 20, 15);
```

Inside `createBattleSummary`, JavaScript calls:

```js
calculateDamage(20, 15);
```

`calculateDamage()` returns:

```js
35;
```

That value is stored here:

```js
const totalDamage = 35;
```

Then `createBattleSummary()` returns:

```text
Clint dealt 35 damage.
```

That message is stored in:

```js
const result;
```

Finally:

```js
console.log(result);
```

prints the message.

---

# 20. Separating Responsibilities

Each function should have a clear job.

```js
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}
```

Its job is to calculate damage.

```js
function createBattleSummary(playerName, attackPower, weaponDamage) {
  const totalDamage = calculateDamage(attackPower, weaponDamage);

  return `${playerName} dealt ${totalDamage} damage.`;
}
```

Its job is to create a message.

This makes code:

- Easier to read
- Easier to test
- Easier to reuse
- Easier to change

---

# Completed Examples

## Simple Function

```js
function startBattle() {
  console.log("The battle has started!");
  console.log("Prepare your weapon.");
}

startBattle();
startBattle();
```

## Function with Parameters

```js
function introducePlayer(playerName, playerLevel) {
  console.log(`${playerName} is level ${playerLevel}.`);
}

introducePlayer("Clint", 10);
introducePlayer("Joel", 25);
introducePlayer("Ellie", 18);
```

## Function Returning a Number

```js
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

const totalDamage = calculateDamage(200, 35);

console.log(`Total damage: ${totalDamage}`);
```

## Function with Conditional Returns

```js
function getHealthStatus(health) {
  if (health >= 75) {
    return "Healthy";
  } else if (health >= 25) {
    return "Injured";
  } else if (health > 0) {
    return "Critical";
  } else {
    return "Dead";
  }
}
```

## Function Calling Another Function

```js
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

function createBattleSummary(playerName, attackPower, weaponDamage) {
  const totalDamage = calculateDamage(attackPower, weaponDamage);

  return `${playerName} dealt ${totalDamage} damage.`;
}

const result = createBattleSummary("Clint", 20, 15);

console.log(result);
```

---

# Lesson Summary

You learned how to:

- Define a function
- Call a function
- Reuse function instructions
- Add parameters
- Pass arguments
- Return numbers
- Return strings
- Store returned values
- Use conditionals inside functions
- Understand that `return` ends a function
- Use function scope
- Call one function from another
- Give functions separate responsibilities
