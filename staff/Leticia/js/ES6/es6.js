// ES6



// Crear una funcion nueva sin cambiar de scope

function f(){  
}

// Crear todo con const
// const para que no nos cambien el valor
const f = ()=>{ // arrow function
  var name = "cris";
}
console.log(name);


// 'var' desaparece en ES6
let su scope está dentro de las funcion

beer = "punk";


var letters = ['a', 'b', 'c'];

var newLetters = letters.map((e) => {return "Letra: "+e}); 
// arrow function con un solo return puede hacerse como abajo:
// var newLetters = letters.map(e => "Letra: "+e );
// manera tradicional
//var newLetters = letters.map(function(e){return "Letra: "+e});

console.log(letters);
console.log(newLetters);




var letters = ['a', 'b', 'c'];

function concatLetters(l1 ,l2 ,l3 = 'c' ){
  return l1+' -- '+l2+' -- '+l3;
}
console.log(concatLetters('a','b')); // a -- b -- c
// (l1 ,l2 ) // a -- b -- undefined
console.log(concatLetters('a','b','d')); // a -- b -- d

// funcion para que se autollame al inicio de todo y cambiar el scope
{
    console.log('pepe');
}





const beer = {
    image_url: "",
    name: "Punk",
    tagline: "Punk tagline"
  }
  
  
  const element = `<div class="pagination">
    <select id="items-page-select">
      <option value="2">${beer.name}</option> // como meter variables en ES6
      <option value="5">${beer.tagline}</option>
      <option value="10">10 resultados</option>
    </select>
    <button class="pagination-item current">1</button>  
    <button class="pagination-item">2</button>  
    <button class="pagination-item">3</button>  
  </div>`;
                  
  
  console.log(element);
  
// output
<div class="pagination">
  <select id="items-page-select">
    <option value="2">Punk</option>
    <option value="5">Punk tagline</option>
    <option value="10">10 resultados</option>
  </select>
  <button class="pagination-item current">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item">3</button>
</div>
  
  
const name = "Punk";
const tagline: "Punk tagline";
  

// objeto antes:
const beer = {
    image_url: "",
    name: name,
    tagline: tagline
}
  
//objeto ES6
const beer = {
    image_url: "",
    name,
    tagline
}
  

//ES6
const {name, tagline} = beer;
// manera antigua
const name = beer.name;
const tagline = beer.tagline;

console.log(name)
console.log(tagline)
  
  
  
const list = [1,2,3];
//const a = list[0];
//const b = list[2];

const [a,b] = list;
const [a,,b] = list;

console.log(a) // 1,2
console.log(a) // 1,3



// Antes
let temp = a;
a = b;
b = temp;

// Nueva manera de asignar
[b,a] = [a,b]
  
  
  

function getMyBeer(){
    return {
      image_url: "",
      name: "Punk",
      tagline: "Punk tagline"
    }  
  }
  
  // Retorna un objeto y saca la info de ahi
  const {name, tagline} = getMyBeer();
  
  console.log(name);
  console.log(tagline);
  
  



function getMyBeer(){
    return {
      name: "Punk",
      tagline: "Punk tagline",
      ingredients :{
        hops: 20,
        water: 80
      }
    }  
  }

// Extraigo de un objeto para usarlo (en el console log), es como un shortcut
const {name, tagline, ingredients:{water: w,hops: h }} = getMyBeer();
//const {name:n, tagline:t} = getMyBeer(); // asignar n para usarlo despues

/* seria como hacer esto:
const result = getMyBeer();
const n = result.name;
const t = result.tagline;
const w = result.ingredients.water;
const h = result.ingredients.hops;
*/
  
  console.log(name);
  console.log(tagline);
  //console.log(ingredients);
  console.log(w);
  console.log(h);
  
  
  
// Enviar cosas de un archivo a otro, mayormente lo usaremos con funciones
//////app.js

function getMyBeer(){
    return {
      name: "Punk",
      tagline: "Punk tagline",
      ingredients :{
        hops: 20,
        water: 80
      }
    }  
  }
  
  /*
  const result = getMyBeer();
  const n = result.name;
  const t = result.tagline;
  const w = result.ingredients.water;
  const h = result.ingredients.hops;
  */
  
  const {name, tagline} = getMyBeer();
  
  
  export {
    name,
    tagline
  };
  // si solo queremos exportar uno
  export default name;
  
  
  //////app2.js
  
  // importar en el archivo que queremos usarlo
  import {name, tagline} from 'app.js'
  
  // si solo queremos exportar uno
  import name from 'app.js'

  


// forma antigua crear prototype y constructor
function Persona(name){
    this.name = name;
}

Persona.prototype.hello = function(){
    console.log("hola: ",this.name); 
}

const p = new Persona("Cris");

p.hello()
  

// Ahora se hace así
// meteremos las funciones en la clase
class NewPersona {
    constructor(name){
      this.name = name;
    }
      
    hello(){
      console.log("hola: ",this.name);
    }  
}
  
const p2 = new NewPersona("Cris2");
p2.hello();
  
// output
// hola:  Cris
// hola:  Cris2
  

const p2 = new NewPersona("Cris2");

p2.hello2 = function(){
  console.log("hola2: ",this.name);
}
p2.hello2();


// para que herede


///////////

class NewPersona {
    constructor(name){
      this.name = name;
    }
      
    hello(){
      console.log("hola: ",this.name);
    }
    
  }
  
  
  class Kid extends NewPersona {
    constructor(name){
      super(name);
    }  
  }
  
  
  const k = new Kid("CLA");
  
  k.hello()
  
  
  
  
// Herencias
///////////

class NewPersona {
    constructor(name, lastName){
      this.name = name;
      this.lastName = lastName;
    }
      
    hello(){
      console.log("hola: ",this.name, this.lastName);
    }
  }

  
  class Kid extends NewPersona {
    //constructor(name, lastName){
      //super(name, lastName);
    //}  
  }
  
  const k = new Kid("CLA", "Now");
  k.hello()
  
  const p = new NewPersona("Helen","Mirren");
  p.hello();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

                                   
                                   
                                   
                                   






