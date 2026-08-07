function spacer() {
  console.log("=".repeat(50));
}
/*
==================================================
LESSON 6 — CHALLENGE 1: INSPECT A WORD
==================================================

Create a variable named word with the value:

"JavaScript"

Print the following information:

Word: JavaScript
Length: 10
First character: J
Fourth character: a
Last character: t

REQUIREMENTS:

1. Use const for word.
2. Use a template literal for each output.
3. Use .length to get the string length.
4. Use [0] to access the first character.
5. Use [3] to access the fourth character.
6. Use word.length - 1 to access the final character.
7. Do not type the answers J, a, or t directly
   inside the output.

REMEMBER:

Indexes start at 0.

J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9

The fourth character is at index 3.

==================================================
*/

// Write your code below

const word = "JavaScript";
const length = word.length;
const firstChar = word[0];
const fourthChar = word[3];
const lastChar = word[word.length - 1];

console.log(`Word: ${word}`);
console.log(`Length: ${length}`);
console.log(`First character: ${firstChar}`);
console.log(`Fourth character: ${fourthChar}`);
console.log(`Last character: ${lastChar}`);
spacer();
/*
==================================================
LESSON 6 — CHALLENGE 2: USERNAME FORMATTER
==================================================

Create a variable named username with the value:

"DragonRider"

Create these variables:

- uppercaseUsername
- lowercaseUsername

Use string methods to create both values.

Print:

Original: DragonRider
Uppercase: DRAGONRIDER
Lowercase: dragonrider

REQUIREMENTS:

1. Use const for every variable.
2. Use .toUpperCase().
3. Use .toLowerCase().
4. Use template literals.
5. Do not type the converted usernames manually.

BONUS:

Print the number of characters in username:

Characters: 11

==================================================
*/

// Write your code below

const username = "DragonRider";
const uppercaseUsername = username.toUpperCase();
const lowercaseUsername = username.toLowerCase();
console.log(`Original: ${username}`);
console.log(`Uppercase: ${uppercaseUsername}`);
console.log(`Lowercase: ${lowercaseUsername}`);
console.log(`Characters: ${username.length}`);
spacer();

/*
==================================================
LESSON 6 — CHALLENGE 3: PRINT EVERY CHARACTER
==================================================

Create a variable named word with the value:

"Dragon"

Use a for loop to print every character on its
own line.

EXPECTED OUTPUT:

D
r
a
g
o
n

REQUIREMENTS:

1. Use const for word.
2. Use a for loop.
3. Start the loop counter at 0.
4. Continue while i is less than word.length.
5. Use word[i] to access the current character.
6. Use console.log() inside the loop.

BONUS:

Print each character with its index:

Index 0: D
Index 1: r
Index 2: a
Index 3: g
Index 4: o
Index 5: n

==================================================
*/

// Write your code below
const loopWord = "Dragon";
for (let i = 0; i < loopWord.length; i++) {
  console.log(`Index ${i}: ${loopWord[i]}`);
}
spacer();
/*
==================================================
LESSON 6 — CHALLENGE 4: COUNT THE VOWELS
==================================================

Create a variable named word with the value:

"JavaScript"

Create a variable named vowelCount starting at 0.

Loop through every character in the word.

If the current character is:

a, e, i, o, or u

increase vowelCount by 1.

After the loop, print:

Vowels: 3

REQUIREMENTS:

1. Use const for word.
2. Use let for vowelCount.
3. Start the loop counter at 0.
4. Loop while i is less than word.length.
5. Store the current character in a variable named
   currentCharacter.
6. Use || to check all five vowels.
7. Increase vowelCount using vowelCount++.
8. Print the result after the loop.

BONUS:

Make the solution work with uppercase letters too.

Hint:

Convert the word to lowercase before checking:

const lowercaseWord = word.toLowerCase();

==================================================
*/

// Write your code below

const newWord = "JavaScript";
const lowercaseWord = newWord.toLowerCase();
let vowelCount = 0;

for (let i = 0; i < lowercaseWord.length; i++) {
  const currentCharacter = lowercaseWord[i];
  if (
    currentCharacter === "a" ||
    currentCharacter === "e" ||
    currentCharacter === "i" ||
    currentCharacter === "o" ||
    currentCharacter === "u"
  ) {
    vowelCount++;
  }
}
console.log(`Vowels: ${vowelCount}`);
spacer();
/*
==================================================
LESSON 6 — CHALLENGE 5: REVERSE A STRING
==================================================

Create a variable named word with the value:

"Dragon"

Create an empty string named reversedWord.

Loop backward through word, starting at the final
character.

During each loop, add the current character to
reversedWord.

After the loop, print:

Original: Dragon
Reversed: nogarD

STEPS:

1. Create word with the value "Dragon".
2. Create reversedWord with the value "".
3. Start the loop at word.length - 1.
4. Continue while i is greater than or equal to 0.
5. Decrease i after every loop.
6. Add word[i] to reversedWord.
7. Print both strings after the loop.

REQUIREMENTS:

1. Use const for word.
2. Use let for reversedWord because it changes.
3. Use a backward for loop.
4. Use += to add each character.
5. Use template literals for the output.

HINT:

reversedWord += word[i];

This is the same as:

reversedWord = reversedWord + word[i];

==================================================
*/

// Write your code below

const thisWord = "Dragon";
let reversedWord = "";

for (let i = thisWord.length - 1; i >= 0; i--) {
  reversedWord += thisWord[i];
}
console.log(`Original: ${thisWord}`);
console.log(`Reversed: ${reversedWord}`);
spacer();
/*
==================================================
LESSON 6 — FINAL CHALLENGE: PALINDROME CHECKER
==================================================

Create a function named isPalindrome.

It should accept one parameter:

- word

Inside the function:

1. Convert word to lowercase.
2. Create an empty string named reversedWord.
3. Loop backward through the lowercase word.
4. Add each character to reversedWord.
5. Compare reversedWord with the lowercase word.
6. Return the comparison result.

The function should return true when the word is a
palindrome and false when it is not.

TESTS:

const resultOne = isPalindrome("Racecar");
const resultTwo = isPalindrome("Dragon");
const resultThree = isPalindrome("Level");

Print all three results.

EXPECTED OUTPUT:

Racecar: true
Dragon: false
Level: true

REQUIREMENTS:

1. Create a function named isPalindrome.
2. Give it one parameter named word.
3. Use .toLowerCase().
4. Use a backward for loop.
5. Use let for reversedWord.
6. Use === to compare the strings.
7. Return a boolean.
8. Print the results outside the function.

IMPORTANT:

Do not return the strings "true" or "false".

Return the boolean result of the comparison:

return reversedWord === lowercaseWord;

==================================================
*/

// Write your code below

function isPalindrome(word) {
  const loweredWord = word.toLowerCase();
  let reversedWord = "";

  for (let i = loweredWord.length - 1; i >= 0; i--) {
    const currentCharacter = loweredWord[i];
    reversedWord += currentCharacter;
  }
  return loweredWord === reversedWord;
}

console.log(`Racecar: ${isPalindrome("Racecar")}`);
console.log(`Dragon: ${isPalindrome("Dragon")}`);
console.log(`Level: ${isPalindrome("Level")}`);
