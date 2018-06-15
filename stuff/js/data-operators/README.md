# Data & Operations [timing 1h]

## Goals

- Variables and varants
- Identifiers and Literals
- Datatypes
- Operators
- Conversions

## Tasks

### Variables and Constants:

- **Declaration:**

```js
  var variableName;
```

- **assignment**

```js
  variableName = 'Variable one';
```

`var` and `var` are both used for variables, but they have some differences.

-  **Declaration and assignment:**

```js
  var variableName = 'Variable one';
```

-  **Multiple declaration:**

```js
  var var1, var2, var3;
  var1 = 34;
  var2 = 'Hello';
  var 3 = false;
```


-  **Multiple declaration and assignment:**

```js
  var quantity = 3, price = 6, total = quantity * price;
```

If you declare a variable but you don´t initialize it takes the value of `undefined`.
If you want to empty a variable you could assign `null` to it. (`undefined` is used by JS, you should use `null` to empty variables)

Variables are used to store data that could change during the program execution. To store data that don´t change, you can use varants (ES6):

```js
  var GOOD_TEMP = 25;
```

Constants should be named in UPPER CASE.

As a rule of dumb, use varants if you have to store non variable data.

**Identifiers and literals:**

Variable and varant names are called `identifiers` identifiers:

  - must start with a varter, '$', or '_'                                     __
  - can contain varters, numbers, unicode characters, '$' or '_'              __
  - can´t be a reserved word
  - should´t start with a capital varter except for classes
  - starting with '_' is used to represent special or internal variables      __
  - With jQuery, variables start with a '$'

`reserved words` are words that JavaScript might confuse with part of the language.

The most used conventions for identifiers are `camelCase` and `snake_case`

The value you assign to a variable is a `literal`. Literals are a way to create a value. JS takes the literal value you give to it and creates a data value from it.


**Primitive types and objects:**

In JS data types are `primitives` or `objects`.

Primitives are immutable types; 5 will be always 5 and "hello" will be always "hello". The combination of "hello" + "World" is the combination of these two immutable values.

There are six primitive data types: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`

Objects can take on different forms and values, and are more chamaleon-like. Because of their flexibility, they can be used to create custom data types. There are some built in objects in JS: `Array`, `Date`, `RegExp`, `Map and WeakMap`, `Set and WeakSet`.

The primitive types `number`, `string` and `boolean` have their corresponding object types that give more functionalities to the value they store.

### [Datatypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):

- Primitive
    * Boolean
    * Null
    * Undefined
    * Number
    * String
    * Symbol
- Not primitive
    * Object

- [**boolean**](https://developer.mozilla.org/en-US/docs/Glossary/Boolean): represents a logical entity and can have two values: `true`, and `false`.

```js
var sleep = true;
var coldEnough = false;
```

- [**null**](https://developer.mozilla.org/en-US/docs/Glossary/Null), the *null* type has exactly one value: `null`.

```js
var greeting = "Hello!";
greeting;    // Hello!

greeting = null;
greeting;    // null
```

- [**undefined**](https://developer.mozilla.org/en-US/docs/Glossary/Undefined): variables that are not initialized have the value of `undefined`.

```js
var name
name;    //undefined
name = 'Maick'  
name;    //Maick
```

![Zero vs. Null vs. NaN](https://pbs.twimg.com/media/C7tska-XwAA5arL.jpg)

- **`null` vs. `undefined`**:

```js
var TestVar;
TestVar;        // undefined
typeof TestVar; // undefined

var TestVar = null;
TestVar;        // null
typeof TestVar; // object
```

```js
null === undefined;    // false
null == undefined;     // true
null === null;         // true

null = 'value';      // ReferenceError
undefined = 'value'; // 'value'
```

- [**number**](https://developer.mozilla.org/en-US/docs/Glossary/Number): JavaScript has only one type of number. Numbers can be written with or without decimals. Internally in JavaScript, all numbers are stored as double floating point ones.

```js
  var count = 10;             // integer literal
  var blue = 0x00000ff;      // hexadecimal (hex ff = decimal 255)
  var umask = 0o0022;        // octal (octal 22 = decimal 18)
  var romTemp = 21.5;        // decimal
  var c = 3.0e6;               // exponential (3.0 × 10^6 = 3,000,000)
  var 3 = -1.6e-19;            // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
  var inf = infinity;      
  var ninf = -infinity;
  var nan = NaN;             // not a number
```

- [**string**](https://developer.mozilla.org/en-US/docs/Glossary/String): is used to represent textual data.

```js
var name = 'Hello World';         // single quoted string
var salutation = "Hello World!";  // double quoted string
var message = `Hello World!`;   // string interpolation (ES6)
```

Every primitive type has its corresponding object type with methods and properties that are used to work with them like the `Number` object for number primitives.

Strings in JS represent Unicode text. They´re represented in `''`, `""` or '.

### Escaping:

To represent text data in a program that´s made up of text data, the problem is distinguishing the text data from the program itself. To do that we use scape characters or we play with the different string quote types:

```js
  var dialog1 = "He looked up and said \"don't do that!\" to Pol.";   // use the \" scape sequence
  var dialog2 = 'He looked up and said "don\'t do that!" to Pol.';    // use other quote type and \' scape sequence
```

Those are the special characters for scaping (scaping sequences):

```
  \n       Newline (technically a line feed character: ASCII/Unicode 10)
  \r       Carriage return (ASCII/Unicode 13)
  \t       Tab (ASCII/Unicode 9)
  \'       Single quote (note that you can use this even when not necessary)            
  \"       Double quote (note that you can use this even when not necessary)             
  \\       Backslash                                                                    
```

### Template Strings:

To add values in a string, use the `string concatenation` method:

```js
  var currentTemp = 19.5;
  // 00b0 is the Unicode code point for the "degree" symbol
  var message = "The current temperature is " + currentTemp + "\u00b0C";
```

ES& introduces string interpolation or `sting templates`. They provide a shorthand way of injecting values into a string.

```js
  var currentTemp = 19.5;
  var message = 'The current temperature is' + currentTemp + '\u00b0C';
```

### Multiline strings:

For single and double quoted strings:

```js
  var multiline = "line1\
  line2";

  var multiline = "line1\n\
  line2";

  var multiline = `line1
  line2`;                     // More natural

  var multiline = "line1\n" +
  "line2\n" +
  "line3"                    // Better to indent
```

### Numbers as Strings:

If you put a number into quotations, JS converts it into a number. When and how that happens its pretty confusing so, use the types when they have to be used.

```js
  var result1 = 3 + '30'; // 3 is converted to a string; result is string '330'
  var result2 = 3 * '30'; // '30' is converted to a number; result is numeric 90
```

- String Methods:

```js
indexOf()             // Returns the position of the first found occurrence of a specified value in a string
charAt()              // Returns the character at the specified index (position)
concat()              // Joins two or more strings, and returns a new joined strings
endsWith()            // Checks whether a string ends with specified string/characters
split()               // Splits a string into an array of substrings
lastIndexOf()         // Returns the position of the last found occurrence of a specified value in a string
replace()             // Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
startsWith()          // Checks whether a string begins with specified characters
substr()              // Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
toLowerCase()         // Converts a string to lowercase letters
toUpperCase()         // Converts a string to uppercase letters
slice()               // Extracts a part of a string and returns a new string
trim()                // Removes whitespace from both ends of a string

includes()            // Checks whether a string contains the specified string/characters
```

[more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

- [**Assignment**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

    - `=`    assignment
    - `+=`   addition
    - `-=`   subtraction
    - `*=`   multiplication
    - `/=`   division
    - `%=`   remainder


  - [**Arithmetic**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

    - `+` Addition
    - `-` Subtraction
    - `/` Division
    - `*` Multiplication
    - `%` Remainder
    - `++` Increment
    - `--` Decrement

- [**Comparison**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

    - `==` Equality
    - `!=` Inequality
    - `===` Identity / strict equality
    - `!==` Non-identity / strict inequality
    - `>` Greater than
    - `>=` Greater than or equal
    - `<` Less than
    - `<=` Less than or equal

- **Comma `,` and concatenation `+` operators**

*`==` checks value matching, `===` checks value and type matching*

(ask students the expected result when showing examples)

```js
var a = 45
var b = '45'

a == b  // true
a === b // false
a != b  // false
a !== b // true

var c = 5, d = 6
c > d   // false
c < d   // true
c >= d  // false
c <= d  // true
```

- [**Logical**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

    - `&&`  AND
    - `||`  OR
    - `!`   NOT

- [**Bitwise**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)

    - `&` Bitwise AND
    - `|` Bitwise OR
    - `!` Bitwise XOR

*`&&`, `&`, `||`, `|`*

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded.

- **Short circuit evaluation:**

  - false && (true/false) // "false"
  - true || (true/false)  // "true"

```js
function shortCircuitEvaluation() {
  doSomething() || doSomethingElse();
}

function equivalentEvaluation() {
  var flag = doSomething();
  if (!flag) {
    doSomethingElse();
  }
}

false && true  || true;      // true
false && (true || true);     // false

a1 = true  && true;      // true
a2 = true  && false;     // false
a3 = false && true;      // false
a4 = false && (3 == 4);  // false
a5 = "Cat" && "Dog";     // "Dog"
a6 = false && "Cat";     // false
a7 = "Cat" && false;     // false

o1 = true  || true;       // true
o2 = false || true;       // true
o3 = true  || false;      // true
o4 = false || (3 == 4);   // false
o5 = "Cat" || "Dog";      // "Cat"
o6 = false || "Cat";      // "Cat"
o7 = "Cat" || false;      // "Cat"

n1 = !true;              // false
n2 = !false;             // true
n3 = !"Cat";             // false
```

```js
var accesRestringedArea = login() & authorization();   // executes the two functions, although the first returns false

var accesRestringedArea = login() && authorization();  // if the first function returns false the second function is not executed
```

- **Ternary operator `?`: `else-if` contraction**

```js
var hungry = true;
var eat = hungry ? "go to eat" : "stay working";
eat;     // go to eat
```

```
condition_to_check ? do_if_is_true : do_if_is_false;
```

- [**typeof**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof): the typeof operator returns a string indicating the type of the operand.

```js
var a, b = 3, c = '6';
typeof a;    // Undefined
typeof b;    // number
typeof c;    // string

var d = {content: 'Hello'};
typeof d;    // object

// typeof operator don´t work well in some cases
var e = null;
typeof e;    // object

var f = ['John','George','Ringo','Paul'];
var g = {1: 'John', 2: 'George',3: 'Ringo', 4: 'Paul'};
typeof f;    // object
typeof g;    // object
```


### [Type Conversions](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Type_conversion)

**Convert to Strings**

- `String()`

```js
var x = 2;
String(x);          // '2'
String(7);          // '7'
String(7 + 2);      // '9'
String(true);       // 'true'
String(['Welcome','to','Skylab']);  // 'Welcome,to,Skylab'
```
- `toString()`

```js
var x = 2;
x.toString();        // '2'
(7).toString();      // '7'
(7 + 2).toString();  // '9'
false.toString();    // 'false'
```

- `+` operator

```js
12 + ' years';   // '12 years'
'km ' + 2;       // 'km 2'
true + '';       // 'true'
```

- Other ways to convert to string

```js
(9.3471).toFixed(2);  // '9.35'
(9.3471).toFixed(1);  // '9.3'
(9.3621).toPrecision(2);  // '9.4'
(9.3621).toPrecision(1);  // '9'
```

**Convert to Number**

- `Number()`

```js
Number('15');       //  15
Number('Beatles');  //  NaN
Number('');         //  0
Number(true);       //  1
Number(false);      //  0
Number([]);         //  0
Number([15]);       //  15
Number([15,2]);     //  NaN
```

- `parseInt()`

```js
parseInt('15');       //  15
parseInt('15.2');     //  15
parseInt('15 2');     //  15
parseInt('15 years'); //  15
parseInt('years 15'); //  Nan
parseInt(true);       //  Nan
```

- `parseFloat()`

```js
parseFloat('15');       //  15
parseFloat('15.12');    //  15.12
parseFloat('15 2');     //  15
parseFloat('15.1 years');   //  15
parseFloat('years 15.1');   //  Nan
parseFloat(true);       //  Nan
```

**Convert to Boolean**

- `Boolean()`

```js
Boolean(0);     //  false
Boolean(1);     //  true
Boolean(23);    //  true

Boolean('');                //  false
Boolean('John Lennon');     //  true
Boolean('true');            //  true
Boolean('false');           //  true
Boolean('0');               //  true
Boolean('1');               //  true

Boolean(null);              //  false
Boolean(undefined);         //  false

Boolean([]);                //  true
Boolean([2,3,4]);           //  true

Boolean({});                //  true    
Boolean({a: 1, b:2});       //  true

!! something // true if something exists, othewise false
```

**Also, JavasScript makes some automatic conversions for you**

## [Practice](practice)

## [Homework](homework)