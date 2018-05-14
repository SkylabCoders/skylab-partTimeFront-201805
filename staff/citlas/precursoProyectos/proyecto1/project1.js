/* Calculator!
 ok -   Un único programa al que le pasarás dos parámetros y 
 ok --- el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
 ok --- El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
 
 ok---      Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
 
    El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.


      Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]*/


/*  Enviado -------------------------- sin corregir
var resultSum;
var resultRest;
var resultMult;
var resultDiv;

var results = [resultSum, resultRest, resultMult, resultDiv];


function sum(a, b) {
  if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined'){
   console.log('No es un número')
 } else   if (isNaN(a) || isNaN(b)){
    //console.log('No has metido un número')
    console.log('la raiz cuadrada de ' + a + ' es ' + Math.sqrt(a).toFixed(3));
  }
  else if (b == null){
   console.log('solo metio uno');
 }
 
  else {
    results[0] = a + b;
  //results.push(a);
  //results.push(b);
  //results.push(resultSum);
  results[1] = a - b;
  results[2] = a * b;
  results[3] = a / b;
  
  for (i=0;i<results.length;i++){
  if (results[i] % 1 !== 0){
    results[i] = results[i].toFixed(3);
  }}
  console.log(a + ' + ' + b + " = " + results[0] + ', '+ a + ' - ' + b + " = " + results[1] + ', '+ a + ' * ' + b + " = " + results[2] + ', '+ a + ' / ' + b + " = " + results[3])
  }
 
 
  
  
  
}


sum(true);
//console.log(results);
*/




// corregido ----------------------------------------------------
// 1. Variables globales => intenta usar las menos posibles...
// 2. Todo debería estra englobado en una unica función, cada funcionalidad del enunciado debería ser una función hija de esta, de forma que nos orientemos a la programación funcional (delegacion de responsabilidades por funciones) y adaptable (hacer funciones independientes que nos podamos llevar a otro entorno y seguirian funcionando igual)
//3. realiza multiples casos de uso:
/*
  calculator(3)
  calculator(4,2)
  calculator()
  calculator('pepe', 0)
  calculator(0)
  calculator(12, 'pepe')
  calculator('0,0')
*/
// es decir, debes volver a rehacer tu código para que funcione 100% con todos estos posibles casos (introducción al testeo de software)
//4. intenta user PUSH() array method para añadir resultados o variables en un array, no uses arrayNombre[0] = 'algo', es mejor usar métodos nativos que ya están orientados a tal fin

/*

function calculator(a, b) {
  
  var results = [];


  if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined' || typeof b === 'string' || typeof b === 'boolean'){
      console.log('No es un número')   
  } else   if (isNaN(a) || isNaN(b)){
      console.log('la raiz cuadrada de ' + a + ' es ' + Math.sqrt(a).toFixed(3));
  } else {
    results.push(a + b);
    results.push(a - b);
    results.push(a * b);
    results.push(a / b);
  
    console.log(results);  
  
    for (i=0;i<results.length;i++){
      if (results[i] % 1 !== 0){
        results[i] = results[i].toFixed(3);
    }
  }
    console.log(a + ' + ' + b + " = " + results[0] + ', '+ a + ' - ' + b + " = " + results[1] + ', '+ a + ' * ' + b + " = " + results[2] + ', '+ a + ' / ' + b + " = " + results[3])
  } 
}

calculator(3);
calculator(4,2);
calculator();
calculator('pepe', 0);
calculator(0);
calculator(12, 'pepe');
calculator('0,0');

*/
  
//SEGUNDA REVISION ---- usar el !== y definir cual de los dos valores no es un número
function calculator() {

  var results = [];
  var a = arguments[0]
  var b = arguments[1]
  console.log(arguments.length)

  if (arguments.length>2){
    var args = [].slice.call(arguments);
    console.log(args)
    sum(arguments)
    otraVez()
  } else {
  /*if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined' || typeof b === 'string' || typeof b === 'boolean'){
   console.log('Al menos uno de los valores que introduciste no es un número')
   */    

   if (typeof a !== 'number'){
   console.log('El primer valor introducido no es un número')
   otraVez()
   
   } else   if (typeof b === 'undefined'){
    console.log('la raiz cuadrada de ' + a + ' es ' + Math.sqrt(a).toFixed(3));
    otraVez()
   } else if (typeof b !== 'number'){
   console.log('El segundo valor que has introducido no es un número')  
   otraVez()
   } else if (typeof a !== 'number' && typeof b === 'number'){
   console.log('Ninguno de los dos valores que introduciste es un número')
   otraVez()
   }
 
 
  else {
    
    results.push(a + b);
    results.push(a - b);
    results.push(a * b);
    results.push(a / b);
 
    
  for (i=0;i<results.length;i++){
  if (results[i] % 1 !== 0){
    results[i] = results[i].toFixed(3);//para dejar solo 3 decimales
  }}
  console.log(a + ' + ' + b + " = " + results[0] + ', '+ a + ' - ' + b + " = " + results[1] + ', '+ a + ' * ' + b + " = " + results[2] + ', '+ a + ' / ' + b + " = " + results[3])
  otraVez()
  } 
}

  function sum( arguments ) {
  var sum = 0;
  for( var el in arguments ) {
    if( arguments.hasOwnProperty( el ) ) {
      sum += parseFloat( arguments[el] );
    }
  }
  console.log('la suma de los elementos es ' + sum)
  return sum;
}//fin sum

  function otraVez(){
    var r = confirm("Do you want new numbers?");
    if (r == true) {
        var txt = prompt("Escoje nuevos números, separados por una coma");
        console.log(txt)
        console.log(typeof(txt))
        var array = txt.split(',');
        console.log('este es el array ' + array)
        var arrayNums =[]
        for (i=0;i<array.length;i++){
          arrayNums[i]= parseInt(array[i])
        }
        console.log('este es el arrayNums ' + arrayNums)
        console.log(typeof(arrayNums[0]))
        console.log(arrayNums[0])
        Number(arrayNums[0])
        console.log(typeof(arrayNums[0]))
        
        calculator(arrayNums)
    } else {
        alert("Ok, bye!!");
    }
  }//fin otraVez


}
  calculator(3,2,4);
  calculator(3);
  calculator(4,2);
  calculator();
  calculator('pepe', 0);
  calculator(0);
  calculator(12, 'pepe');
  calculator('0,0');


