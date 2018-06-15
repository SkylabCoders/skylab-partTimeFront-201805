# Control flow [timing 1h]

## Goals

- Truthy and falsy evalues

- Special words

- Conditionals
  - `if`
  - `else-if`
  - `switch`
  - `?`

- Loops
  - `for`
  - `while`
  - `do-while`
  - `for...of`
  - `for...in`
  - `for` patterns
  - Useful control flow patterns

## Tasks

**Remember**: an expression statements results in a value

## Truthy and falsy values:

### Falsy values:

  - False
  - 0
  - NaN
  - Undefined
  - Null
  - ‘’

### Truthy vlaues:

  - True
  - 1
  - ‘content’
  - Numbers (!= 0)
  - ‘true'
  - ‘0’
  - ‘false’
  - Presence of an object
  - Presence of an array

## Special words:

- Break exits the loop or the switch case
- Continue skips the iteration
- Return return a value and exit the loop if it´s in a function

## Conditional Statements

### `if`

The `if` statement executes a block of code if a condition is true.

```js
if (expression) {
  statements;      // Multiline if
}

// compact notation (when there´s only one statement)
if (expression) statement;  

if (expression)
  statement;
```

### `else-if`

The `else-if` structure, executes a block of code if something is true, and another if it´s false:

```js
if (expression) {
  statements;      // Multiline else-if
} else {
  statements;
}

// compact notation (when there´s only one statement)
if (expression) statement;  else statement;

if (expression)
  statement;
else
  statement;
```

### `switch`

The `switch` structure checks the value of a condition and run a block of code depending on it. There is a `defeault` statement used if no value is matched.
`switch` statement is the compact form of an `else-if` statement.

```js
switch (expression) {
  case value1:
    statements;
    break
  case value2:
    statements;
    break
  default:
    statements;
    break  
}

switch(true){
    case a > 0: console.log('> 0');break; 
    case a < 0: console.log('< 0');break; 
}
```

### *Review*: Ternary operator:

The ternary operator `?` makes one thing or other if the expression evaluates to true or false.
Is the shortcut for the else-if statement

```js
var value = (expression) ? true_value : false_value;

var pass;
grade = 6;
pass = (grade >= 5) ? 'passed' : 'failed';
pass;    // passed

grade = 2;
pass = (grade >= 5) ? 'passed' : 'failed';
pass;    // passed
```

## Loops

### `for`

The `for` loop use a counter to execute code a number of times. To do so, you have to initialize it, check its value and change it:

```js
for (initialization, expression, modification) {
  statements;      // multiline notation
}

// compact notation (when a single statement is executed).

for (initialization, expression, modification) statement;

for (initialization, expression, modification)
  statement;
```

### `while`

Executes a block of code if a condition is true

```js
while (expression) {
  statements;    // multiline notation
}


while (expression) statement;

while (expression)
  statement;
```

### `do-while`

Executes a block of code once, then only if the condition is true:

```js
do {
  statements;    // multiline notation
} while (expression)

// compact notation (when a single statement is executed).
do statement; while (expression)

do statement;
  while (expression)
```

## for...in loop:

Used to loop over the property keys of an object:

```js
var player = {name: 'Thomas', rank: 'midshipman'. age: 25}
for (var prop in player) {
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}
```

## for...of loop (ES6):

Other way to iterate over the elements in a collection:

```js
var hand = [randFace(), randFace(), randFace()];
for (var face of hand)
  console.log(`You rolled...${face}!`);
```

`for...of` is great to loop trough arrays if you don´t need to know the index of the elements.

```js
var hand = [randFace(), randFace(), randFace()];
for(var i=0; i<hand.length; i++)
  console.log(`Roll ${i+1}: ${hand[i]}`);
```

## True switch

```js
var a = 0, b = true;

switch(true) {
  case a:
    alert('a');
    break;
  case b:
    alert('b');
    break;
}
```

## fall-through switch

A matched case will run until a break (or the end of the switch statement) is found:

```js
var answer = "";
 switch( val ) {
   case 1:
   case 2:
   case 3:
     answer = "Low";
     break;
   case 4:
   case 5:
   case 6:
     answer = "Mid";
     break;
   case 7:
   case 8:
   case 9:
     answer = "High";
     break;
   default:
     answer = "Massive or Tiny?";
 }
```

## Aditional for loop patterns:

Using the comma operator (`,`) we can combine multiple assignments and final expressions:

```js
for (var temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)
  console.log(j);  // prints the first eight Fibonacci numbers
```

We can use nothing to create an infinite loop:

```js
for (;;) console.log('infinite');  // evaluates indef = falsy
```

Any expression will work:

```js
var s = '3';
for(; s.length<10; s = ' ' + s);

for(var x=0.2; x<3.0; x += 0.2) console.log(x);

for(; !player.isBroke;) console.log("Still playing!");
```

## Useful control flow patterns:

### Using continue to reduce conditional nesting:

```js
while(funds > 1 && funds < 100) {
  var totalBet = rand(1, funds);
  if(totalBet === 13) {
    console.log("Unlucky! Skip this round....");
    continue;
  } else {
    // play...
  }
}
```

### Using break or return to avoid unnecessary computation:

```js
var firstPrime = null;
for(var n of bigArrayOfNumbers) {
  if(isPrime(n)) {
    firstPrime = n;
    break;
  }
}
```

If the loop is inside a function, we could use return instead of break.

### Using the index of a loop after completion:

Occasionally, the important output of a loop is the value of the index variable when the loop terminates early with a break. We can take advantage of the fact that when a for loop finishes, the index variable retains its value. If you employ this pattern, keep in mind the edge case where the loop completes successfully without a break. For example, we can use this pattern to find the index of the first prime number in our array:

```js
leti=0;
for(; i < bigArrayOfNumbers.length; i++) {
  if(isPrime(bigArrayOfNumbers[i])) break;
}

if(i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);
```

### Using descendant indexes when modifying lists:

```js
for(var i=bigArrayOfNumbers.length-1; i >= 0; i--) {
  if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
```

## Short circuit values:

Use logic operators to take decisions.

```js
var artist = ‘Rembrandt’;
var artistA = (artist || ‘Unknown’);

var artist = ‘’;
var artistA = (artist || ‘Unknown’);
var artist = ‘’;
var artistA = (artist || {});

var valueA = 0 valueB = 1, valueC = 2;

If (valueA || valueB || valueC); // do something
```