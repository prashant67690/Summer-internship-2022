# TypeScript Basic Level Quiz-1

## Theory

---

## 1. What are the basic data types in TypeScript?

Data types in TypeScript are: `number`, `string`, `boolean`, `enum`, `void`, `null`, `undefined`, `any`, `never`, `Array` and `tuple`.

### Number types

In TypeScript, numbers are floating point values that have a type of number. You can assign any numeric values including decimals, hexadecimals, binary, and octal literals.

```typeScript
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;
```

### String Types

When you want to use textual data, string types are used and get denoted by the keyword string.

> example

```typeScript
let firstName: string = "Kunal"; // using double quotes
```

### Boolean Types

When we want to assign a varible to have value either a truty or falsy,then boolean data type is used.

> example

```typeScript
let isPrimaryAccount: boolean = true;
```

### Enum Types

Enumerated data types (enums) are a set of numeric values with more friendly names.
By default, the enum values start from 0 (zero), but you can also set it by manually entering the value of its members. Consider the following two examples:

> example

```typeScript
enum CardTypes { Debit = 1, Credit, Virtual }
enum CardTypes { Debit = 1, Credit = 3, Virtual = 5 }
```

### Void Types

In general, this type of data types are used in functions that do not return any value. For example, `function showMessage(): void { ... }`. In TypeScript, you can also declare a variable of type void, but can only assign `undefined` or `null` to them

### Null Types

You can declare a variable of type null using the null keyword and can assign only null value to it.As null is a subtype of all other types, you can assign it to a number or a boolean value.

> example

```typeScript
let nullValue: null = null;
let numericValue: number = null;
```

### Undefined Types

You can use the undefined keyword as a data type to store the value undefined to it. As undefined is a subtype of all other types, just like null, you can assign it to a number or a boolean value

> example

```typeScript
let undefinedValue: undefined = undefined;
let numericValue: number = undefined;
```

### Any Types

While writing code for which you are unsure of the data type of a value, due to its dynamic content, you can use the keyword any to declare said variable

> example

```typeScript
let dynamicValue: any = "Kunal Chowdhury";
```

### Never Types

The never type represents the data type of values that never occur.

> example

```typeScript
function throwError(message: string): never {
    throw new Error(message);
  /* the following function that always throws an exception can never return a value. Thus, the return type of the function can be set as never */
}
```

### Array Types

arrays in TypeScript and can define them in either of the following two ways; the second approach, however, is the more generic way to declare arrays

> example

```typeScript
let marks: number[] = [80, 85, 75];
let marks: Array<number> = [80, 85, 75];
```

### Tuple Types

A tuple is a data type that allows you to create an array where the type of a fixed number of elements are known but need not be same.

> example

```typeScript
// correct
let person: [string, number] = ["Kunal", 2018];

// error
let person: [string, number] = [2018, "Kunal"];
```

## 2.What is Generic data type.

TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.

> Example

```typescript
// The below example helps us to understand the generics clearly.
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);
```

## 3. What is type inferring in TS.

The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.

> Example

```typescript
let x = 3;

let x: number;
```

## 4. What are the possible ways to define typing for functions.

In TypeScript, there are multiple syntaxes for declaring the type of a function:

- Method signatures
- Function type literals
- Object type literals with call/construct signatures
  Here's a quick run-down of all three variants.

### Method Signatures

The method signature syntax is probably the most straightforward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

```typescript
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
```

### Function Type Literals

Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:

```typescript
interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  // ...
}
```

Perhaps surprisingly, the parameter names are always required within a function type literal. You can't leave out the parameter name and only specify the type. Here's how TypeScript sees a function type literal if you leave out the colon:

```typescript
type FunctionType1 = (x: string, y: number) => number;
// (x: string, y: number) => number

type FunctionType2 = (string, number) => number;
// (string: any, number: any) => number
```

In the definition of the FunctionType2 type, string and number aren't interpreted as types, but as parameter names. They are implicitly typed as any because there's no explicit type annotation (and no information for contextual typing).

### Object Type Literals with Call or Construct Signatures

In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:

```typescript
interface RegExpConstructor {
  // Call signatures
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;

  // ...
}
```

Similar to call signatures, an object type literal can also contain construct signatures, in which case it is said to be a constructor type. The construct signature of a function defines its parameter list and return type when it's called with the new operator. Construct signatures look almost identical to call signatures, except that they are additionally prefixed with the new keyword:

```typescript
interface RegExpConstructor {
  // Call signatures
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;

  // Construct signatures
  new (pattern: RegExp): RegExp;
  new (pattern: string, flags?: string): RegExp;

  // ...
}
```

Depending on how the RegExp type of the JavaScript standard library is used, either the call or construct signature applies. In this case, they're identical, but they wouldn't have to be:

```typescript
// Using the call signature
const digitsPattern1 = RegExp("^\\d+$");

// Using the construct signature
const digitsPattern2 = new RegExp("^\\d+$");
```

## 5. How to define Generic type for Classes.

A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## Programs
