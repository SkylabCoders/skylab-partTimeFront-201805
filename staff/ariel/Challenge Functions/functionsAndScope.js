

function calculateArea (width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area,volume];
  }
  
  var area1 = calculateArea(2,3, 2);
  
  var area2 = calculateArea(6,2,9);
  
  
  console.log("Area: ", area1[0])
  console.log("Volumen: ", area1[1])
  console.log(area2)
  

// Puedo retornar más de un valor por medio de los arrays
// Hasta que no llamo la función, las var area y volumen no existen.



// Se pueden pasar funciones como argumentos también:


function suma(a,b){
    return a+b;
}

function multiplicar(a,b){
    return a*b
}
  
console.log(multiplicar(2,suma(3,1)));
  
// También puedo pasar parámetros a una función y uno de ellos es otra función que indica qué hacer con los otros dos parámetros:


var s =  function(a,b){
    return a+b;
  }
  
  var m = function(a,b){
    return a*b;
  }
  
  //console.log(s(3,1));
  
  function operacion(a,b,funcion){
    return funcion(a , b)
  }
  
  console.log(operacion(2,1,m));
  

  // otro ejemplo de llamar función dentro de una función:

  var report = function(valorReportado){
    console.log(valorReportado);
  }
  
  function operacion(f, a, b){
    return f(a , b)
  }
  
  operacion(report, 2, 3); 

  // FUNCION RECURSIVA: se llama así misma 00>
  // debe implicar un fin para que no se cuelgue


var a = [2,3,4,5];

function sumaRecursiva(arr){
  var element = arr.pop();
  return element + sumaRecursiva(arr);    // --> Esto así no se para nunca !!!!
}

sumaRecursiva(a)


// para evitar la iteración infinita se definen LOS "CASOS BASES"

// VER CUADERNO SUMA RECURSIVA

var a = [2,3,4,5];

function sumaRecursiva(arr){
  if(arr.length == 1){      // ---> caso base
    return arr.pop();
    
  }else{
    var element = arr.pop();
    return element + sumaRecursiva(arr);  
  }
}

console.log(sumaRecursiva(a))  

// LA RECURSION VA HASTA EL CASO FINAL Y SE DEVUELVE
  
// EJEMPLO CON LETRAS:

var a = ["a","b","c","d"];

function sumaRecursiva(arr){
  console.log(arr);
  if(arr.length == 1){
    return arr.pop();
    
  }else{
    var element = arr.pop();
    return element + sumaRecursiva(arr);  
  }
}
console.log(sumaRecursiva(a))
  

// EJEMPLO, SUCESION DE FIBONACCI

// CON FOR

function fibFor(n){
    if(n == 0) {
      return null;
    }
    if(n == 1){
      return [0]
    }
    if(n == 2){
      return [0, 1];
    }
    
    var arr = [ 0, 1];
    
    for(var i=2 ; i < n ; i++){
      arr[i] = arr[i-2] + arr[i-1];
    }
    
    return arr;
  }
  
  console.log(fibFor(14));

  // CON FUNCION RECURSIVA


function fibonacci(n){
    if(n == 0){
      return [0];
      
    }else if(n == 1){           // ---> Caso base, nunca llegará a n=0 salvo que se lo ingrese como n=0
      return [0, 1];
  
    }else{
      var temp = fibonacci(n-1)
      return fibonacci(n-1).push(temp[-1]);
    }
  }
  console.log(fibonacci(2))


  // VARIABLES / SCOPE / ALCANCE 


var abuelo = "Vicente";

function padre(){
  this.padre = "Carlos";
  
  function hijo(){
    var hijo = "Cristiam"
    console.log(abuelo, padre, hijo);
  }
  
  hijo();
}

console.log(padre())


// INTERESANTE


var a = "ASDASD";

function myF(){
  var b = "QWEQWEQWE"  
  console.log("myF: ", b)
}

myF()

console.log(a);
  
  


