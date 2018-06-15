

// HERENCIA

/*
function Person(){
    // this es Person
  this.name = "person name";
    this.name = "person name";
}

function Teacher(){
    // "this" es Teacher
    //Person.call(this); -----> Al descomentar, estoy llamando al padre. ÉSte this indica el padre que us "this" hacen referencia a Teacher
    this.name = "teacher name";
  
}

Teacher.prototype = Object.create(Person.prototype);   //----> HEREDA las props de Person
Teacher.prototype.constructor = Teacher;   // ----> Declaro que su constructor es propio y no es de su padre (Person)

var p = new Person();

var t = new Teacher();

console.log(t);




# Tasks


### Person

a) Write a constructor function called Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
```


function Person (firstName, lastName, age, gender, interests){




};






b) Write the following three methods for Person.

```
greeting() //returns: Hi! I'm <first-name>.
farewell() //returns: <first-name> has left the building. Bye for now!
bio()      //returns: <first-name> <last-name> is <age> years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.
```

*/

function Person (firstName, lastName, age, gender, interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.greeting = function() {
        return 'Hi! Im ' + this.firstName
    };

    this.farewell = function(){
        return this.firstName + ' has left the building, Bye for now!'
    };

    this.bio = function(){

        return this.firstName + ' '+ this.lastName + ' is ' + this.age + ' years old. '+ gender + ' likes ' + this.interests.join(", ") + '.'
    };
};

var ariel = new Person('Ariel', 'Cima', 43, 'hombre', ['música', 'lectura']);

// ariel.greeting();
// ariel.farewell();
// ariel.bio();



/*
### Student

a) Write a constructor function called Student that inherit from Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
```

/*
b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:

```
greeting() //returns: Yo! I'm  <first-name>.
```

*/

function Student(firstName, lastName, age, gender, interests){

    Person.call(this, firstName, lastName, age, gender, interests);

    this.greeting = function(){
        return 'Yo I\'m ' + this.firstName
    };

};

//Student.prototype = Object.create(Person.prototype);

var pepe = new Student('Pepe', 'Gonzalez', 43, 'Hombre', ['fishing', 'snorkling', 'bowling'])

pepe

console.log('La instancia Pepe es: ' + pepe);

pepe.greeting();

/*

### Teacher

a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:

```
first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
subject             //string
```

b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:

```
greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.
```

*/

var Teacher = function(firstName, lastName, age, gender, interests, subject){

    Person.call(this, firstName, lastName, age, gender, interests);

    this.subject = subject;

    this.greeting = function (){
        return 'Hello my name is ' + this.firstName + ' ' + this.lastName + ' and I teach ' + this.subject+'.'
    };

};

var ana = new Teacher('Ana', 'Spina', 45, 'Mujer', ['natación', 'yoga', 'formula 1'], 'javascript');

ana.greeting();