
function Person(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }
  
  Person.prototype.age = 0;
  
  var p = new Person("Pepe", "Perez");
  
  console.log(p.__proto__);
  
// Podemos definir elementos en el padre que hereda los hijos
function Father(name, lastname){
    this.name = name;
    this.lastname = lastname;
}

var f = new Father("Pepe", "Perez");
console.log(f);

// objeto creado de una instancia que hereda de father
var son = Object.create(f);
son.name = "SON";
//Person.prototype.age = 10;


// muestra el prototipo del padre
console.log(son.__proto__);

// muestra prototipo del hijo
console.log(son.name);
  
// call
// -----------------------------------
function Person(){
    //Aquí this es Person
    this.name = "person name";
    this.personAttr = "person attr 1";
    this.sayHello = function(){
      return "Hello, my name es "+this.name;
    }
  }
  
  function Teacher(){
      // call -> propiedad de todas las funciones que es una función, que llama a la funcion como si fuera otra con otro this
    // AQuí this es Teacher
    Person.call(this);
    
    this.name = "teacher name";
  }

//   Person {
//     name: 'Person name',
//     personAttr: 'person attr 1',
//     sayHello: [Function] }
//   Teacher {
//     name: 'Teacher name',
//     personAttr: 'person attr 1',
//     sayHello: [Function] }




function Person(name){
    //Aquí this es Person
    this.name = name;
    this.personAttr = "person attr 1";
    this.sayHello = function(){
      return "Hello, my name es "+this.name+"..... "+this.personAttr;
    }
  }
  
  function Teacher(name){
    // AQuí this es Teacher
    Person.call(this, name);
    
    this.sayHello = function(){
      return "Hello, I'm a teacher and my name is: "+this.name+"..... "+this.personAttr;
    }
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  
  var p = new Person("Person name");
  
  var t = new Teacher("Teacher name");
  
  console.log(p.sayHello());
  console.log(t.sayHello());
  

//------------------------------------------

function Father(name, lastname){
    this.name = name;
    this.lastname = lastname;
    this.saludar = function(){
      return "Hola, soy: "+this.name + " " + this.lastname;
    }
  }

var f = new Father("Pepe", "Perez");
console.log(f.saludar());

var son = Object.create(f);
console.log(son.saludar());
son.name = "SON";
console.log(son.saludar());


console.log(son.__proto__);
  
// Hola, soy: Pepe Perez
// Hola, soy: Pepe Perez
// Hola, soy: SON Perez

// Father { name: 'Pepe', lastname: 'Perez', saludar: [Function] }

// Borrados:
// -------------------------------------------

// eliminaría del hijo solo
console.log(son.saludar());

// eliminaría del padre
delete son.__proto__.name;

  
--------------------------


function Person(){
    this.name = "person name";
  }
  
  function Teacher(){
  }
  //teacher hereda de person
  Teacher.prototype = Object.create(Person.prototype);
  
  //hereda de person y su constructor es teacher
  //Teacher.prototype.constructor = Teacher;
  
  var p = new Person();
  var t = Object.create(p);
  
  console.log(t);
  

// a) Write a constructor function called Person and that has the following arguments:
// first-name          //string
// last-name           //string
// age                 //number
// gender              //string
// interests           //array
  
function Person(){
    this.firstName = "name",
    this.lastName = "last name",
    this.age = 43,
    this.gender = man,
    this.insterests = [jazz, cinema, cooking]
}
  
// b) Write the following three methods for Person.

// ```
// greeting() //returns: Hi! I'm <first-name>.
// farewell() //returns: <first-name> has left the building. Bye for now!
// bio()      //returns: <first-name> <last-name> is <age> years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.
  
  function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender = gender,
    this.interests = interests,
    this.greeting = function(){
        return "Hi my first name is " + this.firstName;
    }
    this.farewell = function(){
        return this.firstName + " has left the building. Bye for now!";
    }
    this.bio = function(){
        var interestsStr = "";

        for(var i = 0; i<this.interests.length; i++){ 
            if (i < this.interests.length -1){
                interestsStr += this.interests[i] + ', ';
            } else if(i === this.interests.length -2){
                interestsStr += this.interests[i] + ' ';
            } else {
                interestsStr += 'and ' + this.interests[i];
            }
        }
        return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. ' + this.gender + ' likes ' +  interestsStr + ' has left the building. Bye for now!';
    }
}

var p = new Person('Harry', 'Plotter', 30, 'he', ['jazz', 'cinema', 'cooking']);
console.log(p);
console.log(p.bio());

// ### Student
// a) Write a constructor function called Student that inherit from Person and that has the following arguments:

function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests);
}

var studentPrimary = new Student('pepe','mor',12,'he',['basket', 'music']);

console.log(studentPrimary);


//b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:
// greeting() //returns: Yo! I'm  <first-name>.

function Student(firstName,lastName,age,gender,interests,farewell,bio){
    Person.call(this,firstName,lastName,age,gender,interests,farewell,bio);
    this.greeting = function(){
        return 'Yo! I\'m  ' + firstName;
    }
}

var studentPrimary = new Student('pepe','mor',12,'he',['basket', 'music']);

console.log(studentPrimary);
console.log(studentPrimary.greeting());


// ### Teacher
// a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:
// first-name          //string
// last-name           //string
// age                 //number
// gender              //string
// interests           //array
// subject             //string

function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject = subject;
}

var teacher1 = new Teacher('Susana','Mur',42,'She',['dancing', 'chess'],'Maths');
console.log(teacher1);

// b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:
// greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.

function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject = subject;
    this.greeting = function(){
        return 'Hello. My name is ' + (this.gender == 'She' ? 'Miss' : 'Mr') + ' ' + ' and I teach ' + this.subject + '. ' + ' ' + this.firstName;
    }
}

var teacher2 = new Teacher('Susana','Mur',42,'She',['dancing', 'chess'],'Maths');
console.log(teacher2);




// ------------------------------------------------------------




//is_object
// Write a JavaScript function to check whether an input is an object or not.

var a = "pepe";
var manolo =  {
    age: 30,
    job: 'window cleaner'
}

function detectObjects(obj) {
    if(typeof(obj) === "object"){
        return "this is an object";
    } else {
        return "this is not an object";
    }
}

detectObjects(manolo);
detectObjects(a);

// Create object car
// Write an object that represents a car with three properties: brand, model, color. 
// Add a method that shows the following message: 'My black Sean León is great!' 
// (Hint: use this)

var car = {
    brand: 'fiat',
    model: 'panda',
    color: 'blue'
}
function showMyCar(){
    var myCar = 'My ' + car.color + ' ' + car.brand + ' ' + car.model + ' is great';
    
    console.log(myCar);
}

showMyCar();


