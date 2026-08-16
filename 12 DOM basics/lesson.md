# Lesson 11 — Destructuring, Spread, and Rest

## Lesson Goal

In this lesson, you learned three modern JavaScript features:

- Destructuring
- Spread `...`
- Rest `...`

Even though spread and rest both use `...`, they do different jobs depending on where they are used.

---

# 1. Array Destructuring

Normally, you can access array values using indexes:

```js
const party = ["Clint", "Arthur", "Ellie"];

const firstPlayer = party[0];
const secondPlayer = party[1];
```

With array destructuring:

```js
const [firstPlayer, secondPlayer] = party;
```

Now:

```js
console.log(firstPlayer);
// Clint

console.log(secondPlayer);
// Arthur
```

The values are matched by position:

```text
["Clint", "Arthur", "Ellie"]
    ↓         ↓
 first     second
```

With arrays, the position of the variables matters.

---

# 2. Skipping Array Values

You can skip values during destructuring by leaving an empty position between commas.

```js
const party = ["Clint", "Arthur", "Ellie", "Geralt"];

const [first, , third] = party;
```

Now:

```js
console.log(first);
// Clint

console.log(third);
// Ellie
```

The second value, `"Arthur"`, was skipped.

The pattern is:

```js
const [first, , third] = array;
```

---

# 3. Object Destructuring

Objects can also be destructured.

Normally:

```js
const character = {
  name: "Geralt",
  level: 30,
  weapon: "Silver Sword",
};

const name = character.name;
const level = character.level;
const weapon = character.weapon;
```

With object destructuring:

```js
const { name, level, weapon } = character;
```

Now:

```js
console.log(name);
// Geralt

console.log(level);
// 30

console.log(weapon);
// Silver Sword
```

Unlike arrays, object destructuring matches values using the property names.

---

# 4. Array vs Object Destructuring

Arrays use square brackets:

```js
const [first, second] = array;
```

Objects use curly braces:

```js
const { name, level } = object;
```

The important difference is:

```text
Arrays  → position matters

Objects → property names matter
```

---

# 5. Renaming Object Properties

Sometimes you do not want the new variable to have the same name as the object property.

Example:

```js
const enemy = {
  name: "Dragon",
  health: 250,
  power: 90,
};
```

You can rename properties while destructuring:

```js
const { name: enemyName, health: enemyHealth } = enemy;
```

Now:

```js
console.log(enemyName);
// Dragon

console.log(enemyHealth);
// 250
```

The pattern is:

```js
propertyName: newVariableName;
```

So:

```js
name: enemyName;
```

means:

```text
Take the "name" property
and store it in a variable called "enemyName".
```

---

# 6. The Spread Operator

The spread operator uses three dots:

```js
...
```

Spread takes values from an existing array or object and places them into something new.

A simple array example:

```js
const originalParty = ["Clint", "Arthur", "Ellie"];

const expandedParty = [...originalParty, "Geralt"];
```

The new array becomes:

```js
["Clint", "Arthur", "Ellie", "Geralt"];
```

The original array remains unchanged.

---

# 7. Copying Arrays with Spread

You can create a new copy of an array:

```js
const original = ["Sword", "Bow", "Potion"];

const copy = [...original];
```

Now `copy` contains the same values:

```js
["Sword", "Bow", "Potion"];
```

But it is a new array.

---

# 8. Combining Arrays with Spread

Spread can combine multiple arrays.

```js
const meleeWeapons = ["Sword", "Axe"];
const rangedWeapons = ["Bow", "Crossbow"];

const allWeapons = [...meleeWeapons, ...rangedWeapons];
```

Result:

```js
["Sword", "Axe", "Bow", "Crossbow"];
```

You can think of:

```js
...meleeWeapons
```

as saying:

```text
Take every value from meleeWeapons
and place it here.
```

---

# 9. Spread with Objects

Spread also works with objects.

```js
const player = {
  name: "Geralt",
  level: 30,
  health: 100,
};
```

You can copy it:

```js
const copiedPlayer = {
  ...player,
};
```

You can also change a property while making the copy:

```js
const damagedPlayer = {
  ...player,
  health: 65,
};
```

The new object becomes:

```js
{
  name: "Geralt",
  level: 30,
  health: 65
}
```

The original object still has:

```js
health: 100;
```

---

# 10. Property Order Matters with Object Spread

When spreading objects, later properties overwrite earlier properties.

Example:

```js
const damagedPlayer = {
  ...player,
  health: 65,
};
```

JavaScript first copies:

```js
{
  name: "Geralt",
  level: 30,
  health: 100
}
```

Then:

```js
health: 65;
```

overwrites the copied health value.

The result is:

```js
{
  name: "Geralt",
  level: 30,
  health: 65
}
```

If you reversed the order:

```js
const damagedPlayer = {
  health: 65,
  ...player,
};
```

then the `health` value from `player` would overwrite `65`.

So remember:

```text
Later properties win.
```

---

# 11. Adding New Properties with Spread

You can also copy an object and add a brand-new property.

```js
const character = {
  name: "Arthur",
  level: 25,
};
```

Create a new object:

```js
const armedCharacter = {
  ...character,
  weapon: "Revolver",
};
```

Result:

```js
{
  name: "Arthur",
  level: 25,
  weapon: "Revolver"
}
```

The original `character` object remains unchanged.

---

# 12. Rest Parameters

Rest also uses:

```js
...
```

But rest does the opposite kind of job from spread.

Instead of spreading values out, rest collects values together.

Example:

```js
const totalDamage = (...damageValues) => {
  console.log(damageValues);
};
```

Call:

```js
totalDamage(10, 20, 15, 5);
```

Inside the function:

```js
damageValues;
```

becomes:

```js
[10, 20, 15, 5];
```

Rest collected all four arguments into one array.

---

# 13. Rest Parameters with `.reduce()`

Because a rest parameter creates an array, you can use array methods on it.

```js
const totalDamage = (...damageValues) => {
  return damageValues.reduce((accumulator, damage) => accumulator + damage, 0);
};
```

Call:

```js
const result = totalDamage(10, 20, 15, 5);

console.log(result);
```

Output:

```text
50
```

The function can accept any number of damage values.

---

# 14. Why Rest Parameters Are Useful

Without rest, you would have to decide how many parameters your function accepts:

```js
const totalDamage = (damage1, damage2, damage3, damage4) => {
  return damage1 + damage2 + damage3 + damage4;
};
```

That is limited to four values.

With rest:

```js
const totalDamage = (...damageValues) => {
  return damageValues.reduce((total, damage) => total + damage, 0);
};
```

You can call:

```js
totalDamage(10, 20);
```

or:

```js
totalDamage(10, 20, 30, 40);
```

or:

```js
totalDamage(10, 20, 30, 40, 50, 60, 70);
```

The rest parameter collects however many arguments are provided.

---

# 15. Rest with Array Destructuring

Rest can also be used while destructuring an array.

```js
const inventory = ["Sword", "Bow", "Potion", "Shield", "Torch"];
```

Then:

```js
const [primaryItem, ...remainingItems] = inventory;
```

JavaScript takes the first value:

```js
primaryItem;
// "Sword"
```

Then:

```js
...remainingItems
```

collects everything that is left:

```js
remainingItems;
// ["Bow", "Potion", "Shield", "Torch"]
```

You can picture it like this:

```text
["Sword", "Bow", "Potion", "Shield", "Torch"]
    ↓                ↓
primaryItem     remainingItems

"Sword"         ["Bow", "Potion", "Shield", "Torch"]
```

The important pattern is:

```js
const [firstItem, ...theRest] = array;
```

---

# 16. Normal Parameters with Rest Parameters

A function can have normal parameters followed by a rest parameter.

```js
const showParty = (leader, ...members) => {
  console.log(`Leader: ${leader}`);
  console.log(members);
};
```

Call:

```js
showParty("Clint", "Arthur", "Ellie", "Geralt");
```

The first argument goes into:

```js
leader;
```

So:

```js
leader;
// "Clint"
```

Everything remaining goes into:

```js
members;
```

So:

```js
members;
// ["Arthur", "Ellie", "Geralt"]
```

The pattern is:

```js
const functionName = (firstValue, ...remainingValues) => {};
```

---

# 17. Rest Must Be Last

A rest parameter must always be the final parameter.

Correct:

```js
const showParty = (leader, ...members) => {};
```

Incorrect:

```js
const showParty = (...members, leader) => {
};
```

JavaScript needs the rest parameter at the end because it means:

```text
Collect everything that remains.
```

There cannot be another parameter after "everything that remains."

---

# 18. Spread vs Rest

Spread and rest use exactly the same syntax:

```js
...
```

The difference depends on what the three dots are doing.

Spread:

```js
const copiedParty = [...party];
```

means:

```text
Take the values out of party
and place them here.
```

Rest:

```js
const [leader, ...members] = party;
```

means:

```text
Take the remaining values
and collect them into members.
```

A useful way to remember them:

```text
SPREAD = unpack

REST = collect
```

---

# Final Examples

## Array Destructuring

```js
const weapons = ["Sword", "Bow", "Axe"];

const [primaryWeapon, secondaryWeapon] = weapons;

console.log(primaryWeapon);
console.log(secondaryWeapon);
```

---

## Skipping Values

```js
const party = ["Clint", "Arthur", "Ellie", "Geralt"];

const [first, , third] = party;

console.log(first);
console.log(third);
```

---

## Object Destructuring

```js
const character = {
  name: "Geralt",
  level: 30,
  weapon: "Silver Sword",
};

const { name, level, weapon } = character;
```

---

## Renaming Properties

```js
const enemy = {
  name: "Dragon",
  health: 250,
  power: 90,
};

const { name: enemyName, health: enemyHealth } = enemy;
```

---

## Array Spread

```js
const originalParty = ["Clint", "Arthur", "Ellie"];

const expandedParty = [...originalParty, "Geralt"];
```

---

## Combine Arrays

```js
const meleeWeapons = ["Sword", "Axe"];
const rangedWeapons = ["Bow", "Crossbow"];

const allWeapons = [...meleeWeapons, ...rangedWeapons];
```

---

## Object Spread

```js
const player = {
  name: "Geralt",
  level: 30,
  health: 100,
};

const damagedPlayer = {
  ...player,
  health: 65,
};
```

---

## Rest Parameter

```js
const totalDamage = (...damageValues) => {
  return damageValues.reduce((accumulator, damage) => accumulator + damage, 0);
};

const damageResult = totalDamage(10, 20, 15, 5);

console.log(`Total damage: ${damageResult}`);
```

---

## Rest with Destructuring

```js
const inventory = ["Sword", "Bow", "Potion", "Shield", "Torch"];

const [primaryItem, ...remainingItems] = inventory;

console.log(primaryItem);
console.log(remainingItems);
```

---

## Normal Parameter + Rest

```js
const showParty = (leader, ...members) => {
  console.log(`Leader: ${leader}`);
  console.log(members);
};

showParty("Clint", "Arthur", "Ellie", "Geralt");
```

---

# Lesson Summary

You learned how to:

- Destructure arrays
- Skip values during array destructuring
- Destructure objects
- Rename object properties while destructuring
- Copy arrays with spread
- Add values to copied arrays
- Combine multiple arrays
- Copy objects with spread
- Override object properties
- Add new object properties
- Use rest parameters
- Accept any number of function arguments
- Use `.reduce()` with rest parameters
- Use rest during array destructuring
- Combine normal parameters with rest
- Understand why rest must be the final parameter
- Understand the difference between spread and rest
