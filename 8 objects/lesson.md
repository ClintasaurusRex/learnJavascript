# Lesson 8 — Objects

## Lesson Goal

In this lesson, you learned how to group related data and behavior together using objects.

You learned how to:

- Create objects
- Store properties
- Read properties
- Change properties
- Add new properties
- Use dot notation
- Use bracket notation
- Add methods
- Use `this`
- Store arrays inside objects
- Store objects inside arrays
- Loop through object data
- Build a complete character object

---

# 1. What Is an Object?

An object stores related information about one thing.

```js
const player = {
  name: "Clint",
  level: 15,
  health: 100,
  hasWeapon: true,
};
```

This keeps related values together.

Instead of:

```js
const playerName = "Clint";
const playerLevel = 15;
const playerHealth = 100;
```

you can use:

```js
const player = {
  name: "Clint",
  level: 15,
  health: 100,
};
```

---

# 2. Properties

Each value inside an object is stored under a property name.

```js
const player = {
  name: "Clint",
  level: 15,
};
```

Properties:

```text
name
level
```

Values:

```text
"Clint"
15
```

---

# 3. Dot Notation

Use dot notation to access a property:

```js
player.name;
player.level;
player.health;
```

Example:

```js
console.log(player.name);
```

Output:

```text
Clint
```

---

# 4. Updating Properties

Properties can be changed:

```js
player.level = 16;
player.health = 75;
```

Now:

```js
console.log(player.level);
```

Output:

```text
16
```

---

# 5. Adding New Properties

You can add a property after creating the object:

```js
player.weapon = "Sword";
```

Now the object has a new property named `weapon`.

```js
console.log(player.weapon);
```

Output:

```text
Sword
```

---

# 6. Bracket Notation

Bracket notation can also access properties:

```js
player["weapon"];
```

This is equivalent to:

```js
player.weapon;
```

For simple property names, dot notation is usually easier to read.

---

# 7. Methods

A function stored inside an object is called a method.

```js
const player = {
  name: "Clint",

  describe() {
    console.log(`Player: ${this.name}`);
  },
};
```

Call it with:

```js
player.describe();
```

---

# 8. The `this` Keyword

Inside an object method, `this` refers to the object that owns the method.

```js
const player = {
  name: "Clint",

  describe() {
    console.log(this.name);
  },
};
```

Here:

```js
this.name;
```

means:

```js
player.name;
```

---

# 9. Adding a Method Later

A method can also be added after the object is created.

```js
player.describe = function () {
  console.log(`${this.name} is level ${this.level}.`);
};
```

Then:

```js
player.describe();
```

---

# 10. Arrays Inside Objects

An object property can contain an array.

```js
const character = {
  name: "Clint",
  inventory: ["Sword", "Bow", "Potion"],
};
```

Access the full array:

```js
character.inventory;
```

Access one item:

```js
character.inventory[0];
```

Output:

```text
Sword
```

---

# 11. Array Methods Inside Objects

You can use normal array methods:

```js
character.inventory.push("Shield");
```

Get the final item:

```js
character.inventory[character.inventory.length - 1];
```

Get the size:

```js
character.inventory.length;
```

---

# 12. Objects Inside Arrays

Arrays can store objects.

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
  {
    name: "Dragon",
    health: 250,
  },
];
```

Access the first object:

```js
enemies[0];
```

Access its name:

```js
enemies[0].name;
```

---

# 13. Looping Through Objects in an Array

```js
for (let i = 0; i < enemies.length; i++) {
  console.log(enemies[i].name);
}
```

A cleaner version:

```js
for (let i = 0; i < enemies.length; i++) {
  const currentEnemy = enemies[i];

  console.log(`${currentEnemy.name} has ${currentEnemy.health} health.`);
}
```

---

# 14. Duplicate Property Names

An object should not repeat the same property names.

Incorrect:

```js
const enemy = {
  name: "Goblin",
  health: 30,
  name: "Dragon",
  health: 250,
};
```

The later values overwrite the earlier ones.

This effectively becomes:

```js
const enemy = {
  name: "Dragon",
  health: 250,
};
```

Use separate objects instead.

---

# 15. Methods That Change Object State

Methods can change object properties.

```js
const character = {
  health: 100,

  takeDamage(damage) {
    this.health -= damage;
  },
};
```

Call:

```js
character.takeDamage(35);
```

Now:

```text
health = 65
```

---

# 16. Preventing Health from Going Below Zero

```js
if (this.health <= 0) {
  this.health = 0;
}
```

This prevents negative health values.

---

# 17. Updating Multiple Properties

A method can change more than one property.

```js
if (this.health <= 0) {
  this.health = 0;
  this.isAlive = false;
}
```

Now the object keeps its state consistent.

If health reaches zero:

```text
health = 0
isAlive = false
```

---

# 18. Complete Character Object

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

# 19. Calling the Method

```js
character.takeDamage(35);

console.log(`${character.name} has ${character.health} health.`);
console.log(`Alive: ${character.isAlive}`);
```

Output:

```text
Clint has 65 health.
Alive: true
```

Call again:

```js
character.takeDamage(100);
```

Output:

```text
Clint has 0 health.
Alive: false
```

---

# 20. Looping Through an Object's Array

```js
for (let i = 0; i < character.inventory.length; i++) {
  const currentItem = character.inventory[i];

  console.log(`Item ${i + 1}: ${currentItem}`);
}
```

Output:

```text
Item 1: Sword
Item 2: Bow
Item 3: Potion
```

---

# Lesson Summary

You learned how to:

- Create objects
- Store related information together
- Access properties
- Update properties
- Add new properties
- Use dot notation
- Use bracket notation
- Add methods
- Use `this`
- Store arrays inside objects
- Store objects inside arrays
- Loop through nested data
- Change object state with methods
- Build a reusable character object
