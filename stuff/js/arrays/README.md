# Arrays [timing 45m]

## Goals

- Arrays
  - properties
  - methods

## Tasks

### Arrays

Arrays are a special type of variable that stores a list of variables. Use them with a list or set of variables that are related. When you create an array you don ́t need to specify the number of elements it will hold. An array can hold the same type of informations as a variable could.

* Array size is not fixed you can add or remove elements at any time.
* Arrays are not homogeneous each individual element can be of any type.
* Arrays are zero-based. That is, the first element in the array is element 0.

- Array constructor
```js
var beatles;
beatles = ['John', 'George', 'Ringo', 'Paul'];
```

- New array constructor

```js
 var beatles = new Array('John', 'George', 'Ringo', 'Paul');
```

*The traditional constructor is preferred over the new one*

- Array element access and modification

```js
beatles[2];  // Ringo
beatles[2] = 'Pete'; // Pete
```

If you try to access or modify an element that does not exist, it returns undefined.

```js
beatles[4];  // undefined
```

```js
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}

numbers;   // [2, 4, 6, 8, 10]
numbers.length;  // 5
```

### Array methods:

- [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join), joins the elements of an array into a string, and returns the string.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var stringBeatles = beatles.join();   // John,George,Ringo,Paul
```

- [length():](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) Returns the number of elements contained in the array where is applied.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var stringBeatles = beatles.length();   // 4
```

- [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), used to join two or more arrays. Does not change the existing arrays. Returns a new array containing the values of the joined arrays.

```js
var singers = ['John Lennon','Cher'];
var bassPlayers = ['Paul McCartney','Sting'];
var band = drummers.concat(singers, bassPlayers);    // 'Ringo','Phil Collins','John Lennon','Cher','Paul McCartney','Sting']
```

- [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), searches the array for the specified item, and returns its position. Returns -1 if the item is not found.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var i = beatles.indexOf('Ringo');   // 2
var j = beatles.indexOf('Pete');    // -1
```

- [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), adds new items to the end of an array, and returns the new length.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
beatles.push('Pete');   // 'John', 'George', 'Ringo', 'Paul','Pete'
```

- [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), removes the last element of an array, and returns that element.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul','Pete'];
var firstDrummer = beatles.pop();    // Pete

beatles;   // ['John', 'George', 'Ringo', 'Paul']
```

- [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), sorts the items of an array.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
beatles.sort();   

beatles;   // ['George', 'John','Paul','Ringo']
```

- [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), reverses the order of the elements in an array.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
cars.reverse();

//beatles contains: ['Paul','Ringo','George','John']    
```

- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), returns the selected elements in an array, as a new array object. The original array will not be changed.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var someBeatles = beatles.slice(1, 3);   // ['George','Ringo']

beatles;   //'John', 'George', 'Ringo', 'Paul'
```

- [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), adds/removes items to/from an array, and returns the removed items. This method changes the original array.

```js
// Remove (two parameters):
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var someBeatles = beatles.splice(1,3);    // ['George','Ringo','Paul']

beatles 'John';

// Add (three parameters):
var beatles = ['John', 'George', 'Ringo', 'Paul'];
beatles.splice(2,0,'Yoko','Linda');

beatles     // "John", "George", "Yoko", "Linda", "Ringo", "Paul"
```

- [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), removes the first item of an array, and return it.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var beatle = beatles.shift();   // 'John'

beeatles;    //'John', 'George', 'Ringo', 'Paul'
```

- [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), adds new items to the beginning of an array, and returns the new length.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul'];
beatles.unshift('Yoko','Linda');

beatles   // 'Yoko','Linda','John', 'George', 'Ringo', 'Paul'
```
