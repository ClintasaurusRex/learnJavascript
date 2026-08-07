# Lesson 6 Notes — Strings and String Methods

## Key Idea

Strings are text values that can be inspected and processed one character at a time.

```js
const word = "JavaScript";
```

---

# String Quick Reference

```js
const word = "Dragon";

word.length;
word[0];
word[word.length - 1];
word.toUpperCase();
word.toLowerCase();
```

---

# `.length`

Use `.length` to count characters.

```js
const word = "Dragon";

console.log(word.length);
```

Output:

```text
6
```

Spaces and punctuation also count.

---

# Indexes

Indexes begin at `0`.

```text
D  r  a  g  o  n
0  1  2  3  4  5
```

Access a character:

```js
word[0];
word[2];
word[5];
```

---

# First Character

```js
const firstCharacter = word[0];
```

---

# Last Character

```js
const lastCharacter = word[word.length - 1];
```

Why subtract one?

```text
Length: 6
Final index: 5
```

---

# Changing Case

Uppercase:

```js
const uppercaseWord = word.toUpperCase();
```

Lowercase:

```js
const lowercaseWord = word.toLowerCase();
```

These return new strings.

They do not change the original variable.

---

# String Immutability

Individual characters cannot be replaced directly.

This does not change the string:

```js
const word = "Dragon";

word[0] = "B";
```

To create changed text, build or return a new string.

---

# Forward String Loop

```js
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

Use:

```js
i < word.length;
```

not:

```js
i <= word.length;
```

The length is one greater than the final valid index.

---

# Character and Index Output

```js
for (let i = 0; i < word.length; i++) {
  console.log(`Index ${i}: ${word[i]}`);
}
```

---

# Current Character Pattern

```js
for (let i = 0; i < word.length; i++) {
  const currentCharacter = word[i];

  console.log(currentCharacter);
}
```

This makes conditions easier to read.

---

# Counting Matches

Start a counter before the loop:

```js
let count = 0;
```

Increase it when a match is found:

```js
count++;
```

---

# Vowel Check

```js
if (
  currentCharacter === "a" ||
  currentCharacter === "e" ||
  currentCharacter === "i" ||
  currentCharacter === "o" ||
  currentCharacter === "u"
) {
  vowelCount++;
}
```

---

# Case-Insensitive Checks

Convert the string before checking:

```js
const lowercaseWord = word.toLowerCase();
```

Then loop through the lowercase version:

```js
const currentCharacter = lowercaseWord[i];
```

This handles uppercase and lowercase input.

---

# Count Vowels Pattern

```js
const word = "JavaScript";
const lowercaseWord = word.toLowerCase();
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

console.log(vowelCount);
```

---

# Backward String Loop

```js
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}
```

Pattern:

```text
Start at final index
Continue through index 0
Subtract 1 each time
```

---

# Reversing a String

```js
const word = "Dragon";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
```

Result:

```text
nogarD
```

---

# String Accumulator

An empty string can collect characters:

```js
let reversedWord = "";
```

Add characters:

```js
reversedWord += word[i];
```

Equivalent to:

```js
reversedWord = reversedWord + word[i];
```

This is similar to using a numeric accumulator, except it collects text.

---

# Comparing Strings

```js
const firstWord = "level";
const secondWord = "level";

console.log(firstWord === secondWord);
```

Output:

```text
true
```

String comparisons are case-sensitive:

```js
console.log("Level" === "level");
```

Output:

```text
false
```

Convert both values to the same case when capitalization should not matter.

---

# Palindrome Pattern

```js
function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  let reversedWord = "";

  for (let i = lowercaseWord.length - 1; i >= 0; i--) {
    reversedWord += lowercaseWord[i];
  }

  return lowercaseWord === reversedWord;
}
```

---

# Returning Booleans

A comparison already produces a boolean.

Longer version:

```js
const isMatch = lowercaseWord === reversedWord;

return isMatch;
```

Direct version:

```js
return lowercaseWord === reversedWord;
```

Both return either:

```js
true;
```

or:

```js
false;
```

---

# Common Mistakes

## Starting at Index `1`

Incorrect:

```js
for (let i = 1; i < word.length; i++) {
  console.log(word[i]);
}
```

This skips the first character.

Correct:

```js
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

---

## Using `<=`

Incorrect:

```js
for (let i = 0; i <= word.length; i++) {
  console.log(word[i]);
}
```

The final loop tries to access an index that does not exist.

Correct:

```js
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

---

## Forgetting `- 1` for the Final Index

Incorrect:

```js
const lastCharacter = word[word.length];
```

Correct:

```js
const lastCharacter = word[word.length - 1];
```

---

## Not Declaring the Current Character

Incorrect:

```js
currentCharacter = word[i];
```

Correct:

```js
const currentCharacter = word[i];
```

Always declare new variables with `const` or `let`.

---

## Converting to Lowercase but Reading the Original

Incorrect:

```js
const lowercaseWord = word.toLowerCase();

const currentCharacter = word[i];
```

Correct:

```js
const currentCharacter = lowercaseWord[i];
```

---

## Using `const` for a Changing String

Incorrect:

```js
const reversedWord = "";

reversedWord += word[i];
```

Correct:

```js
let reversedWord = "";
```

The value changes during the loop.

---

## Forward Loop When Reversing

A forward loop keeps the same order:

```js
for (let i = 0; i < word.length; i++) {
  reversedWord += word[i];
}
```

Use a backward loop:

```js
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
```

---

## Returning String Booleans

Incorrect:

```js
if (lowercaseWord === reversedWord) {
  return "true";
}

return "false";
```

Those are strings.

Return the comparison:

```js
return lowercaseWord === reversedWord;
```

---

# Debugging Checklist

When string code does not work:

1. Print the string.
2. Print its `.length`.
3. Print the current index.
4. Print the current character.
5. Check whether indexing begins at `0`.
6. Check whether the loop uses `<`.
7. Check whether the final index uses `length - 1`.
8. Check whether case differences matter.
9. Confirm new variables use `const` or `let`.
10. Print the accumulator during the loop.

Example:

```js
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];

  console.log(`Index: ${i}`);
  console.log(`Character: ${word[i]}`);
  console.log(`Reversed so far: ${reversedWord}`);
}
```

---

# Problem-Solving Checklist

When solving a string challenge:

1. Decide whether capitalization matters.
2. Convert the string when needed.
3. Decide whether to loop forward or backward.
4. Start at the correct index.
5. Use `.length` rather than hard-coding a number.
6. Store the current character when useful.
7. Create a counter for counting problems.
8. Create an empty string for building text.
9. Perform the final comparison after the loop.
10. Return the result when using a function.

---

# Completed Skills

- [x] I can use `.length`.
- [x] I understand zero-based indexes.
- [x] I can access the first character.
- [x] I can access the last character.
- [x] I can use `.toUpperCase()`.
- [x] I can use `.toLowerCase()`.
- [x] I can loop through a string.
- [x] I can print characters with their indexes.
- [x] I can count matching characters.
- [x] I can count vowels.
- [x] I can perform case-insensitive checks.
- [x] I can loop backward through a string.
- [x] I can reverse a string.
- [x] I can compare strings.
- [x] I can build a palindrome function.
- [x] I can return a boolean comparison.

---

# Quick Reference

```js
const word = "Dragon";

// Length
word.length;

// First character
word[0];

// Last character
word[word.length - 1];

// Uppercase
word.toUpperCase();

// Lowercase
word.toLowerCase();

// Forward loop
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// Backward loop
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

// Build a reversed string
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

// Compare strings
const isMatch = word === reversedWord;
```

---

# Final Solution

```js
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
```

---

# Next Lesson

**Lesson 7: Arrays**

Topics:

- Creating arrays
- Array indexes
- Reading and changing values
- `.length`
- Adding and removing items
- Looping through arrays
- Finding totals
- Finding the largest value
- Searching arrays
