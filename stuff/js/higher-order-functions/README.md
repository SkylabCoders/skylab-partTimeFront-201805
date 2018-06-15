# Higher order functions [timing 1h]

## Goals

- High order Functions
- Callback functions

## Tasks

- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), calls a provided function once for each element in an array, in order.

```js
var beatles = ['John', 'George', 'Ringo', 'Paul']

beatles.forEach(function(beatle) {
  console.log(beatle)
})

// John
// George
// Ringo
// Paul
```

- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), return a new array with the results of calling a function for every array element.

```js
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), return a new array filled with all array elements that pass a test (provided as a function).

```js
// That function makes a check and returns a boolean
function greater(value) {
  return value >= 10;
}

// The true values are stored in the new array
var filtered = [12, 5, 8, 130, 44].filter(greater);
// [12, 130, 44]
```

- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), reduces the array to a single value.

That method applies a function to an acumulator and each array value (from left to right) to reduce it to a single value.

```js
var values = [5, 1, 1, 5]

var sumElements = values.reduce(function(acumulator, element) {
  return acumulator + element
}, 0)

sumElements   // 12
```

- [every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), checks if all elements in an array pass a test (provided as a function).

```js
// Check if all elements are even
var arr1 = [2, 4, 6, 8]
var arr2 = [2, 4, 6, 9]

var boolTest1 = arr1.every(function(element) {
  return element % 2 === 0
})

var boolTest2 = arr2.every(function(element) {
  return element % 2 === 0
})


boolTest1   // true
boolTest2   // false
```

- [some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), check if at least one element pass a test (provided as a function).

```js
// Checks if an element of the array is greater than 10
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

- [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), is executed after the current effect is 100% finished.

```js
function sum(a, b, callback) {
    return callback(a+b)
}

sum(2, 3, function(result) {
  return result * 10
})

// 50
```

## [Practice](practice)
