
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


//////app2.js


import {name, tagline} from 'app.js'


// o si solo importo/eporto una variable

export default name,
    
  
//////app2.js
  
import name from 'app.js'



// =============================================================

// Antes

function Persona(name){
    this.name = name;
  }
  
  Persona.prototype.hello = function(){
    console.log("hola: ",this.name);
    
  }
  
  const p = new Persona("Cris");
  
  p.hello()

  
// Ahora


class NewPersona {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    hello(){
        console.log("hola: ",this.name);
    }
  
}

const p2 = new NewPersona("Cris2");
p2.hello();


// Y PARA HEREDAR 

class Kid extends NewPersona{
    constructor (name, lastName){
    super(name, lastName);   // super hace referencia a constructor del padre
}
};

const k = new Kid("CLA", "now");

k.hello()

// si la clase hija es igual a la del padre no tengo que llamar al costructor

class Kid extends NewPersona{
    
}
};

const k = new Kid("CLA", "now");

k.hello()


