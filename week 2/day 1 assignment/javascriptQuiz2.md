# This is the solution sheet of the second javascript quiz

# Solutions of the theory questions

---

## 1.Why do we use functions in JavaScript?

we use function in javascript because it helps us to use a piece of code repeatedly without rewriting if completly from scratch.

## 2.What is Function Invocation?

The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
we invoke the function by writing the function name and the pssing the parameters if there are any required.

## 3.What are Events in Javascript?

everythings a user can do to a web page is considered as an event in javascript.javascript uses these events to execute a peice of when these events are triggred by the user.few of the examples of the events are like loading of the page, clicking a submit button.

## 4.What is a string?

a string is a collection of characters that collectively form words and these words comes together forms a sentence which is known as a string.the strings are bulit in objects in javascript like arrays because they also containes properies and methods like length and substing etc.

Also remember in javascript like java string cant be modified there refrence can only be changed.

> syntax of string declaration

```javascript
var string = "this is a string";
// here above the string can be a sibgle word of a group of words ie. sentence.
```

## 5.What is an array? Is it static or dynamic in Javascript?

an array is a bulit in object in javascript which is used to collect data generally for similar types of data
element, but javascipt allows multiple types of element to be grouped together.
yes javascript arrays are dynamic in nature.

## 6.Difference between Map and Set?

The difference is set is used to store only keys while map is used to store key value pairs.

## 7.What are array methods? List a few names?

Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

- arr.push(...items) – adds items to the end
- arr.pop() – extracts an item from the end
- arr.splice([start], [end]) -It returns a new array copying to it all items from index start to end,Both start and end can be negative, in that case position from array end is assumed.
- arr.concat(arg1, arg2...) - new array containing items from arr, then arg1, arg2 etc.

# solution of the programming questions

## 1.Reverse an array? Input: [1, 2, 3, 4, 5, 6]

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse();
```

## 2.Merge to sets in javascript?

```javascript
const set1 = new Set(["one", "two"]);
const set2 = new Set(["three"]);
const set3 = new Set([...set1, ...set2]);
console.log(set3); // {'one', 'two', 'three'}
```
