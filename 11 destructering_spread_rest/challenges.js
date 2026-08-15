import { spacer } from "../util.js";
/*
==================================================
LESSON 11 — CHALLENGE 1: ARRAY DESTRUCTURING
==================================================

Create this array:

const weapons = ["Sword", "Bow", "Axe"];

Use array destructuring to create:

primaryWeapon
secondaryWeapon

The values should become:

primaryWeapon = "Sword"
secondaryWeapon = "Bow"

Print:

Primary: Sword
Secondary: Bow

REQUIREMENTS:

1. Use array destructuring.
2. Do not use weapons[0].
3. Do not use weapons[1].
4. Use one destructuring statement.

STARTING SHAPE:

const [primaryWeapon, secondaryWeapon] = weapons;

const [first, second] = array;
==================================================
*/

// Write your code below
const weapons = ["Sword", "Bow", "Axe"];

const [primaryWeapon, secondaryWeapon] = weapons;

console.log(`Primary weapon: ${primaryWeapon}`);
console.log(`Secondary weapon: ${secondaryWeapon}`);
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 2: SKIPPING VALUES
==================================================

Create this array:

const party = ["Clint", "Arthur", "Ellie", "Geralt"];

Use array destructuring to create:

firstPlayer
thirdPlayer

You want:

firstPlayer = "Clint"
thirdPlayer = "Ellie"

Do NOT create a variable for Arthur.

REQUIREMENTS:

1. Use array destructuring.
2. Skip the second value using a comma.
3. Do not use array indexes.
4. Print firstPlayer and thirdPlayer.

HINT:

const [first, , third] = array;

==================================================
*/

// Write your code below
const party = ["Clint", "Arthur", "Ellie", "Geralt"];

const [first, , third] = party;
console.log(`First player: ${first}`);
console.log(`third player: ${third}`);
