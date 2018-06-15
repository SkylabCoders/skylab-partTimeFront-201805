# Functions and Scope

## Goals

- Functions
- Scope
  - Closures
  - Hoisting

## Tasks

### Functions

- [Structure function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

Functions are blocks of code that perform a specific task. You could use them instead of writing the code twice or more.

You could pass information to a function, that information given to a function is called arguments.

Functions are processed first by the compiler after anything else, so you can use a function before declaring it.

Functions could return values, use `return` to do it. You can omit the return statement if you only want to perform actions.

- Function declaration:

```js
function functionName(argument1Name, argument2Name) {
       statements;
       return(valueToReturn);
 }
```

- Function call:

```js
functionName(argument1Value, argument2Value);
```

- Getting a single value:

```js
function calculateArea (with, weight) {
  var area = with * height;
  return area;
}

var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(8,5);
```

- Getting multiple values:

```js
function getSize (width, height, depth) {
  var area = with * height;
  var volume = with * height * depth;
  var sizes = [area, volume];
  return sizes;
}

var areaOne = getSize (3, 2, 3) [0];
var volumeOne = getSize (3, 2, 3)[1];
```

- Function parameters:

You could pass arguments, or parameters to a function. Those are values that don´t exist until the function is called:

```js
function avg(a, b) {
  return (a + b) / 2;
}
```

In this function declaration `a` and `b` are called formal arguments. When the function is called, the formal arguments get arguments and become the actual arguments:

```js
avg(5, 10);
```

Functions can be arguments for other functions.

```js
//example
function multiply(a, b){
  return a * b;
}

multiply(5, multiply(2,2));
```

The arguments are only available inside the function:

```js
function f(x) {
  console.log(`inside f: x=${x}`);
  x=5
  console.log(`inside f: x=${x} (after assignment)`);
}

let x=3;

console.log(`before calling f: x=${x}`);

f(x)
  console.log(`after calling f: x=${x}`);

// before calling f: x=3
// inside f: x=3
// inside f: x=5 (after assignment)
// after calling f: x=3
```

It is, however, possible to modify an object type in a function in such a way that the object itself changes, which will be visible outside of the function:

```js
function f(o) {
  o.message = `set in f (previous value: '${o.message}')`;
}

let o = {
 message: "initial value";
}

console.log(`before calling f: o.message="${o.message}"`);

f(o);
console.log(`after calling f: o.message="${o.message}"`);

// before calling f: o.message="initial value"
// after calling f: o.message="set in f (previous value: 'initial value')"
```

In this example, we see that `f` modified `o` within the function, and those changes affected the object `o` outside of the function. This highlights the key difference between primitives and objects. Primitives can’t be modified (we can change the value of a primitive variable, but the primitive value itself doesn’t change). Objects, on the other hand, can be modified.

The `o` inside the function is separate and distinct from the `o` outside of the function, but they both refer to the same object. We can see that difference again with assignment:

```js
function f(o) {
  o.message = "set in f";
  o = {
    message: "new object!";
  }

  console.log(`inside f: o.message="${o.message}" (after assignment)`);
}

let o = {
  message: 'initial value';
}

console.log(`before calling f: o.message="${o.message}"`);

f(o);

console.log(`after calling f: o.message="${o.message}"`);

// before calling f: o.message="initial value"
// inside f: o.message="new object!" (after assignment)
// after calling f: o.message="set in f"
```

The key to understanding what’s going on here is understanding that the argument `o` (inside the function) is different than the variable `o` (outside the function). When `f` is called, both point to the same object, but when `o` is assigned inside `f`, it points to a new, distinct object. The `o` outside the function still points to the original object.

The number of arguments you pass does not matter, the same function is always called. If you pass less arguments, the others get undefined and if you pass more they get discarded.

- Calling versus referencing:

When you place the name of he function with parentheses you´re calling the function. The body of the function is executed and the expression results on the return values.

When you pass it without the parentheses you´re simply referencing the function just as any other value.

```js
// different resutls in console:
getGreeting();   //  Hello World!
getGreeeting;    // function getGreeting()
```

Being able to reference a function as any other value lets you assign it to a variable:

```js
const f = getGreeeting;
f(); // Hello World!
```

Or assign a function to an object property:

```js
const o = {};
o.f = getGreeting;
o.f(); // Hello World!
```

Or even add a function to an array:

```js
const arr = [1, 2, 3];
arr[1] = getGreeeting;
arr[1]();    // Hello World!
```

- Function expression:

If you place a function where an expression is expected, it would be treated as an expression. That ́s called `function expression`. In function expressions, name is usually omitted. A function with no name is called anonymous function.

```js
var area = function(with, height) {
  return with * height;
}

var size = area (3, 4);
```

The function is stored in the `area` variable. It can be called like any other function. In a function expression, the function is not processed until the interpreter gets to that statement. You can ́t call this function before creating it.

- Immediately invoked function expression (IIFE):

These functions have to name. They are executed once as the interpreter comes across them. They hold the value of the function instead of the function itself.

```js
var area = (function () {
  var with = 3;
  var height = 2;
  return with * height;
}())
```

The variable called area will hold the value returned from the function (rather than storing the function itself so that it can be called later).

The final parenthesis after closing curly brace of the code block tell the interpreter to call the function immediately. The grouping operators are parentheses there to ensure the interpreter treats this as an expression.


- Useful functions:

```js
Math.random();                               // Número aleatorio entre 0 y 1
Math.random() * 100;                         // aleatorio entre 0 y 100
Math.random() * 50;                          // aleatorio entre 0 y 50
Math.floor(Math.random() * 4);               // Redondea el resultado del aleatorio entre 0 y 4
Math.floor();                                // Redondear el número
isNaN(variable/String/number);               // Devuelve true/false si el argumento es o no un número
confirm(“text”);                             // accept / cancel a prompt with a text
promp(“text”);                               // accept / cancel a prompt with a text and a text imput
‘string’.length;                              // Returns the length of a string
‘string’.substring(inicialNum, finalNum);    // Returns a fragment of the string in the interval you indicate
```

- Function as a property of an object.

```javascript
var circle = {
  radius: 3,
  diameter: function(){
    return this.radius * 2;
  }
}
```

### Scope

- [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), in Javascript variables are defined in the function scope (and not in the block scope as it happen in other languages)

    - **Global variables** are those defined out of any function.
    - **Local variables** are those defined inside of a function.

```js
var global = 'This is a global var';

function myFunc(){
  var local = 'This is a local var';
}
```

- [Scope chain](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)

- [Closure](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)

```js
//example for Scope chain and Closure

var grandFather = 'Mario';

function fatherFunction() {
  var father = 'Miguel';

  return function funcSon() {
    var son = 'Michel';
    console.log("I'm " + son + ', my father is ' + father + ' and my grandfather is ' + grandFather);
  }
}

fatherFunction()();
```

- Hoisting: functions and variables can be called before being declared, hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

```js
years = 15;
console.log(years);
var years;
```

## [Practice](practice)
