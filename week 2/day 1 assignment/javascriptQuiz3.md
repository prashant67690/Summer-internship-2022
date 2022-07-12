# JavaScript Basic Level Quiz 3

# Solutions of the theory questions

---

## 1.Explain as much as you know about objects in javascript?

- A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

- JavaScript is an object-based language. Everything is an object in JavaScript.

- JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

* ways for creating the object in javascript
  There are 3 ways to create objects.

  1. By object literal

  ```javascript
  emp = { id: 102, name: "Shyam Kumar", salary: 40000 };
  ```

  2.  By creating instance of Object directly (using new keyword)
      `var objectname=new Object();`

      ```javascript
      var emp = new Object();
      emp.id = 101;
      emp.name = "Ravi Malik";
      emp.salary = 50000;
      document.write(emp.id + " " + emp.name + " " + emp.salary);
      ```

      ```

      ```

  3.  By using an object constructor (using new keyword)

  ```javascript
  function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  e = new emp(103, "Vimal Jaiswal", 30000);
  document.write(e.id + " " + e.name + " " + e.salary);
  ```

## 2. Read the code :

### This is an object based vector template

```javascript
var vector = {
  _x: 0,
  _y: 0,
  create: function (x, y) {
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },
};
```

The class solution would be:

```javascript
class vector {
  _x = 0;
  _y = 0;
  vector(x, y) {
    this._x = x;
    this._y = y;
  }

  create(x, y) {
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  }
}

let vec1 = new Vector(1, 2);
console.log(vec1.create(10, 11)); // Output:- Vector { x: 10, y: 11 }
```

## 3.Do you think javascript is the language of the future?

- yes i think javascript is a language of the future,because in so small time it is already dominating preety much everything.

- Leaving frameworks and libraries aside, the language itself is constantly evolving.

# solution of the programming questions

## 1.Write code implementations of arr methods -

- `Array :- const arr = [1, 2, 3, 4, 5]`
- forEach:-

```javascript
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => console.log(item)); // Output:- 1 \n 2 \n 3 \n 4 \n 5
```

- map:-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.map((num) => num * 2)); // Output :- [ 2, 4, 6, 8, 10 ]
```

- filter:-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.filter((num) => num % 2 == 0)); // Output :- [ 2, 4 ]
```

- reduce:-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((prev, initial) => prev + initial, 0)); // Output :- 15
```

- includes :-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(2)); // Output :- true
```

- some :-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.some((element) => element % 2 === 0)); // Output :- true
```

-every:-

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.every((element) => element % 2 === 0)); // Output :- false
```

## 3.To Do List Task
