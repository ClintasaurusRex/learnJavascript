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

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

/*
==================================================
LESSON 4 — CHALLENGE 3: SUM THE NUMBERS
==================================================

Use a for loop to add all the numbers from 1 through 10.

The final result should be:

55

STEPS:

1. Create a variable named total with the value 0.
2. Create a for loop that counts from 1 through 10.
3. During every loop, add the current number to total.
4. After the loop, print:

Total: 55

REQUIREMENTS:

1. Use let for total because it changes.
2. Use a for loop.
3. Start the loop counter at 1.
4. Stop after 10.
5. Add the loop counter to total inside the loop.
6. Print the total after the loop finishes.

BONUS:

Inside the loop, print the running total.

Your output would look similar to:

After adding 1, total is 1
After adding 2, total is 3
After adding 3, total is 6

Continue until 10.

==================================================
*/

// Write your code below

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//   count += i;
// }
// console.log(count);

/*
==================================================
LESSON 4 — CHALLENGE 4: MULTIPLICATION TABLE
==================================================

Create a variable named number with the value 5.

Use a for loop to print the multiplication table
for that number from 1 through 10.

Expected output:

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

STEPS:

1. Create a variable named number.
2. Create a loop that counts from 1 through 10.
3. Multiply number by the loop counter.
4. Store the answer in a variable named result.
5. Print each calculation using a template literal.

REQUIREMENTS:

1. Use const for number.
2. Use a for loop.
3. Use multiplication with *.
4. Create result inside the loop.
5. Use a template literal.

BONUS:

Change number to another value and confirm that the
entire multiplication table changes.

==================================================
*/

// Write your code below

// const value = 2;

// for (let i = 1; i <= 10; i++) {
//   const result = value * i;
//   console.log(`${value} x ${i} = ${result}`);
// }

/*
==================================================
LESSON 4 — CHALLENGE 5: PRINT EVEN NUMBERS
==================================================

Use a for loop to check every number from 1 through 20.

Print only the even numbers.

Expected output:

2
4
6
8
10
12
14
16
18
20

A number is even when dividing it by 2 leaves a
remainder of 0.

Example:

4 % 2 === 0

REQUIREMENTS:

1. Use a for loop.
2. Count from 1 through 20.
3. Use an if statement inside the loop.
4. Use the remainder operator: %
5. Print only numbers where number % 2 === 0.

BONUS:

Print the output like this:

2 is even.
4 is even.
6 is even.

==================================================
*/

// Write your code below

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even.`);
//   }
// }

/*
==================================================
LESSON 4 — CHALLENGE 6: FIZZBUZZ
==================================================

Use a for loop to count from 1 through 30.

For each number:

- If the number is divisible by both 3 and 5,
  print:

FizzBuzz

- Otherwise, if the number is divisible by 3,
  print:

Fizz

- Otherwise, if the number is divisible by 5,
  print:

Buzz

- Otherwise, print the number.

EXAMPLE OUTPUT:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

REQUIREMENTS:

1. Use a for loop.
2. Count from 1 through 30.
3. Use if, else if, and else.
4. Use the remainder operator: %
5. Check divisibility by both 3 and 5 first.
6. Print the number in the final else block.

IMPORTANT:

The FizzBuzz condition must come first.

If you check divisibility by 3 first, the number 15
will print Fizz and JavaScript will stop checking.

HINT:

A number is divisible by both 3 and 5 when:

i % 3 === 0 && i % 5 === 0

==================================================
*/

// Write your code below

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
