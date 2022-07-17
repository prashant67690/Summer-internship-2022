# JavaScript Basic Level Quiz 2

# Solutions of the theory questions

---

## 1.Why do we use functions in JavaScript?

we use function in javascript because it helps us to use a piece of code repeatedly without rewriting if completly from scratch.

## 2.What is Function Invocation?

The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
we invoke the function by writing the function name and the pssing the parameters if there are any required.

```javascript
function demo() {
  console.log("testing");
}

demo();
```

## 3.Does a function behave like an object in Javascript? Prove it by an example.

functions are objects. You can work with functions as if they were objects. For example, you can assign functions to variables, to array elements, and to other objects. They can also be passed around as arguments to other functions or be returned from those functions. The only difference with objects is that functions can be called.

```javascript
function message() {
  console.log("Greetings Linda!");
}

console.log(typeof message); // => function
console.log(message instanceof Object);
```

## 4.What are Events in Javascript?

- everythings a user can do to a web page is considered as an event in javascript.
- javascript uses these events to execute a peice of code when these events are triggred by the user.
- few of the examples of the events are like loading of the page, clicking a submit button.
- Eventlistners are used to handle any event that is triggered.

## 5.What is a string?

- a string is a collection of characters that collectively forms or a word or a sentence which is known as a string.
- Also remember in javascript like java string cant be modified there refrence can only be changed.

> syntax of string declaration

```javascript
var string = "this is a string";
// here above the string can be a sibgle word of a group of words ie. sentence.
```

## 6.What is an array? Is it static or dynamic in Javascript?

- an array is a bulit in object in javascript which is used to for collecting the data in an order.
- javascipt allows multiple types of element to be grouped together.
- yes javascript arrays are dynamic in nature. ie there size is decided at the runtime.

## 7.Difference between Map and Set?

- (Source: MDN) The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
- (Source: MDN) The Set object lets you store unique values of any type, whether primitive values or object references.
- The difference is set is used to store only keys while map is used to store key value pairs.

## 8. Difference between Array and Map?

- Source: MDN) The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
- (Source: MDN) The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
- The difference between an Array and a Map is that an Array is just a single collection of elements that can be of any datatype and any unique element can be accessed with an index which is numerical and starts from 0. Whereas, a Map is a collection of key - value pairs and any unique value can only be accessed with it's key which can be of any datatype.

## 9.What are array methods? List a few names?

Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

- arr.push(...items) – adds items to the end
- arr.pop() – extracts an item from the end
- arr.reverse() - reverses the array
- arr.concat(arg1, arg2...) - new array containing items from arr, then arg1, arg2 etc.

## 10.In how many ways can we traverse through an array in Javascript?

```javascript
const arr = [1, 2, 3, 4, 5, 6];

// using general for loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// using forEach loop

arr.forEach((item) => console.log(item));
// using map

arr.map((num) => console.log(num));
// using filter
array = [1, 2, 3, 4, 5, 6];

even = (x) => x % 2 === 0;
evens = array.filter(even);
console.log(array);
console.log(evens);
//using reduce

array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc, curr) => acc + curr;
sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum);
```

# solution of the programming questions

## 1.Reverse an array? Input: [1, 2, 3, 4, 5, 6]

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse();

console.log(arr.join(" ABC ")); // Output :- 1 ABC 2 ABC 3 ABC 4 ABC 5
```

## 2.Explain the properties of the join array method function via program?

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.join()); // Output :- 1,2,3,4,5

console.log(arr.join(" - ")); // Output :- 1 - 2 - 3 - 4 - 5

console.log(arr.join(",")); // Output :- 1,2,3,4,5
```

## 3.Show all the values of an array in a html webpage using DOM and forEach method?

```javascript
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => (document.getElementById("arrValues").innerText += item));
```

## 4.Merge to sets in javascript?

```javascript
const set1 = new Set(["one", "two"]);
const set2 = new Set(["three"]);
const set3 = new Set([...set1, ...set2]);
console.log(set3); // {'one', 'two', 'three'}
```
