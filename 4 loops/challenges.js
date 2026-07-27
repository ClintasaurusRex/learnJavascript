/*
==================================================
LESSON 4 — CHALLENGE 1: COUNT FORWARD
==================================================

Use a for loop to print the numbers 1 through 10.

Expected output:

1
2
3
4
5
6
7
8
9
10

REQUIREMENTS:

1. Use a for loop.
2. Start the counter at 1.
3. Continue while the counter is less than or equal to 10.
4. Increase the counter by 1 after every loop.
5. Use console.log() inside the loop.

BONUS:

After the loop finishes, print:

Counting complete.

==================================================
*/

// Write your code below
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/*
==================================================
LESSON 4 — CHALLENGE 2: COUNT BACKWARD
==================================================

Use a for loop to count backward from 10 to 1.

Expected output:

10
9
8
7
6
5
4
3
2
1
Blast off!

REQUIREMENTS:

1. Use a for loop.
2. Start the counter at 10.
3. Continue while the counter is greater than or
   equal to 1.
4. Decrease the counter by 1 after every loop.
5. Print "Blast off!" after the loop finishes.

HINT:

To subtract 1 from a variable, use:

number--

This is a shorter version of:

number = number - 1

==================================================
*/

// Write your code below

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");
