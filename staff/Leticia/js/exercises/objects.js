
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


