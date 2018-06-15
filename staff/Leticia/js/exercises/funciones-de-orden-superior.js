
var beatles = ['John', 'George', 'Ringo', 'Paul']

// foreach aplica una funcion a cada elemento del array
// podemos guardar el resultado en una variable nueva
beatles.forEach(function(b){
  console.log(b);
})


for(var i=0 ; i<beatles.length ; i++){
  console.log(beatles[i]);
}

// lo que hace un foreach por dentro:
function nuestroForEach(arr, f){
    for(var i=0 ; i<arr.length ; i++){
      f(arr[i]);
    }
  }
  
nuestroForEach(beatles, logBeatle)




var beatles = ['John', 'George', 'Ringo', 'Paul']

function logBeatle(b, i, elArrayDeBeatles){
  console.log("El beatle: "+i+" es: "+b);
  console.log("El array completo es: ",elArrayDeBeatles)
}


for(var i=0 ; i<beatles.length ; i++){
  logBeatle(beatles[i]);
}

// Los argumentos son: elemento de array, indice de array, array completo
beatles.forEach(function(a, b, c){
  console.log("El beatle: " + b + " es: " + a);
  console.log("El array completo es: ", c)
})


function nuestroForEach(arr, f){
  for(var i=0 ; i<arr.length ; i++){
    f(arr[i], i, arr);
  }
}

nuestroForEach(beatles, logBeatle)


// Le añadimos al prototype una funcion nuestra
Array.prototype.nuestroForEach = function(arr, f){
    for(var i=0 ; i<arr.length ; i++){
      f(arr[i], i, arr);
    }
}
var a = [1,2,3];
console.log(a.nuestroForEach)
  
// otro ejemplo
function sumToArray(arr, suma){
    arr.forEach(function(e){
      console.log(e+suma)
    })    
}
var arr = [1,2,3] 
sumToArray(arr, 123)
  

// USANDO MAPS
// --------------------------------------------------------------
// produce un Array nuevo que sea el resultado de aplicar la funcion a cada elemento

// cambiar suma con foreach
var arr = [1,2,3]
var suma = 4;

arr.forEach(function(e,i){
  arr[i] = e + suma;
})

console.log(arr)

// cambiar suma con map
// va aplicar la funcion y sustituye cada elemento del array con la funcion y retorna un array nuevo
var arr = [1,2,3]
var suma = 4;

arr = arr.map(function(e,i){
  return e + suma;
})

console.log(arr)


// USANDO FILTER
// ------------------------------------------------------------
// no modifica el array
// nos devuelve un array nuevo que quita elementos filtrados

var arr = [1,2,3,4,1,2,10,5,6,7,8,4,9,10];

// devolver pares

// como antes, manualmente
var filtered = [];

for(var i=0 ; i<arr.length ; i++){
  if(arr[i] % 2 == 0){
    filtered.push(arr[i]);
  }
}
console.log("filtered manual: ", filtered);

// con filter
filtered = arr.filter(function(e){
  if(e % 2 == 0){
    return true;
  }
  
  return false;
})
console.log("filtered auto: ", filtered);
// output: filtered manual:  [ 2, 4, 6, 8, 10 ]


// Eliminar duplicados
var arr = [1,2,3,4,1,2,10,5,6,7,8,4,9,10];

filtered = arr.filter(function(e,i,arrayCompleto){
    console.log("elemento: ",e," --> indice: ",i," --> resultado: "+ (arrayCompleto.indexOf(e) == i));
    return arrayCompleto.indexOf(e) == i;
  })
  
console.log("filtered auto: ", filtered);
  


// EVERY
// QUE TODOS LOS ELEMENTOS CUMPLAN LA FUNCION

var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];

var result = arr.every(function(e){
  return e % 2 == 0;
})

console.log(result)

----

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
  
  

// SOME
// QUE AL MENOS ALGUN ELEMENTO CUMPLA LA FUNCION

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


// con some
var arr = [1,2,3,4,1,2,10,5,6,7,1,8,4,9,10];

var result = arr.some(function(e){
  return e == 222;
})

console.log(result)
  
  
// REDUCED
//   REDUCIR  un array a un unico valor
//   se llama a sí mismo para cada elemnto del array
//   retorna el estado actual, lleva un acumulador (suma)

var arr = [1,2,3];

var result = arr.reduce(function(suma, e, i, arr){
    //console.log("iteracion: "+ i +" elemento: "+ e +", llevo sumado: "+ suma +" //  devolveré: "+(e % 2 == 0 ? suma+e : suma));
    return suma + e;
},0); // 0 -> inicializar el acumulador

console.log(result);
    
    
// sumar pares
var result = arr.reduce(function(suma, e, i, arr){
    console.log("Iteracion: "+i+" // elemento: "+e+" // llevo sumado: "+suma+" // devolveré: "+(e % 2 == 0 ? suma+e : suma));
    return (e % 2 == 0 ? suma+e : suma);
    
},0)
  
console.log(result);
      
// Mostrar vocales de un texto
var vowels = "aeiou";
var arr = "el array completo es".split('');

var result = arr.reduce(function(suma, e, i, arr){
    return (vowels.includes(e)? suma+e : suma);
},'')
  
console.log(result);

// otra manera
var result = arr.reduce(function(suma, e, i, arr){
    return (vowels.toUpperCase().includes(e.toUpperCase())? suma+e : suma);    
},'')
  
console.log(result);
      
      


// exercises
//-------------------------------------------------------------------------------------------------

// Camel Case
// Write a high order function that take the array of months and create a new array 
// that contains the same months but with the first letter in upper case.

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

months.map(function(e, i){
    return e.substring(0,1).toUpperCase() + e.substring(1);
});


// citlas version
var arr2=[];

arr2 = months.map(function(e,i){
  return e.replace(e[0], e[0].toUpperCase());
})

console.log(arr2);
    
    

// Some Months
// Write a high order function that take the array of months and create a new array that contains only the months that begin with j.

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

var jMonths = months.filter(function(e){
    return e.substring(0,1) === 'j';
});

console.log(jMonths);


// citlas
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
var filtered = [];

filtered = months.filter(function(e){
  return (e[0]  == "j");
})

console.log(filtered);



// Count Vowels
// Write a high order function that counts all the vowels of the following text.

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'.split('');
var vowels = "aeiouAEIOU";

var result = loremIpsum.reduce(function(suma, e, i, arr){
    return (vowels.includes(e)? suma+e : suma);
},'').length;
  
console.log(result);

// profe
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'.split('');
var vowels = "aeiouAEIOU";

var result = loremIpsum.reduce(function(suma, e, i, arr){
    return (vowels.includes(e)? suma+1 : suma);
},0);
  
console.log(result);    

// ari
var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];

var nroDeVowels = loremIpsum.split("").filter(function(e, i, arr){
  return vowels.indexOf(e) >= 0;
})

console.log(nroDeVowels.length)



// Great Than Five Letters
// Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.

// profe
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function moreThanFive(e){
  return e.length >= 5;
}

var resultado = months.every(moreThanFive)
console.log(resultado);

var resultado = months.some(moreThanFive)
console.log(resultado);
  