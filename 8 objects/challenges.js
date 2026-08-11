import { spacer } from "../util.js";

spacer();

/*
==================================================
LESSON 8 — CHALLENGE 1: PLAYER OBJECT
==================================================

Create an object named player.

Give it these properties:

name: "Clint"
level: 15
health: 100
hasWeapon: true

Then print:

Player: Clint
Level: 15
Health: 100
Has weapon: true

REQUIREMENTS:

1. Use const for player.
2. Store all four values inside the player object.
3. Use dot notation to access the properties.
4. Use template literals for the output.
5. Do not create separate variables for name, level,
   health, or hasWeapon.

OBJECT EXAMPLE:

const example = {
  propertyOne: "value",
  propertyTwo: 10,
};

==================================================
*/

// Write your code below
const player = {
  name: "Clint",
  level: 15,
  health: 100,
  hasWeapon: true,
  // describe() { This is how to put a method in at the start
  //   console.log(`${this.name} is level ${this.level} and has ${this.health}.`);
  // },
};

console.log(`Player: ${player.name}`);
console.log(`Level: ${player.level}`);
console.log(`Health: ${player.health}`);
console.log(`Has Weapon: ${player.hasWeapon}`);
spacer();
/*
==================================================
LESSON 8 — CHALLENGE 2: UPDATE PLAYER
==================================================

Use your existing player object.

Change:

health from 100 to 75

level from 15 to 16

Then add a new property:

weapon: "Sword"

Print:

Clint is level 16.
Health: 75
Weapon: Sword

REQUIREMENTS:

1. Reuse the existing player object.
2. Do not create a new player object.
3. Change health using dot notation.
4. Change level using dot notation.
5. Add weapon using dot notation.
6. Use template literals.

HINT:

player.health = 75;

Adding a new property works the same way:

player.weapon = "Sword";

==================================================
*/

// Write your code below
player.level = 16;
player.health = 75;
player["weapon"] = "Sword";
console.log(`${player.name} is level ${player.level}.`);
console.log(`Health: ${player.health}`);
console.log(`Weapon: ${player.weapon}`);
spacer();
/*
==================================================
LESSON 8 — CHALLENGE 3: PLAYER METHOD
==================================================

Use your existing player object.

Add a method named:

describe

The method should print:

Clint is level 16 and has 75 health.

Use the object's existing properties.

Then call the method.

EXPECTED OUTPUT:

Clint is level 16 and has 75 health.

REQUIREMENTS:

1. Reuse the existing player object.
2. Add a method named describe.
3. Use a function inside the object.
4. Use this.name inside the method.
5. Use this.level inside the method.
6. Use this.health inside the method.
7. Call the method using:

player.describe();

IMPORTANT:

Inside an object method:

this.name

means:

the name property belonging to this object

Example:

player.describe = function () {
  console.log(`${this.name}`);
};

==================================================
*/

// Write your code below: this is how to add a method to a existing object
player.describe = function () {
  console.log(`${this.name} is level ${this.level} and has ${this.health}.`);
};
player.describe();
spacer();
/*
==================================================
LESSON 8 — CHALLENGE 4: PLAYER INVENTORY
==================================================

Use your existing player object.

Add a property named inventory.

inventory should contain this array:

"Sword"
"Shield"
"Potion"

Then print:

First item: Sword
Last item: Potion
Inventory size: 3

After that, add:

"Bow"

to the end of the inventory using .push().

Print:

Added item: Bow
Inventory size: 4

REQUIREMENTS:

1. Reuse the existing player object.
2. Add an inventory property.
3. Store an array inside inventory.
4. Use player.inventory to access the array.
5. Use indexes to get items.
6. Use .length.
7. Use .push() to add Bow.
8. Use template literals.

HINT:

player.inventory = ["Sword", "Shield", "Potion"];

To get the first item:

player.inventory[0]

To get the last item:

player.inventory[player.inventory.length - 1]

==================================================
*/

// Write your code below

player.inventory = ["Sword", "Shield", "Potion"];
console.log(`First item: ${player.inventory[0]}`);
console.log(`Last item: ${player.inventory[player.inventory.length - 1]}`);
console.log(`Inventory size: ${player.inventory.length}`);

player.inventory.push("Bow");
console.log(`Added item: ${player.inventory[player.inventory.length - 1]}`);
console.log(`Inventory size: ${player.inventory.length}`);
spacer();
/*
==================================================
LESSON 8 — CHALLENGE 5: ENEMY LIST
==================================================

Create an array named enemies.

Add three objects:

Goblin
health: 30

Orc
health: 80

Dragon
health: 250

Each object should have:

- name
- health

Loop through the enemies array.

Print:

Goblin has 30 health.
Orc has 80 health.
Dragon has 250 health.

REQUIREMENTS:

1. Use const for enemies.
2. Store three objects inside the array.
3. Give every object a name property.
4. Give every object a health property.
5. Use a for loop.
6. Use enemies[i] to access the current object.
7. Use dot notation to access name and health.
8. Use a template literal.

BONUS:

Inside the loop, create:

const currentEnemy = enemies[i];

Then use:

currentEnemy.name
currentEnemy.health

instead of repeating enemies[i].

==================================================
*/

// Write your code below
const enemies = [
  {
    name: "Goblin",
    health: 30,
  },
  {
    name: "Orc",
    health: 80,
  },
  {
    name: "Dragon",
    health: 250,
  },
];

for (let i = 0; i < enemies.length; i++) {
  const currentEnemy = enemies[i];

  console.log(`${currentEnemy.name} has ${currentEnemy.health} health.`);
}
spacer();
/*
==================================================
LESSON 8 — FINAL CHALLENGE: CHARACTER PROFILE
==================================================

Create an object named character.

Give it these properties:

name: "Clint"
level: 20
health: 100
isAlive: true

Add an inventory property containing:

"Sword"
"Bow"
"Potion"

Add a method named:

takeDamage

The method should accept one parameter:

damage

Inside the method:

1. Subtract damage from this.health.

2. If health becomes less than or equal to 0:
   - Set health to 0
   - Set isAlive to false

3. Return this.health.

Then:

Call:

character.takeDamage(35);

Print:

Clint has 65 health.
Alive: true

Then call:

character.takeDamage(100);

Print:

Clint has 0 health.
Alive: false

Finally, loop through the inventory and print:

Item 1: Sword
Item 2: Bow
Item 3: Potion

REQUIREMENTS:

1. Use one character object.
2. Store the inventory array inside the object.
3. Create takeDamage as an object method.
4. Use this.health inside the method.
5. Use this.isAlive inside the method.
6. Use -= to subtract damage.
7. Prevent health from going below 0.
8. Loop through character.inventory.
9. Use template literals.

HINT:

takeDamage(damage) {
  this.health -= damage;

  if (this.health <= 0) {
    this.health = 0;
    this.isAlive = false;
  }

  return this.health;
}

==================================================
*/

// Write your code below
const character = { name: "Clint", level: 20, health: 100, isAlive: true };
character.inventory = ["Sword", "Bow", "Potion"];

character.takeDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
    this.health = 0;
    this.isAlive = false;
  }
  return this.health;
};

character.takeDamage(35);
console.log(`${character.name} has ${character.health}.`);
console.log(`Alive: ${character.isAlive}`);

character.takeDamage(100);
console.log(`${character.name} has ${character.health}.`);
console.log(`Alive: ${character.isAlive}`);
spacer();
/*
==================================================
FINAL STEP: PRINT THE INVENTORY
==================================================

Loop through character.inventory.

Print:

Item 1: Sword
Item 2: Bow
Item 3: Potion

REQUIREMENTS:

1. Use a for loop.
2. Start i at 0.
3. Loop while i < character.inventory.length.
4. Use i + 1 for the displayed item number.
5. Use character.inventory[i] for the current item.

==================================================
*/

// Write your code below

for (let i = 0; i < character.inventory.length; i++) {
  const currentItem = character.inventory[i];
  console.log(`Item ${i + 1}: ${currentItem}`);
}
console.log(character.inventory);
