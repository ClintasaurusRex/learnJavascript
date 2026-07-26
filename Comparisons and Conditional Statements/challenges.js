/*
==================================================
LESSON 2 — CHALLENGE 1: GAME OVER CHECKER
==================================================

Create these variables:

- characterName with the value "Joel"
- health with the value 0

Use an if/else statement to check the character's health.

If health is greater than 0, print:

Joel is still alive.

Otherwise, print:

Game over. Joel has died.

REQUIREMENTS:

1. Use const for characterName.
2. Use const for health.
3. Use the greater-than operator.
4. Use an if statement.
5. Use an else statement.
6. Use template literals.

TESTING:

Run the program with:

health = 0

Expected output:

Game over. Joel has died.

Then change health to:

health = 50

Expected output:

Joel is still alive.

==================================================
*/

// Write your code below
const characterName = "Joel";
const health = 0;

if (health > 0) {
  console.log(`${characterName} is still alive`);
} else {
  console.log(`Game over. ${characterName} has died.`);
}

/*
==================================================
LESSON 2 — CHALLENGE 2: HEALTH STATUS
==================================================

Create these variables:

- characterName with the value "Joel"
- health with a number between 0 and 100

Use if, else if, and else to print the character's
current health status.

RULES:

If health is exactly 100, print:

Joel has full health.

If health is greater than or equal to 50, print:

Joel is injured.

If health is greater than 0, print:

Joel is critically injured.

Otherwise, print:

Game over. Joel has died.

REQUIREMENTS:

1. Use === to check whether health is exactly 100.
2. Use >= to check whether health is at least 50.
3. Use > to check whether health is greater than 0.
4. Use if, else if, and else.
5. Use template literals.

TEST VALUES:

Test your code with each of these health values:

100
75
25
0

EXPECTED RESULTS:

100 → Joel has full health.
75  → Joel is injured.
25  → Joel is critically injured.
0   → Game over. Joel has died.

IMPORTANT:

Change the value of health between tests.
Do not declare the variables multiple times.

==================================================
*/

// Write your code below

if (health === 100) {
  console.log(`${characterName} has full health`);
} else if (health >= 50) {
  console.log(`${characterName} is injured`);
} else if (health > 0) {
  console.log(`${characterName} is critically injured`);
} else {
  console.log(`Game over: ${characterName} has died`);
}

/*
==================================================
LESSON 2 — FINAL CHALLENGE: GRADE CHECKER
==================================================

Create these variables:

- studentName with the value "Clint"
- score with a number between 0 and 100
- passingScore with the value 50

Use if, else if, and else to determine the grade.

RULES:

If score is greater than or equal to 90, print:

Clint received an A.

If score is greater than or equal to 80, print:

Clint received a B.

If score is greater than or equal to 70, print:

Clint received a C.

If score is greater than or equal to passingScore, print:

Clint passed.

Otherwise, print:

Clint failed.

After the grade checker, create a boolean named:

hasPerfectScore

It should be true when score is exactly 100.

Print:

Perfect score: true

Then create another boolean named:

needsRetry

It should be true when score is less than passingScore.

Print:

Needs retry: false

REQUIREMENTS:

1. Use const for all three starting variables.
2. Use if, else if, and else.
3. Use >= for the grade checks.
4. Use === when creating hasPerfectScore.
5. Use < when creating needsRetry.
6. Use template literals.

TEST VALUES:

100 → A and perfect score is true
85  → B
75  → C
60  → Passed
40  → Failed and needs retry is true

IMPORTANT:

Check the highest score first.

Incorrect order:

if (score >= 50) {
  ...
} else if (score >= 90) {
  ...
}

A score of 95 would stop at the first condition and only
say that the student passed.

Correct order:

90
80
70
passingScore
everything else

==================================================
*/

// Write your code below
const studentName = "Clint";
const score = 40;
const passingScore = 50;

if (score >= 90) {
  console.log(`${studentName} received an A.`);
} else if (score >= 80) {
  console.log(`${studentName} received a B.`);
} else if (score >= 70) {
  console.log(`${studentName} received a C.`);
} else if (score >= passingScore) {
  console.log(`${studentName} passed.`);
} else {
  console.log(`${studentName} failed.`);
}

const hasPerfectScore = score === 100;
const needsRetry = score < passingScore;

console.log(`Perfect score: ${hasPerfectScore}`);
console.log(`Needs retry: ${needsRetry}`);
