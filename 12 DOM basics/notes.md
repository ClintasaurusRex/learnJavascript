# Lesson 11 Notes — Destructuring, Spread, and Rest

## Array Destructuring

Pull values out of an array:

```js
const [first, second] = array;
```

Instead of:

```js
const first = array[0];
const second = array[1];
```

Remember:

```text
Arrays match by POSITION.
```

---

## Skip an Array Value

Leave an empty position between commas:

```js
const [first, , third] = array;
```

This skips the second value.

---

## Object Destructuring

Pull properties out of an object:

```js
const { name, level } = player;
```

Instead of:

```js
const name = player.name;
const level = player.level;
```

Remember:

```text
Objects match by PROPERTY NAME.
```

---

## Array vs Object Destructuring

Array:

```js
const [first, second] = array;
```

Object:

```js
const { name, level } = object;
```

Quick reminder:

```text
[] → array destructuring

{} → object destructuring
```

---

## Rename Object Properties

Pattern:

```js
const { propertyName: newVariableName } = object;
```

Example:

```js
const { name: enemyName, health: enemyHealth } = enemy;
```

This means:

```text
name   → enemyName
health → enemyHealth
```

---

# Spread

Spread uses:

```js
...
```

Think:

```text
SPREAD = unpack
```

Spread takes existing values and places them somewhere new.

---

## Copy an Array

```js
const copiedArray = [...originalArray];
```

---

## Add to an Array Without `.push()`

```js
const expandedArray = [...originalArray, newItem];
```

Example:

```js
const expandedParty = [...originalParty, "Geralt"];
```

---

## Combine Arrays

```js
const combined = [...arrayOne, ...arrayTwo];
```

Example:

```js
const allWeapons = [...meleeWeapons, ...rangedWeapons];
```

---

## Copy an Object

```js
const copiedObject = {
  ...originalObject,
};
```

---

## Change a Property While Copying

```js
const updatedPlayer = {
  ...player,
  health: 65,
};
```

The original object is not changed.

---

## Add a Property While Copying

```js
const armedPlayer = {
  ...player,
  weapon: "Sword",
};
```

---

## Object Spread Order Matters

Later properties overwrite earlier properties.

```js
const updated = {
  ...player,
  health: 50,
};
```

The new `health` wins.

Remember:

```text
Later property = winner
```

---

# Rest

Rest also uses:

```js
...
```

Think:

```text
REST = collect
```

Rest collects multiple values into an array.

---

## Rest Parameter

```js
const functionName = (...values) => {
  console.log(values);
};
```

Call:

```js
functionName(10, 20, 30);
```

Then:

```js
values;
// [10, 20, 30]
```

---

## Rest with `.reduce()`

```js
const totalDamage = (...damageValues) => {
  return damageValues.reduce((total, damage) => total + damage, 0);
};
```

This function can accept any number of arguments.

---

## Normal Parameter + Rest

```js
const showParty = (leader, ...members) => {
  console.log(leader);
  console.log(members);
};
```

Call:

```js
showParty("Clint", "Arthur", "Ellie", "Geralt");
```

Result:

```js
leader;
// "Clint"

members;
// ["Arthur", "Ellie", "Geralt"]
```

---

## Rest with Array Destructuring

```js
const [firstItem, ...remainingItems] = inventory;
```

Example:

```js
const inventory = ["Sword", "Bow", "Potion", "Shield"];

const [primaryItem, ...remainingItems] = inventory;
```

Result:

```js
primaryItem;
// "Sword"

remainingItems;
// ["Bow", "Potion", "Shield"]
```

Think:

```text
Take the first item.

Collect the REST.
```

---

## Rest Must Be Last

Correct:

```js
const showParty = (leader, ...members) => {};
```

Incorrect:

```js
const showParty = (...members, leader) => {
};
```

The rest parameter must always be the final parameter.

---

# Spread vs Rest

They use the same syntax:

```js
...
```

But they do different jobs.

Spread:

```js
const copied = [...original];
```

means:

```text
Unpack the values.
```

Rest:

```js
const [first, ...others] = array;
```

means:

```text
Collect the remaining values.
```

Remember:

```text
SPREAD = UNPACK

REST = COLLECT
```

---

# Quick Mental Model

```text
DESTRUCTURING
Pull specific values out.

SPREAD
Unpack existing values into something new.

REST
Collect remaining values together.
```

---

# Quick Reference

```js
// ARRAY DESTRUCTURING
const [first, second] = array;

// SKIP AN ARRAY VALUE
const [first, , third] = array;

// OBJECT DESTRUCTURING
const { name, level } = player;

// RENAME OBJECT PROPERTIES
const { name: playerName, level: playerLevel } = player;

// COPY ARRAY
const copiedArray = [...array];

// ADD TO ARRAY
const expandedArray = [...array, newItem];

// COMBINE ARRAYS
const combinedArray = [...arrayOne, ...arrayTwo];

// COPY OBJECT
const copiedObject = {
  ...object,
};

// CHANGE OBJECT PROPERTY
const updatedObject = {
  ...object,
  health: 50,
};

// ADD OBJECT PROPERTY
const armedPlayer = {
  ...player,
  weapon: "Sword",
};

// REST PARAMETER
const functionName = (...values) => {};

// NORMAL PARAMETER + REST
const showParty = (leader, ...members) => {};

// REST WITH DESTRUCTURING
const [firstItem, ...remainingItems] = inventory;
```

---

# Common Mistakes

## Wrong Brackets

Array:

```js
const [first, second] = array;
```

Object:

```js
const { name, level } = object;
```

---

## Forgetting Array Position Matters

```js
const [first, second] = array;
```

`first` gets index `0`.

`second` gets index `1`.

---

## Forgetting Object Property Names Matter

```js
const { name } = player;
```

JavaScript searches for the property named:

```js
name;
```

---

## Forgetting Property Order with Spread

```js
const updated = {
  ...player,
  health: 50,
};
```

Later values overwrite earlier values.

---

## Putting a Parameter After Rest

Wrong:

```js
const example = (...items, lastItem) => {
};
```

Correct:

```js
const example = (firstItem, ...items) => {};
```

---

## Confusing Spread and Rest

Spread:

```js
const copy = [...original];
```

Rest:

```js
const [first, ...rest] = original;
```

Remember:

```text
Spread → unpack

Rest → collect
```

---

# Important Rules to Remember

1. Array destructuring matches by position.
2. Object destructuring matches by property name.
3. `...` can mean spread or rest depending on how it is being used.
4. Spread unpacks values.
5. Rest collects values.
6. Rest creates an array.
7. Rest parameters must come last.
8. Later object properties overwrite earlier properties.
9. Spread is useful for creating new arrays and objects without changing the originals.
10. Destructuring makes it easier to pull values out of arrays and objects.

---

# Completed Skills

- [x] Array destructuring
- [x] Skipping array values
- [x] Object destructuring
- [x] Renaming destructured properties
- [x] Array spread
- [x] Combining arrays
- [x] Object spread
- [x] Updating copied objects
- [x] Adding object properties
- [x] Rest parameters
- [x] Rest with `.reduce()`
- [x] Rest with destructuring
- [x] Normal parameters with rest
- [x] Spread vs rest
