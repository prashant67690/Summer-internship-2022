# This is the solution sheet of the first javascript quiz

## 1.What is JavaScript?

javascript is a dynamically typed prograamming language for the web. it was developed by Brendan Eich at netscape.
other than using it for web development its is used in game development, and lots more.

## 2.What is the difference between b/w let and var?

| let                                | var                             |
| ---------------------------------- | ------------------------------- |
| let variables cannot be redeclared | var variables can be redeclared |
| it is block scoped                 | it is function scoped           |
| hoisting does not occur in let     | hoisting can occur in var       |

## 3.Why do we prefer const over var?

we prefer const over var due to the following reasons

- var declarations are globally scoped or function scoped while const is block scoped.
- const variables can neither be updated nor re-declared.

## What is the use of javascript in web browsers?

JavaScript is a programming language used both on the client-side and server-side that allows you to make web pages interactive this is one of the biggest reson that javascript is so much used in web pages there are many features in javascript like its `DOM` manipulation provides us better control over our webpage.

if we switch off the javascript in our web browsers many of the new features such as payment application will not function perfectly and some of the application would not even open.

## What are Objects?

objects are real life entity which have some properties and methods.
in javascript like other OOP languages we use object to visualize the real world entities because every thing in this world is in the form of object. for example:Person is as an object with properties like height weight and methods like walking and eating.

> Syntax of the object in javascript

```JavaScript
object_name={
    property1: value,
    property2:value
    method(){
        console.log("thsi is the method body");
    }
};
```

## What is a function?

a function is a "subprogram" that can be called by code.a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.

> Syntax of the function in javascript

```JavaScript
function name([param[, param[, ... param]]]) {
  statements
}
```

## What is DOM?

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
It represents the page so that programs can change the document structure, style, and content.

---

## JavaScript Programs

### 1.Average of array nums in Javascript?

```JavaScript
let array = [1,2,3,4,5,6]
let sum=0;
array.forEach((element)=>{
    sum=sum+element;
})

console.log(sum);
```

### 2.Print the fibonacci sequence?

```JavaScript
let n=prompt('enter the value of n');
let num1=0,num2=1;
console.log(num1,num2);
c=num1+num2;
for(var i=2;i<=n;i++){
    console.log(c);
    num1=num2;
    num2=c;
    c=num1+num2;
}
```
