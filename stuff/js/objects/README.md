# Objects [timing 45m]

## Goals

- Objects
  - `this`

## Tasks

## [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### What´s an object?:

Objects are complex data types. Under the hoods, arrays and functions are considered a special type of object. You can apply properties and methods to an array thanks to that.

Objects group together variables and functions to create a model of something you would recognize from the real world.

In objects, variables are called properties. They give us information about the object like the name or available rooms of an hotel object.

In objects, the order of storage is not important, you can access the elements by its key.

If a function is part of an object, its called a method. Methods are used to make tasks associated with the object like checking the number of rooms available.

Objects are made with brackets.

```js
// An object example
var hotel = {
  name: ‘Quay’,   // property
  rooms: 40,      // property
  booked: 25,     // property
  gym: true,      // property
  roomTypes: [‘twin’, ‘double’,’suite’],
  checkAvailability: function () {
    return this.rooms - this.booked;   // method
  }
}
```

The value of a property could be any type, even another object.
The value of a method is always a function.

## Creating objects:

There are few ways to create objects:
  - Literal notation
  - Constructor notation

- Literal notation

```js
var hotel = {
  name: ‘Quay’,
  rooms: 40,
  booked: 25,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
}

var user = {}; // That´s an empty object
```

The object is stored in a variable called hotel so you would refer to it as the hotel object.
Each key and value are separated by colon. And each property and method by a coma except for the last value.

To add more properties or methods to the object:

```js
hotel.pool = false;
hotel['pool'] = false;
hotel.rejection =  function () {
  if (this.rooms === this.boocked) return console.log(`There are no rooms available`);
}
```

To delete properties or methods of an object use the `delete` operator:

```js
delete hotel.name;
delete hotel['name'];
hotel.name;  // undefined
```

- Object constructor notation to create a single object:

Fist you create an object using a combination of the new keyword and the Object() constructor function. That is a function of JavaScript used to create objects.

Next, having created the blank object you could add properties and methods to it with the dot notation.

```js
  var hotel = new Object();

  hotel.name = ‘Quay’;
  hotel.name: ‘Park’;
  hotel.rooms: 150;
  hotel.booked: 75;

  hotel.checkAvailability: function () {
    return this.rooms - this.booked;
  }
```

- Object constructor notation to create multiple object:

If you want several objects to represent the same thing, you could use the constructor notation to do so. Object constructors can use a function as a template for creating objects.

First you have to create the template with the objects´s properties and methods.

A function called object is used to create the template for creating new objects that represent an hotel. The function contain statements that are the properties and methods of the object.

The name of the constructor function is set in UpperCamelCase.

```js
function Hotel (name, rooms, booked) {
  this.name = name
  this.rooms = rooms
  this.booked = booked

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  }
}

var quayHotel = new Hotel(‘Quay’ 40, 25);
var parkHotel = new Hotel(‘Park’ 150, 75);
```

The this keyword is used to indicate that the property or method belongs to the object that this function have created.

Every method or property in that notation ends in a semicolon or nothing, not a comma.

Creating objects that follow that pattern is called creating instances of the object Hotel. To do so, you create a variable which its value is the function call of the constructor with the arguments that are the values of the properties.
Each time is called, the parameters are different because they´re the values of the properties for each hotel.

```js
var quayHotel = new Hotel(‘Quay’ 40, 25);
var parkHotel = new Hotel(‘Park’ 150, 75);
```

The methods will be the same for all the instances because they perform actions with the data in the properties of the object.

If you pass more arguments than those that are expected when creating new objects with constructor notation, they will be ignored.

That notation is used to create complex objects. The object is defined in the function, but is only created if is needed.

- Accessing properties and methods

  - Dot notation:
```js
person.firstName;           // John
person.fullName;            // John Lennon
person.fullName = 'Marc';   // John Lennon
```

  - Bracket notation:

```js
person['lastName'];          // Lennon
person['fullName'];          // John Lennon
person['fullName'] = 'Marc'; // property update

```

To add or remove properties to objects created in literal or constructor notation you use the dot notation or bracket notation as seen:

```js
var hotel = {
  name: ‘Park’,
  rooms: 120,
  booked: 77
}

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;
```

In this example, we´ve created two new properties for the hotel object and deleted one.

- Nested objects:

Objects can contain other objects

```js
var book = {
  name: 'Catch-22',
  published: 1961,
  author: {
    firstname: 'Joseph',
    lastname: 'Heller'
  }
}

book.author.firstname;       // "Joseph"
book['author']['lastname'];  // "Heller"
book.author['lastname'];     // "Heller"
book['author'].lastname;     // "Heller"
```

## The `this` keyword:

The `this` keyword makes reference to the function where it is called. It also makes reference to the object where it is called.

```js
var hotel = {
  name: ‘Quay’,   // property
  rooms: 40,      // property
  booked: 25,     // property
  gym: true,      // property
  roomTypes: [‘twin’, ‘double’,’suite’],
  checkAvailability: function () {
    return this.rooms - this.booked;   // method
  }
}
```

Here, `this` refers to the object hotel where it is used.

`this` depends in how the function is called, not where the function is called.

```js
  const speak = o.speak;
  speak === o.speak; // true, both variables refer to the same function
  speak();           // My name is !
```

- Nested this:

When you need to access it in a nested function. Consider the following example, where we use a helper function inside a method:

```js
  const o = {
    name: 'Julie',
    greetBackwards: function() {
      function getReverseName() {
        let nameBackwards = '';
        for (let i = this.name.length-1 i >= 0 i--) {
          nameBackwards += this.name[i];
        }
        return nameBackwards;
      }
      return getReverseName() + 'si eman ym ,olleH';
    },
  }

  o.greetBackwards();
```

Here we’re using a nested function, getReverseName, to reverse the name. Unfortunately, getReverseName won’t work as we expect it to: when we call o.greetBack wards(), JavaScript binds this as we expect. However, when we call getReverseName from inside greetBackwards, this will be bound to something else.1 A common solution to this problem is to assign a second variable to this:

```js
  const o = {
    name: 'Julie',
    greetBackwards: function() {
      const self = this
      function getReverseName() {
        let nameBackwards = '';
        for(let i = self.name.length-1 i >= 0 i--) {
          nameBackwards += self.name[i];
        }
        return nameBackwards;
      }
      return `${getReverseName()} si eman ym ,olleH`;
    },
  }

  o.greetBackwards();
```

This is a common technique, and you will see this get assigned to self or that. Arrow functions, which we’ll see later in this chapter, are another way of addressing this problem.

The nested function has its own this, so we place the other in a variable that could be accessed inside the second but not outside the first.

- Copying Objects

When we copy an object or we pass it as a parameter of a function, we're really passing a reference to that object. If we do a change to this reference, we will also modify the original object

```js
 var original = { howmany: 1 };
 var copy = original;
 copy.howmany;         // 1
 copy.howmany = 100;  // 100
 original.howmany;     // 100

 var nullify = function(o) { o.howmany = 0 };
 nullify(copy);
 original.howmany;     // 0
```

- Comparing Objects

When we compare objects we will only obtain true if we compare 2 references to the same object

```js
var fido = { breed: 'dog' };
var benji = { breed: 'dog' };
benji === fido;    // false
benji == fido;     // false

var mydog = benji;
mydog === benji;   // true
mydog === fido;    // false
```

- Built in objects:

  - Browser Object Model (BOM)
  - Document Object Model (DOM)
  - Global Javascript Objects
    - Number
    - Math
    - Date
    - String
    ...

# Make the [practices](practice)
