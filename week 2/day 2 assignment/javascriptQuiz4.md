# JavaScript Basic Level Quiz 4

## 1.What are anonymous functions in JavaScript?

Source(GFG)
Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

Syntax:
The below enlightened syntax illustrates the declaration of anonymous function using normal declaration:

```javascript
function() {
    // Function Body
 }

//arrow function implementation
(()=>{

//function body

})();
```

## 2.Explain strict comparison and Abstract comparison in javascript?

JavaScript provides three different value-comparison operations:

- === — IsStrictlyEqual ("strict equality", "identity", "triple equals")
- == — IsLooselyEqual ("loose equality", "double equals")

Which operation you choose depends on what sort of comparison you are looking to perform.

- double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
- triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.

```javascript
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true
console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

## 3.Difference b/w arrow functions and regular functions?

- Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions.
- regular JavaScript functions and arrow functions work in a similar manner, there are certain differences between them.

- The arrow function example above allows a developer to accomplish the same result with fewer lines of code and approximately half the typing.

- Curly brackets aren’t required if only one expression is present.

** example of the functions **

```javascript
// (param1, param2, paramN) => expression
// ES5
var add = function (x, y) {
  return x + y;
};
// ES6
let add = (x, y) => {
  return x + y;
};
```

## 4.What is Hoisting in JavaScript?

- Source(MDN) JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
- One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

  -

  ```javascript
  catName("Tiger");
  function catName(name) {
    console.log("My cat's name is " + name);
  }
  /*
    The result of the code above is: "My cat's name is Tiger"
    */
  ```

## 5.JavaScript is a garbage collected programming language, explain how?

JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).

Regardless of the programming language, the memory life cycle is pretty much always the same:

- Allocate the memory you need
  In order to not bother the programmer with allocations, JavaScript will automatically allocate memory when values are initially declared.

  ```javascript
  const n = 123; // allocates memory for a number
  const s = "azerty"; // allocates memory for a string
  ```

- Use the allocated memory (read, write)
  Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.

- Release the allocated memory when it is not needed anymore
  - The majority of memory management issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed.
  - Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.
  - Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

## 6. Explain Shallow copy vs Deep copy in Javascript?

### Shallow Copy:

- When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created.
- a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one.
- This means both the old and new reference variable point to the same object in memory. As a result if the state of the object changes through any of the reference variables it is reflected for both.

```javascript
var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

console.log("Employee=> ", employee);
var newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.
```

### Deep copy:

- deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
- In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.

```javascript
var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

## what is Object.freeze()

- The Object.freeze() method freezes an object.
- A frozen object can no longer be changed
- freezing an object also prevents its prototype from being changed.
- freeze() returns the same object that was passed in.

```javascript
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// output: 42
```

## programs

```javascript
var numberArray = [];
// this function gives the random number in the range of min and max
function randomGenarator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const number1 = randomGenarator(-100, 0);
const number2 = randomGenarator(800, 900);

numberArray.push(number1);
numberArray.push(number2);

let i = Math.floor(Math.random() * 2);

console.log(numberArray[i]);
```
