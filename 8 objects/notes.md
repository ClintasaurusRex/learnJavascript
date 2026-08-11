# Lesson 8 Notes — Objects

## Key Idea

Objects group related data and behavior together.

```js
const player = {
  name: "Clint",
  level: 15,
  health: 100,
};
```

---

# Object Syntax

```js
const objectName = {
  propertyOne: value,
  propertyTwo: value,
};
```

Example:

```js
const player = {
  name: "Clint",
  level: 15,
};
```

---

# Access a Property

```js
player.name;
```

```js
player.level;
```

---

# Change a Property

```js
player.health = 75;
```

---

# Add a Property

```js
player.weapon = "Sword";
```

---

# Dot Notation

```js
player.name;
```

Usually preferred for simple property names.

---

# Bracket Notation

```js
player["name"];
```

Equivalent to:

```js
player.name;
```

---

# Methods

A method is a function stored inside an object.

```js
const player = {
  name: "Clint",

  describe() {
    console.log(this.name);
  },
};
```

Call it:

```js
player.describe();
```

---

# `this`

Inside an object method:

```js
this.name;
```

refers to the current object's `name` property.

Example:

```js
describe() {
  console.log(`${this.name} is level ${this.level}.`);
}
```

---

# Add a Method Later

```js
player.describe = function () {
  console.log(`${this.name} is level ${this.level}.`);
};
```

---

# Arrays Inside Objects

```js
const player = {
  inventory: ["Sword", "Bow", "Potion"],
};
```

First item:

```js
player.inventory[0];
```

Last item:

```js
player.inventory[player.inventory.length - 1];
```

Size:

```js
player.inventory.length;
```

Add item:

```js
player.inventory.push("Shield");
```

---

# Objects Inside Arrays

```js
const enemies = [
  {
    name: "Goblin",
    health: 30,
  },
  {
    name: "Orc",
    health: 80,
  },
];
```

Access first enemy:

```js
enemies[0];
```

Access its name:

```js
enemies[0].name;
```

---

# Loop Through Object Arrays

```js
for (let i = 0; i < enemies.length; i++) {
  const currentEnemy = enemies[i];

  console.log(currentEnemy.name);
}
```

---

# Object Methods Can Change Properties

```js
const character = {
  health: 100,

  takeDamage(damage) {
    this.health -= damage;
  },
};
```

---

# Prevent Negative Health

```js
if (this.health <= 0) {
  this.health = 0;
}
```

---

# Update Multiple Properties

```js
if (this.health <= 0) {
  this.health = 0;
  this.isAlive = false;
}
```

---

# Complete Pattern

```js
const character = {
  name: "Clint",
  level: 20,
  health: 100,
  isAlive: true,
  inventory: ["Sword", "Bow", "Potion"],

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }

    return this.health;
  },
};
```

---

# Loop Through Inventory

```js
for (let i = 0; i < character.inventory.length; i++) {
  const currentItem = character.inventory[i];

  console.log(`Item ${i + 1}: ${currentItem}`);
}
```

---

# Common Mistakes

## Wrong property in output

Incorrect:

```js
console.log(`Level: ${player.name}`);
```

Correct:

```js
console.log(`Level: ${player.level}`);
```

---

## Duplicate property names

Incorrect:

```js
const enemy = {
  name: "Goblin",
  name: "Dragon",
};
```

The second value overwrites the first.

---

## Forgetting `this`

Inside a method, use:

```js
this.health;
```

rather than relying on an outside variable.

---

## Performing Math Without Saving It

Incorrect:

```js
damage - this.health;
```

This calculates a value and throws it away.

Correct:

```js
this.health -= damage;
```

---

## Recreating an Object When You Should Reuse It

If the object already exists, update it:

```js
player.health = 75;
```

Do not redeclare:

```js
const player = {};
```

again in the same scope.

---

# Problem-Solving Checklist

When working with objects:

1. Identify the thing the object represents.
2. List the properties that belong to it.
3. Use clear property names.
4. Use dot notation for simple properties.
5. Use methods for actions the object can perform.
6. Use `this` inside methods.
7. Store related arrays inside the object.
8. Loop through nested arrays normally.
9. Use separate objects when representing separate things.
10. Keep object state consistent when properties depend on each other.

---

# Completed Skills

- [x] I can create an object.
- [x] I can access properties.
- [x] I can update properties.
- [x] I can add properties.
- [x] I understand dot notation.
- [x] I understand bracket notation.
- [x] I can create object methods.
- [x] I can use `this`.
- [x] I can store arrays inside objects.
- [x] I can store objects inside arrays.
- [x] I can loop through arrays of objects.
- [x] I can change object state with methods.
- [x] I can build a complete character object.

---

# Quick Reference

```js
const player = {
  name: "Clint",
  health: 100,
  inventory: ["Sword"],

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.health = 0;
    }
  },
};

// Read
player.name;

// Change
player.health = 75;

// Add
player.level = 20;

// Add to nested array
player.inventory.push("Bow");

// Call method
player.takeDamage(25);

// Loop nested array
for (let i = 0; i < player.inventory.length; i++) {
  console.log(player.inventory[i]);
}
```

---

# Final Solution

```js
const character = {
  name: "Clint",
  level: 20,
  health: 100,
  isAlive: true,
  inventory: ["Sword", "Bow", "Potion"],

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }

    return this.health;
  },
};

character.takeDamage(35);

console.log(`${character.name} has ${character.health} health.`);
console.log(`Alive: ${character.isAlive}`);

character.takeDamage(100);

console.log(`${character.name} has ${character.health} health.`);
console.log(`Alive: ${character.isAlive}`);

for (let i = 0; i < character.inventory.length; i++) {
  const currentItem = character.inventory[i];

  console.log(`Item ${i + 1}: ${currentItem}`);
}
```

---

# Next Lesson

**Lesson 9: Array Methods**

Topics:

- `.forEach()`
- `.map()`
- `.filter()`
- `.find()`
- `.includes()`
- `.reduce()`
- Turning manual loops into cleaner array logic
