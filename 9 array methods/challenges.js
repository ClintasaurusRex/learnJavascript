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
