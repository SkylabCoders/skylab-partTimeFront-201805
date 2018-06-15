
// ---> forEach

var beatles = ['John', 'George', 'Ringo', 'Paul'];

// Función tradicional:

function logBeatle(b){
    console.log(b);
}

// Iterando:

for (i=0; i< b.length; i++){
    logBeatle(beatles[i]);
}

// CON forEach()

beatles.forEach(logBeatle)

// Lo usual  es definir la función dentro del forEach:
                                                        // --> IMPORTANTE :
beatles.forEach(function(b, i, elArrayDeBeatles){     // ---> La función que le pase al for Each aceptará como argumentos:  a, i , arr
    console.log("El beatle: "+i+" es: "+b);             // --> a es el elemento de arr, arr es el array  e "i" es el índice.
    console.log("El array completo es: ",elArrayDeBeatles)
  })
  

// Ejemplo                      // --> EL arrray no cambia
function sumToArray(arr, suma){
    arr.forEach(function(e){
      console.log(e+suma)
    })
    
  }
  var arr = [1,2,3]
  
  sumToArray(arr, 123)
  
//-------------------------

var arr = [1,2,3]   // EN ESTE CASO EL ARRAY SI CAMBIARIA 
var suma = 4;

arr.forEach(function(e,i){
  arr[i] = e + suma;
})

console.log(arr)

// --------------------------

// FUNCION MAP()    ---> También se le aplica una función que modifica los elementos del array original

var arr = [1,2,3]
var suma = 4;

arr = arr.map(function(e,i){
  return e + suma;
})

console.log(arr)


// --------------

var arr2 = arr.map(function(e,i){
    return e + suma;
  })
  
  console.log("Luego del map: ",arr2)

  // --------------------------

// FUNCION FILTER()



var clon = [];                      // --> Así lo haríamos a lo gaucho
var arr = [1,2,3,4,5,6,7,8,9,10];

var filtered = [];

for(var i=0 ; i<arr.length ; i++){
  if(arr[i] % 2 == 0){
    filtered.push(arr[i]);
  }
}

console.log("filtered manual: ", filtered);


filtered = arr.filter(function(e){   // --> AUSando el filter
  if(e % 2 == 0){
    return true;
  }
  
  return false;
})

console.log("filtered auto: ", filtered);


// EJEMPLO, ELIMINAR ELEMENTOS REPETIDOS

var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];

var filtered = [];

for(var i=0 ; i<arr.length ; i++){
  if(arr[i] % 2 == 0){
    filtered.push(arr[i]);
  }
}

//console.log("filtered manual: ", filtered);


filtered = arr.filter(function(e,i,arrayCompleto){
  return arrayCompleto.indexOf(e) == i;
})

console.log("filtered auto: ", filtered);


// FUNCTION EVERY()

var clon = [];
var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];

var result = arr.every(function(e){
  return e % 2 == 0;
})

console.log(result)


// ------

var clon = [];
var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];



function myEvery(arr, cond){
  var result = true;
  
  for(var i=0 ; i<arr.length ; i++){
    result = (result && cond(arr[i]));  
  }
  
  return result;
}

console.log(myEvery(arr, function(e){
  return e % 2 == 0;
}))

// FUNCTION SOME()


  // Ejemplo evaluar si al menos hay un par " a lo gaucho"
var clon = [];
var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];


function mySome(arr, cond){  
  for(var i=0 ; i<arr.length ; i++){
    if(cond(arr[i])){
      return true;
    }
  }
  
  return false;
}

console.log(mySome(arr, function(e){
  return e % 2 == 0;
}))


// -------------------


// con some()

var clon = [];
var arr = [2,1,3,5,7,9,4,6,8,10];


var result = arr.some(function(e){
  return e%2 == 0;         // -->  boolean
})

console.log(result)


// -------------------


// FUNCTION REDUCE(f, s)

// ej sumar los nros de  un array

var arr = [1,2,3];


var result = arr.reduce(function(suma, e, i, arr){
  console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(suma+e));
  return suma + e;
},0)

console.log(result);

// ej sumar los nros pares de  un array

var arr = [1,2,3,4,5,6,7,8,9,10];


var result = arr.reduce(function(suma, e, i, arr){
  console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(e % 2 == 0 ? suma+e : suma));
  if(e % 2 == 0){
    return suma + e;  
    
  }else{
    return suma;
  }
  
},0)

console.log(result);

// ----  más optimizado:

var result = arr.reduce(function(suma, e, i, arr){
    console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(e % 2 == 0 ? suma+e : suma));
    return (e % 2 == 0 ? suma+e : suma);
    
  },0)
  
  console.log(result);

  // Mostras qué vocales aparecen

var arr = "El array completo es".split('');
var vowels = "aeiou";


var result = arr.reduce(function(suma, e, i, arr){
  //console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(e % 2 == 0 ? suma+e : suma));
  return (vowels.includes(e)? suma+e : suma);
  
},'')

console.log(result);

// Eliminar las vocales

var arr = "El array completo es".split('');
var vowels = "aeiou";


var result = arr.reduce(function(suma, e, i, arr){
  //console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(e % 2 == 0 ? suma+e : suma));
  return (!vowels.toUpperCase().includes(e.toUpperCase())? suma+e : suma);
  
},'')

console.log(result);
    
    
    
    





