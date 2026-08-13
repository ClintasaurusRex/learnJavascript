import { spacer } from "../util.js";
/*
==================================================
LESSON 9 — CHALLENGE 1: FOREACH PARTY ROSTER
==================================================

Create this array:

const party = ["Clint", "Arthur", "Ellie", "Geralt"];

Use .forEach() to print every player.

EXPECTED OUTPUT:

Player: Clint
Player: Arthur
Player: Ellie
Player: Geralt

REQUIREMENTS:

1. Use const for party.
2. Use .forEach().
3. Do not use a for loop.
4. Give the current item the parameter name player.
5. Use a template literal.

STARTING SHAPE:

party.forEach(function (player) {
  // Print player
});

==================================================
*/

// Write your code below
const party = ["Clint", "Arthur", "Ellie", "Geralt"];

party.forEach(function (player) {
  console.log(player);
});
spacer();
/*
==================================================
LESSON 9 — CHALLENGE 2: DOUBLE THE LEVELS
==================================================

Create this array:

const levels = [5, 10, 15, 20];

Use .map() to create a new array named:

doubledLevels

Each value should be multiplied by 2.

EXPECTED RESULT:

[10, 20, 30, 40]

Then print both arrays:

Original: [5, 10, 15, 20]
Doubled: [10, 20, 30, 40]

REQUIREMENTS:

1. Use const for levels.
2. Use .map().
3. Do not use a for loop.
4. Name the current item level.
5. Return level * 2.
6. Store the new array in doubledLevels.
7. Print both arrays.

IMPORTANT:

.map() does NOT change the original array.

It returns a new array.

STARTING SHAPE:

const doubledLevels = levels.map(function (level) {
  return  (new value) ;
});

==================================================
*/

// Write your code below
const levels = [5, 10, 15, 20];

const doubledLevels = levels.map(function (level) {
  return level * 2;
});
console.log(`Original: ${JSON.stringify(levels)}`);
console.log(`Doubled: ${JSON.stringify(doubledLevels)}`);
spacer();
/*
==================================================
LESSON 9 — CHALLENGE 3: FILTER HIGH LEVELS
==================================================

Create this array:

const levels = [5, 10, 15, 20, 25, 30];

Use .filter() to create a new array named:

highLevels

Only keep levels that are greater than or equal
to 20.

EXPECTED RESULT:

[20, 25, 30]

Print both arrays.

REQUIREMENTS:

1. Use const for levels.
2. Use .filter().
3. Do not use a for loop.
4. Name the current item level.
5. Return the comparison:

level >= 20

6. Store the new array in highLevels.
7. Print the original and filtered arrays.

IMPORTANT:

.filter() keeps an item when the returned condition
is true.

STARTING SHAPE:

const highLevels = levels.filter(function (level) {
  return (comparison);
});

==================================================
*/

// Write your code below
levels.push(25, 30);
const highLevels = levels.filter(function (level) {
  return level >= 20;
});

console.log(levels);
console.log(highLevels);
spacer();
/*
==================================================
LESSON 9 — CHALLENGE 4: FIND A PLAYER
==================================================

Create this array:

const players = [
  "Clint",
  "Arthur",
  "Ellie",
  "Geralt",
];

Use .find() to search for:

"Ellie"

Store the result in:

foundPlayer

Then print:

Found player: Ellie

REQUIREMENTS:

1. Use const for players.
2. Use .find().
3. Do not use a for loop.
4. Name the current item player.
5. Use === to compare player with "Ellie".
6. Store the result in foundPlayer.
7. Use a template literal for the output.

BONUS:

Change the search to:

"Kratos"

Print the result and see what JavaScript gives you
when .find() cannot find a match.

==================================================
*/

// Write your code below

const foundPlayer = party.find(function (player) {
  return player.toLowerCase() === "Ellie".toLowerCase();
});
const foundPlayerKratos = party.find(function (player) {
  return player.toLowerCase() === "Kratos".toLowerCase();
});

console.log(`Found player: ${foundPlayer}`);
console.log(`Found player: ${foundPlayerKratos}`);
spacer();
/*
==================================================
LESSON 9 — CHALLENGE 5: CHECK PARTY MEMBERSHIP
==================================================

Use your existing party array.

Create:

const hasGeralt

Use .includes() to check whether the party contains:

"Geralt"

Then create:

const hasKratos

Use .includes() to check whether the party contains:

"Kratos"

Print:

Has Geralt: true
Has Kratos: false

REQUIREMENTS:

1. Reuse the existing party array.
2. Use .includes().
3. Store each result in a variable.
4. Do not use a loop.
5. Do not use .find().
6. Print both boolean values with template literals.

BONUS:

Use an if/else statement with hasGeralt.

If true, print:

Geralt is in the party.

Otherwise, print:

Geralt is not in the party.

==================================================
*/

// Write your code below
const hasGeralt = party.includes("Geralt");
const hasKratos = party.includes("Kratos");
console.log(`Has Geralt: ${hasGeralt}`);
console.log(`Has Kratos: ${hasKratos}`);
spacer();
/*
==================================================
LESSON 9 — CHALLENGE 6: REDUCE TOTAL HEALTH
==================================================

Create this array:

const healthValues = [100, 80, 65, 90];

Use .reduce() to calculate the total health.

Store the result in:

totalHealth

EXPECTED RESULT:

335

Print:

Total health: 335

REQUIREMENTS:

1. Use const for healthValues.
2. Use .reduce().
3. Do not use a for loop.
4. Name the first parameter accumulator.
5. Name the second parameter health.
6. Return accumulator + health.
7. Start the accumulator at 0.
8. Store the result in totalHealth.
9. Use a template literal for the output.

STARTING SHAPE:

const totalHealth = healthValues.reduce(
  function (accumulator, health) {
    return accumulator + health;
  },
  0,
);

==================================================
*/

// Write your code below
const healthValues = [100, 80, 65, 90];

const totalHealth = healthValues.reduce(function (accumulator, health) {
  return accumulator + health;
}, 0);
console.log(`Total health: ${totalHealth}`);
spacer();
/*
==================================================
LESSON 9 — FINAL CHALLENGE: PLAYER SCORES
==================================================

Create this array:

const scores = [45, 80, 72, 30, 95, 60];

STEP 1:

Use .filter() to create a new array named:

passingScores

Only keep scores greater than or equal to 60.

Expected:

[80, 72, 95, 60]

STEP 2:

Use .map() on passingScores to create:

bonusScores

Add 5 points to every score.

Expected:

[85, 77, 100, 65]

STEP 3:

Use .reduce() on bonusScores to calculate:

totalScore

Expected:

327

Print:

Passing scores: ...
Bonus scores: ...
Total score: 327

REQUIREMENTS:

1. Do not use a for loop.
2. Use .filter().
3. Use .map().
4. Use .reduce().
5. Store the result of each step in a variable.
6. Start reduce at 0.

==================================================
*/

// Write your code below\
const scores = [45, 80, 72, 30, 95, 60];

const passingScores = scores.filter(function (score) {
  return score >= 60;
});

const bonusScores = passingScores.map(function (passScore) {
  return passScore + 5;
});

const totalScore = bonusScores.reduce(function (accumulator, score) {
  return accumulator + score;
}, 0);

console.log(`Passing scores: ${passingScores}`);
console.log(`Bonus scores: ${bonusScores}`);
console.log(`Total score: ${totalScore}`);
