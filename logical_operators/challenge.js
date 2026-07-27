/*
==================================================
LESSON 3 — CHALLENGE 1: DUNGEON ACCESS
==================================================

Create these variables:

- playerName with the value "Clint"
- playerLevel with the value 12
- hasDungeonKey with the value true
- isBanned with the value false

The player may enter the dungeon only when:

1. Their level is greater than or equal to 10
2. They have the dungeon key
3. They are not banned

Use && to combine the conditions.

Use ! to check that the player is not banned.

If every condition is true, print:

Clint may enter the dungeon.

Otherwise, print:

Clint may not enter the dungeon.

REQUIREMENTS:

1. Use an if/else statement.
2. Use >= to check the player's level.
3. Use && to combine the conditions.
4. Use ! with isBanned.
5. Use a template literal.

TEST 1:

playerLevel = 12
hasDungeonKey = true
isBanned = false

Expected:

Clint may enter the dungeon.

TEST 2:

playerLevel = 5
hasDungeonKey = true
isBanned = false

Expected:

Clint may not enter the dungeon.

TEST 3:

playerLevel = 12
hasDungeonKey = false
isBanned = false

Expected:

Clint may not enter the dungeon.

TEST 4:

playerLevel = 12
hasDungeonKey = true
isBanned = true

Expected:

Clint may not enter the dungeon.

IMPORTANT:

Change the existing variable values between tests.
Do not declare the variables multiple times.

==================================================
*/

// Write your code below

// const playerName = "Clint";
// let playerLevel = 12;
// const hasDungeonKey = true;
// const isBanned = false;

// if (playerLevel >= 10 && hasDungeonKey && !isBanned) {
//   console.log(`${playerName} may enter the dungeon.`);
// } else {
//   console.log(`${playerName} may not enter the dungeon.`);
// }

/*
==================================================
LESSON 3 — CHALLENGE 2: WEAPON CHECK
==================================================

Create these variables:

- playerName with the value "Clint"
- hasSword with the value false
- hasBow with the value true
- hasMagic with the value false

The player is ready for battle if they have:

- A sword
OR
- A bow
OR
- Magic

Use || to combine the three conditions.

If the player has at least one weapon, print:

Clint is ready for battle.

Otherwise, print:

Clint has no way to fight.

REQUIREMENTS:

1. Use an if/else statement.
2. Use || to combine the booleans.
3. Use a template literal.
4. Do not compare booleans with === true.

TEST 1:

hasSword = false
hasBow = true
hasMagic = false

Expected:

Clint is ready for battle.

TEST 2:

hasSword = true
hasBow = false
hasMagic = false

Expected:

Clint is ready for battle.

TEST 3:

hasSword = false
hasBow = false
hasMagic = true

Expected:

Clint is ready for battle.

TEST 4:

hasSword = false
hasBow = false
hasMagic = false

Expected:

Clint has no way to fight.

IMPORTANT:

Change the existing values between tests.
Do not declare the variables multiple times.

==================================================
*/

// Write your code below

// const hasSword = false;
// const hasBow = false;
// const hasMagic = true;

// if (hasSword || hasBow || hasMagic) {
//   console.log(`${playerName} is ready for battle.`);
// } else {
//   console.log(`${playerName} has no way to fight.`);
// }
/*
==================================================
LESSON 3 — CHALLENGE 3: BATTLE PERMISSION
==================================================

Create these variables:

- playerName with the value "Clint"
- playerLevel with the value 15
- hasSword with the value false
- hasBow with the value true
- isInjured with the value false

The player may enter battle when:

1. Their level is greater than or equal to 10

AND

2. They have a sword OR a bow

AND

3. They are not injured

If all requirements are met, print:

Clint may enter battle.

Otherwise, print:

Clint may not enter battle.

REQUIREMENTS:

1. Use an if/else statement.
2. Use >= to check the level.
3. Use || to check for a sword or bow.
4. Use && to combine the main requirements.
5. Use ! to check that the player is not injured.
6. Use a template literal.

TEST 1:

playerLevel = 15
hasSword = false
hasBow = true
isInjured = false

Expected:

Clint may enter battle.

TEST 2:

playerLevel = 5
hasSword = true
hasBow = true
isInjured = false

Expected:

Clint may not enter battle.

TEST 3:

playerLevel = 15
hasSword = false
hasBow = false
isInjured = false

Expected:

Clint may not enter battle.

TEST 4:

playerLevel = 15
hasSword = true
hasBow = false
isInjured = true

Expected:

Clint may not enter battle.

IMPORTANT:

Put the OR conditions inside parentheses:

(hasSword || hasBow)

==================================================
*/

// Write your code below
// const playerName = "Clint";
// const playerLevel = 15;
// const hasSword = true;
// const hasBow = false;
// const isInjured = false;

// if (playerLevel >= 10 && (hasSword || hasBow) && !isInjured) {
//   console.log(`${playerName} may enter battle.`);
// } else {
//   console.log(`${playerName} may not enter battle.`);
// }

/*
==================================================
LESSON 3 — FINAL CHALLENGE: ACCOUNT LOGIN
==================================================

Create these variables:

- username with the value "Clint"
- enteredUsername with the value "Clint"
- password with the value "javascript123"
- enteredPassword with the value "javascript123"
- hasTwoFactorCode with the value true
- isAccountLocked with the value false

LOGIN RULES:

First, check whether the account is locked.

If isAccountLocked is true, print:

Account locked.

Otherwise, check whether BOTH:

- enteredUsername exactly matches username
- enteredPassword exactly matches password

If the username and password match, use a nested if
statement to check hasTwoFactorCode.

If hasTwoFactorCode is true, print:

Login successful. Welcome, Clint.

Otherwise, print:

Two-factor code required.

If the username or password is incorrect, print:

Invalid username or password.

REQUIREMENTS:

1. Use if, else if, and else.
2. Use && to combine the username and password checks.
3. Use === for exact comparisons.
4. Use a nested if statement.
5. Use a template literal in the welcome message.
6. Do not use === true when checking booleans.

TEST 1:

Correct username
Correct password
hasTwoFactorCode = true
isAccountLocked = false

Expected:

Login successful. Welcome, Clint.

TEST 2:

Correct username
Correct password
hasTwoFactorCode = false
isAccountLocked = false

Expected:

Two-factor code required.

TEST 3:

Wrong username or password
isAccountLocked = false

Expected:

Invalid username or password.

TEST 4:

Correct login information
isAccountLocked = true

Expected:

Account locked.

IMPORTANT:

The account-lock check must happen first.

==================================================
*/

// Write your code below
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
