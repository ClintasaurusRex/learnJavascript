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
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 3: OBJECT DESTRUCTURING
==================================================

Create this object:

const character = {
  name: "Geralt",
  level: 30,
  weapon: "Silver Sword",
};

Use object destructuring to create:

name
level
weapon

Print:

Name: Geralt
Level: 30
Weapon: Silver Sword

REQUIREMENTS:

1. Use object destructuring.
2. Do not use character.name.
3. Do not use character.level.
4. Do not use character.weapon.
5. Use one destructuring statement.

STARTING SHAPE:

const { name, level, weapon } = character;

==================================================
*/

// Write your code below

const character = {
  name: "Geralt",
  level: 30,
  weapon: "Silver Sword",
};

const { name, level, weapon } = character;

console.log(`Name: ${name}`);
console.log(`Level: ${level}`);
console.log(`Weapon: ${weapon}`);
spacer();

/*
==================================================
LESSON 11 — CHALLENGE 4: RENAMING PROPERTIES
==================================================

Create this object:

const enemy = {
  name: "Dragon",
  health: 250,
  power: 90,
};

Use object destructuring to create:

enemyName
enemyHealth

Rename:

name   -> enemyName
health -> enemyHealth

Print:

Enemy: Dragon
Health: 250

REQUIREMENTS:

1. Use object destructuring.
2. Rename the properties during destructuring.
3. Do not use enemy.name.
4. Do not use enemy.health.
5. Do not create separate assignment statements.

STARTING SHAPE:

const {
  name: enemyName,
  health: enemyHealth
} = enemy;

==================================================
*/

// Write your code below

const enemy = { name: "Dragon", health: 250, power: 90 };

const { name: enemyName, health: enemyHealth } = enemy;

console.log(`Enemy: ${enemyName}`);
console.log(`Health: ${enemyHealth}`);
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 5: SPREAD WITH ARRAYS - Creates new array without modifying the original
==================================================

Create this array:

const originalParty = ["Clint", "Arthur", "Ellie"];

Create a NEW array called:

expandedParty

Use the spread operator to copy all values from
originalParty and add:

"Geralt"

to the end.

EXPECTED RESULT:

["Clint", "Arthur", "Ellie", "Geralt"]

REQUIREMENTS:

1. Use the spread operator ...
2. Do not use .push().
3. Do not change originalParty.
4. Create a new array.
5. Print both arrays.

STARTING SHAPE:

const expandedParty = [...originalParty, "Geralt"];

==================================================
*/

// Write your code below

const originalParty = ["Clint", "Arthur", "Ellie"];

const expandedParty = [...originalParty, "Geralt"];

console.log(originalParty);
console.log(expandedParty);
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 6: COMBINE ARRAYS
==================================================

Create these arrays:

const meleeWeapons = ["Sword", "Axe"];
const rangedWeapons = ["Bow", "Crossbow"];

Create a NEW array called:

allWeapons

Use the spread operator to combine both arrays.

EXPECTED RESULT:

["Sword", "Axe", "Bow", "Crossbow"]

REQUIREMENTS:

1. Use the spread operator.
2. Do not use .push().
3. Do not use .concat().
4. Do not change either original array.
5. Print allWeapons.

==================================================
*/

// Write your code below

const meleeWeapons = ["Sword", "Axe"];
const rangedWeapons = ["Bow", "Crossbow"];

const allWeapons = [...meleeWeapons, ...rangedWeapons];
console.log(allWeapons);
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 7: SPREAD WITH OBJECTS
==================================================

Create this object:

const player = {
  name: "Geralt",
  level: 30,
  health: 100,
};

Create a NEW object called:

damagedPlayer

Use the spread operator to copy player,
then change:

health

to:

65

EXPECTED RESULT:

{
  name: "Geralt",
  level: 30,
  health: 65
}

REQUIREMENTS:

1. Use the spread operator.
2. Do not change the original player object.
3. Create a new object.
4. Override only the health property.
5. Print both player and damagedPlayer.

==================================================
*/

// Write your code below

const player = {
  name: "Geralt",
  level: 30,
  health: 100,
};

const damagedPlayer = { ...player, health: 65 };
console.log(damagedPlayer);
spacer();
/*
==================================================
LESSON 11 — CHALLENGE 8: ADDING OBJECT PROPERTIES
==================================================

Create:

const character = {
  name: "Arthur",
  level: 25,
};

Create a NEW object called:

armedCharacter

Use the spread operator to copy character,
then add:

weapon: "Revolver"

EXPECTED RESULT:

{
  name: "Arthur",
  level: 25,
  weapon: "Revolver"
}

REQUIREMENTS:

1. Use the spread operator ...
2. Do not change character.
3. Create a new object.
4. Add the weapon property.
5. Print armedCharacter.

STARTING SHAPE:



==================================================
*/

// Write your code below
const character2 = {
  name: "Arthur",
  level: 25,
};

const armedCharacter = { ...character2, weapon: "Revolver" };
console.log(armedCharacter);
