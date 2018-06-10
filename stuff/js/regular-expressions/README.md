# Regular expressions [timing 30m]

## Goals

- Regular expressions

## Tasks

- TODO: introduce regex with the example of "replace" (refresh from somewhere in passed bootcamp)

- A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) is an object that describes a pattern of characters.

```
/pattern/modifiers;
```

- Creating a regular expression:

```js
var regExp = /ab+c/;

// with constructor
var regExp = new RegExp('ab+c');

// regular expression for email check (this regex is simplest)
var regExp = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
```

- [Special characters and modifiers](https://www.w3schools.com/jsref/jsref_obj_regexp.asp), special characters are character with special mean and defines the regex. Modifiers can be used to perform searches.

### Regular expression methods

- [exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) executes a search for a match in a string. It returns an array of information or null on a mismatch.

```js
regexObj.exec(str);
```

- [test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) tests for a match in a string. It returns true or false.

```js
regexObj.test(str);

var regExpEmail = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/

regExpEmail.test('skylab@gmail');  // false
regExpEmail.test('skylab@gmail.com');  // true

```

- [match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) executes a search for a match in a string. It returns an array of information or null on a mismatch.

```js
//syntax

str.match(regexp);
```

- [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) tests for a match in a string. It returns the index of the match, or -1 if the search fails.

```js
//syntax

str.search(regexp);
```

- [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) executes a search for a match in a string, and replaces the matched substring with a replacement substring.

```js
str.replace(regexp|substr, newSubstr|function() {});
```

[Regular expression 101](https://regex101.com/)
