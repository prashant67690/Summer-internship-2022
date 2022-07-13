# TypeScript Basic Level Quiz-1

## theory

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
