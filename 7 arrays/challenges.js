import { spacer } from "../util.js";
/*
==================================================
LESSON 7 — CHALLENGE 1: PLAYER PARTY
==================================================

Create an array named party containing:

"Clint"
"Joel"
"Ellie"
"Geralt"

Print:

First player: Clint
Second player: Joel
Last player: Geralt
Party size: 4

REQUIREMENTS:

1. Use const for party.
2. Store all four names inside one array.
3. Use array indexes to get the first two players.
4. Use party.length - 1 to get the last player.
5. Use .length to get the party size.
6. Use template literals.

IMPORTANT:

Do not type "Geralt" directly into the last-player
console.log().

Use:

party[party.length - 1]

==================================================
*/

// Write your code below
const party = ["Clint", "Joel", "Ellie", "Geralt"];

console.log(`First player: ${party[0]}`);
console.log(`Second player: ${party[1]}`);
console.log(`Last player: ${party[party.length - 1]}`);
console.log(`Party size: ${party.length}`);
spacer();
/*
==================================================
LESSON 7 — CHALLENGE 2: UPDATE THE PARTY
==================================================

Create this array:

const party = ["Clint", "Joel", "Ellie", "Geralt"];

Change the second player from:

"Joel"

to:

"Arthur"

Then print:

Updated second player: Arthur

Finally, print the entire party array.

REQUIREMENTS:

1. Use const for party.
2. Change the item using its index.
3. Do not create a new array.
4. Use a template literal for the updated player.
5. Print the full array using console.log().

REMEMBER:

The second item is at index 1.

==================================================
*/

// Write your code below
party[1] = "Arthur";
console.log(`Updated second player: ${party[1]}`);
spacer();

/*
==================================================
LESSON 7 — CHALLENGE 3: ADD AND REMOVE PLAYERS
==================================================

Use your existing party array.

Add this player to the end:

"Kratos"

Print the full array.

Then remove the last player using .pop().

Store the removed player in a variable named:

removedPlayer

Print:

Removed player: Kratos

Then print the party again.

REQUIREMENTS:

1. Use .push() to add Kratos.
2. Use .pop() to remove the last player.
3. Store the value returned by .pop().
4. Use a template literal for the removed player.
5. Print the array before and after removing the player.

IMPORTANT:

.pop() does two things:

- Removes the last item
- Returns the removed item

==================================================
*/

// Write your code below

party.push("Kratos");
console.log(party);
const removedPlayer = party.pop();
console.log(`Removed player: ${removedPlayer}`);
spacer();

/*
==================================================
LESSON 7 — CHALLENGE 4: PARTY ROSTER
==================================================

Use your existing party array.

Loop through every player and print:

Player 1: Clint
Player 2: Arthur
Player 3: Ellie
Player 4: Geralt

REQUIREMENTS:

1. Use a for loop.
2. Start i at 0.
3. Loop while i is less than party.length.
4. Access the current player using party[i].
5. Use a template literal.
6. Display player numbers starting at 1.

IMPORTANT:

Array indexes start at 0, but the displayed player
number should start at 1.

Use:

i + 1

for the displayed number.

==================================================
*/

// Write your code below

for (let i = 0; i < party.length; i++) {
  console.log(`Player ${i + 1}: ${party[i]}`);
}
spacer();
/*
==================================================
LESSON 7 — CHALLENGE 5: TOTAL PARTY HEALTH
==================================================

Create an array named healthValues containing:

100
80
65
90

Create a variable named totalHealth starting at 0.

Loop through the array and add every health value
to totalHealth.

After the loop, print:

Total health: 335

REQUIREMENTS:

1. Use const for healthValues.
2. Use let for totalHealth.
3. Use a for loop.
4. Loop through the entire array using .length.
5. Add healthValues[i] to totalHealth.
6. Print the final total after the loop.

BONUS:

Also print the average health.

Average health is:

totalHealth / healthValues.length

Expected:

Average health: 83.75

==================================================
*/

// Write your code below
const healthValues = [100, 80, 65, 90];
let totalHealth = 0;

for (let i = 0; i < healthValues.length; i++) {
  totalHealth += healthValues[i];
}
const avgHealth = totalHealth / healthValues.length;
console.log(avgHealth);
