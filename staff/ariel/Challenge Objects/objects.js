
function Person(name, lastname){
  this.name = name;
  this.lastname = lastname;
}

Person.prototype.age = 10;          // se añade una key PERO AL PROTOTIPO

var p = new Person("Pepe", "Perez");

console.log(p.__proto__);


// HERENCIA

function Father(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }
  
  var f = new Father("Pepe", "Perez");
  console.log(f);
  
  var son = Object.create(f);
  son.name = "SON";
  //Person.prototype.age = 10;
  
  
  
  console.log(son.__proto__);
  console.log(son.name);

  // ESTO SIRVE PARA ORGANIZAR MEJOR NUESTROS OBJETOS SEMANTICAMENTE 
  
  
function Father(name, lastname){
    this.name = name;
    this.lastname = lastname;
    this.saludar = function(){
      return "Hola, soy: "+this.name + " " + this.lastname;
    }
  }
  
  var f = new Father("Pepe", "Perez");
  console.log(f.saludar());
  
  var son = Object.create(f);    // ------> Se crea el object hijo a partir de una instancia
  console.log(son.saludar());
  son.name = "SON";
  console.log(son.saludar());
  //Person.prototype.age = 10;
  
  
  
  console.log(son.__proto__);
  


  // -----> ATENCION ! MEJOR NO TOCAR LAS PROPIEDADES DE LOS PROTOTIPOS.
  
  

