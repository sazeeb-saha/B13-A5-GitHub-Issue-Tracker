**Questions**

- 1️⃣ What is the difference between var, let, and const?
- 2️⃣ What is the spread operator (...)?
- 3️⃣ What is the difference between map(), filter(), and forEach()?
- 4️⃣ What is an arrow function?
- 5️⃣ What are template literals?

1. What is the difference between var, let, and const? <br>
   Answer: <br>

- `var` – var is Function-scoped, can be re-declared and updated, hoisted with undefined.
- `let` – let is Block-scoped, can be updated but not re-declared, hoisted but in temporal dead zone.
- `const` – const is Block-scoped, cannot be re-declared or reassigned, hoisted but in temporal dead zone; objects/arrays can still be modified.

2. What is the spread operator (...)? <br>
   Answer:<br>

- The spread operator ... expands arrays, objects. It’s used to copy or merge arrays/objects and pass array values as function arguments. It creates a shallow copy, so nested objects remain referenced.

3. What is the difference between map(), filter(), and forEach()?<br>
   Answer <br>

- `map()` – Transforms each element and returns a new array. -`filter()` – Returns a new array with elements that pass a condition. -`forEach()` – Executes a function on each element but does not return a new array.
