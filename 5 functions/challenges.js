/*
==================================================
LESSON 5 — CHALLENGE 1: BATTLE MESSAGE
==================================================

Create a function named startBattle.

Inside the function, print:

The battle has started!
Prepare your weapon.

Call the function two times.

EXPECTED OUTPUT:

The battle has started!
Prepare your weapon.
The battle has started!
Prepare your weapon.

REQUIREMENTS:

1. Create the function using the function keyword.
2. Name the function startBattle.
3. Put both console.log() statements inside it.
4. Call the function twice.
5. Do not copy the console.log() statements outside
   the function.

REMEMBER:

Creating a function:

function startBattle() {
  // Code
}

Calling a function:

startBattle();

==================================================
*/

// Write your code below

function startBattle() {
  console.log("The battle has started!");
  console.log("Prepare your weapon.");
}

startBattle();
startBattle();
console.log("=".repeat(50));
/*
==================================================
LESSON 5 — CHALLENGE 2: PLAYER INTRODUCTION
==================================================

Create a function named introducePlayer.

The function should accept two parameters:

- playerName
- playerLevel

Inside the function, print:

Clint is level 10.

Use a template literal so the function works with
different names and levels.

Call the function three times:

introducePlayer("Clint", 10);
introducePlayer("Joel", 25);
introducePlayer("Ellie", 18);

EXPECTED OUTPUT:

Clint is level 10.
Joel is level 25.
Ellie is level 18.

REQUIREMENTS:

1. Create a function named introducePlayer.
2. Give it two parameters.
3. Use both parameters inside a template literal.
4. Call the function three times.
5. Do not create separate variables for each player.

==================================================
*/

// Write your code below
function introducePlayer(playerName, playerLevel) {
  console.log(`${playerName} is level ${playerLevel}. `);
}
introducePlayer("Clint", 10);
introducePlayer("Joel", 25);
introducePlayer("Ellie", 18);
console.log("=".repeat(50));

/*
==================================================
LESSON 5 — CHALLENGE 3: CALCULATE DAMAGE
==================================================

Create a function named calculateDamage.

It should accept two parameters:

- attackPower
- weaponDamage

Add the two values together and return the result.

Call the function with:

calculateDamage(20, 15)

Store the returned value inside a variable named:

totalDamage

Then print:

Total damage: 35

REQUIREMENTS:

1. Create a function named calculateDamage.
2. Give it two parameters.
3. Use return inside the function.
4. Do not use console.log() inside the function.
5. Store the returned value in totalDamage.
6. Print totalDamage using a template literal.

BONUS:

Call the function again with different values and
store the result in another variable.

IMPORTANT:

This function should calculate and return a value.

It should not print the result itself.

==================================================
*/

// Write your code below
function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

totalDamage = calculateDamage(200, 35);
console.log(`Total damage: ${totalDamage}`);
console.log("=".repeat(50));
/*
==================================================
LESSON 5 — CHALLENGE 4: HEALTH STATUS FUNCTION
==================================================

Create a function named getHealthStatus.

The function should accept one parameter:

- health

Use if, else if, and else inside the function.

RULES:

If health is greater than or equal to 75, return:

"Healthy"

If health is greater than or equal to 25, return:

"Injured"

If health is greater than 0, return:

"Critical"

Otherwise, return:

"Dead"

Call the function with these values:

getHealthStatus(100)
getHealthStatus(50)
getHealthStatus(10)
getHealthStatus(0)

Store each returned value in a separate variable.

Print the results using console.log().

EXPECTED OUTPUT:

Healthy
Injured
Critical
Dead

REQUIREMENTS:

1. Create a function named getHealthStatus.
2. Give it one parameter named health.
3. Use if, else if, and else.
4. Return a string from each branch.
5. Do not use console.log() inside the function.
6. Store each returned result in a variable.
7. Print the variables after calling the function.

REMEMBER:

return sends a value out of the function.

==================================================
*/

// Write your code below
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
const fullHealth = getHealthStatus(100);
const halfHeath = getHealthStatus(50);
const lowHealth = getHealthStatus(10);
const dead = getHealthStatus(0);

console.log(fullHealth);
console.log(halfHeath);
console.log(lowHealth);
console.log(dead);
console.log("=".repeat(50));

/*
==================================================
LESSON 5 — CHALLENGE 5: BATTLE SUMMARY
==================================================

You already know how to create a function that
calculates damage.

Create this function:

calculateDamage(attackPower, weaponDamage)

It should add the two values and return the result.

Then create another function named:

createBattleSummary

It should accept three parameters:

- playerName
- attackPower
- weaponDamage

Inside createBattleSummary:

1. Call calculateDamage using attackPower and
   weaponDamage.
2. Store the returned value in a variable named
   totalDamage.
3. Return this message:

Clint dealt 35 damage.

Call createBattleSummary with:

createBattleSummary("Clint", 20, 15)

Store the returned message in a variable named:

battleSummary

Print battleSummary.

EXPECTED OUTPUT:

Clint dealt 35 damage.

REQUIREMENTS:

1. Create both functions.
2. calculateDamage must return a number.
3. createBattleSummary must call calculateDamage.
4. createBattleSummary must return a string.
5. Do not repeat the addition inside
   createBattleSummary.
6. Use a template literal.
7. Print the final result outside both functions.

BONUS:

Call createBattleSummary again with:

createBattleSummary("Joel", 100, 25)

Expected:

Joel dealt 125 damage.

==================================================
*/

// Write your code below

function calculateDamage(attackPower, weaponDamage) {
  return attackPower + weaponDamage;
}

function createBattleSummary(playerName, attackPower, weaponDamage) {
  return `${playerName} dealt ${totalDamage} damage.`;
}

const result = createBattleSummary("Clint", 20, 15);
console.log(result);
