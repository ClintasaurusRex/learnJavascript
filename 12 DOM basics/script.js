/*
==================================================
LESSON 12 — CHALLENGE 1: SELECT AN ELEMENT
==================================================

Your HTML already contains:

<h1 id="title">Dragon Battle</h1>

Use document.querySelector() to select the h1.

Store it in a variable called:

title

Then print title to the console.

REQUIREMENTS:

1. Use const.
2. Use document.querySelector().
3. Select the element using its ID.
4. Store it in title.
5. console.log(title).

EXPECTED SHAPE:

const title = document.querySelector("#title");

==================================================
*/

// Write your code below
const title = document.querySelector("#title");
console.log(title);
/*
==================================================
LESSON 12 — CHALLENGE 2: CHANGE TEXT
==================================================

You already have:

const title = document.querySelector("#title");

Use JavaScript to change the title text to:

The Dragon Has Awakened!

Then print the new text to the console.

EXPECTED PAGE:

The Dragon Has Awakened!

EXPECTED CONSOLE:

The Dragon Has Awakened!

REQUIREMENTS:

1. Reuse the title variable.
2. Use .textContent.
3. Do not change the text directly in index.html.
4. Print title.textContent.

PATTERN:

element.textContent = "New text";

==================================================
*/

// Write your code below

title.textContent = "The dragon has Awakened";
