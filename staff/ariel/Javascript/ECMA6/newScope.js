

// ===================================================

function f(){
    var name = "cris";
}
                    // AMBAS EXPRESIONES SON IGUALES
const f = ()=>{
  var name = "cris";
}


// ==================================================



var letters = ['a', 'b', 'c'];

var newLetters = letters.map((e) => {return "Letra: "+e});


console.log(letters);
console.log(newLetters);


// Con las Arrow functions si tengo un solo parámetro, puedo obviar los paréntesis
// Con las Arrow functions si tengo un solo return, puedo obviar las llaves y el return

var newLetters = letters.map(e =>  "Letra: "+e);

// ==================================================

// Ahora se le puede aseignar un valor por default a un parámetro en este caso l2 = 'c'. Si le paso valor (en este caso d) lo tomará, si no le paso nada
// toma el valor del default

var letters = ['a', 'b', 'c'];

function concatLetters(l1 ,l2 ,l3 = 'c' ){
  return l1+' -- '+l2+' -- '+l3;
}

console.log(concatLetters('a','b','d'));

// ==================================================

// También puedo definir funciones que se autollamen en el inicio de todo:

{
    console.log("INICIO");
}

// ==================================================


const beer = {
    image_url: "",
    name: "Punk",
    tagline: "Punk tagline"
  }
  
  beer.name = 'Ase'   //--> no lo puedo hacer porque es una "const" para ello debería pasarla a "let"


// ==================================================


const beer = {
    image_url: "",
    name: "Punk",
    tagline: "Punk tagline"
  }
  
  
  const element = `<div class="pagination">
    <select id="items-page-select">
      <option value="2">${beer.name}</option>
      <option value="5">${beer.tagline}</option>
      <option value="10">10 resultados</option>
    </select>
    <button class="pagination-item current">1</button>  
    <button class="pagination-item">2</button>  
    <button class="pagination-item">3</button>  
  </div>`;
                  
  
  console.log(element);

  // ==================================================


const name = "Punk";
const tagline: "Punk tagline";

const beer = {
  image_url: "",
  name,                 // ---> con el ESCM6 puedo definir las keys de esta forma
  tagline
}


const element = `<div class="pagination">
  <select id="items-page-select">
    <option value="2">${beer.name}</option>
    <option value="5">${beer.tagline}</option>
    <option value="10">10 resultados</option>
  </select>
  <button class="pagination-item current">1</button>  
  <button class="pagination-item">2</button>  
  <button class="pagination-item">3</button>  
</div>`;
                

console.log(element);

// ==================================================

const beer = {
    image_url: "",
    name: "Punk",
    tagline: "Punk tagline"
  }
  
  const {name, tagline} = beer;    // --> novedad de ESCM6
//  const name = beer.name;    // --> ya no necesito hacerlo por separado
//  const tagline = beer.tagline;

  
  console.log(name)
  console.log(tagline)

  // ==================================================


const list = [1,2,3];   //nueva forma de tomar valores de un array
//const a = list[0];
//const b = list[2];

const [a,,b] = list;

console.log(a)
console.log(b)

// ==================================================

const list = [1,2,3];   //nueva forma de intercambiar valores de dos variables. Ya no necesito el "temp"
//const a = list[0];
//const b = list[2];

let [a,,b] = list;

console.log(a)
console.log(b)

// ==================================================

function getMyBeer(){
    return {
      image_url: "",
      name: "Punk",
      tagline: "Punk tagline"
    }  
  }
  
  
  const {name, tagline} = getMyBeer();
  
  console.log(name);
  console.log(tagline);

// ==================================================
  

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
  
  
  const {name, tagline, ingredients:{water: w,hops: h }} = getMyBeer();
  // de aquí defino 4 const:

    // const name = valor en getMyBeer
    // const tagline = valor en getMyBeer
    // const w = valor en getMyBeer
    // const h = valor en getMyBeer

    // antes lo hacía:
    // const result = getMyBeer();
    // const n = result.name;
    // const t = result.tagline;
    // const w = result.ingredients.water;
    // const h = result.ingredients.hops;

  
  console.log(name);
  console.log(tagline);
  //console.log(ingredients);
  console.log(w);
  console.log(h);


  // si lo hago así:


const {name:n, tagline:t} = getMyBeer();

// esto es lo mismo que:

const n = getMyBeer.name;
const t = getMyBeer.tagline;


  





