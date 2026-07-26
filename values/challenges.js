/* const playerName = "Clint"; // string
const playerLevel = 5;      // number
const isAlive = true;       // boolean

console.log(typeof playerName);
console.log(typeof playerLevel);
console.log(typeof isAlive); */

/*
==================================================
CHALLENGE: Character Card
==================================================

Create four variables:

1. characterName
2. characterLevel
3. health
4. hasWeapon

Give each variable an appropriate value.

Print the following information using console.log():

Geralt is level 12.
Health: 85
Has weapon: true

REQUIREMENTS:
- Use const for each variable.
- Use console.log() at least three times.
- Use the variables inside your output.

BONUS:
Use typeof to print the type of each variable.
==================================================
*/

const characterName = "Joel";
const characterLevel = 100;
let health = 100;
const hasWeapon = true;

console.log(`${characterName} is level ${characterLevel}`);
console.log(`Health: ${health}`);
console.log(`Has weapon: ${hasWeapon}`);
console.log(typeof characterName);
console.log(typeof characterLevel);
console.log(typeof health);
console.log(typeof hasWeapon);

/*
==================================================
UPGRADE CHALLENGE: TAKING DAMAGE
==================================================

Create these variables:

- characterName with the value "Joel"
- health with the value 100
- damageTaken with the value 35

The character's health needs to change, so use let for health.

Subtract damageTaken from health.

Print:

Joel took 35 damage.
Remaining health: 65

REQUIREMENTS:

1. Use const for characterName.
2. Use let for health.
3. Use const for damageTaken.
4. Update health using subtraction.
5. Use template literals for the output.

BONUS:

Create a boolean called isAlive.

It should be true when health is greater than 0.

Print:

Is alive: true

Hint:

const isAlive = health > 0;

==================================================
*/

// Write your code below

const damageTaken = 35;
health = health - damageTaken;
const isAlive = health > 0;

console.log(`${characterName} took ${damageTaken} damage`);
console.log(`Remaining health: ${health} `);
console.log(`${characterName} is alive: ${isAlive}`);
