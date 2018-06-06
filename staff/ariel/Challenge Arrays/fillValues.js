/*### fillArray

Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : 
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

*/

var letters = ["a", 'b', "c", 'd', "e", 'f', "g", 'h', "i", 'j', "k", 'l', "m", 'n', "o", 'p', "q", 'r', "s", 't', "u", 'v', "w", 'x', "y", 'z']
var result = [];


function fillValues(x,y,z){

    var x = window.prompt('Ingrese el valor de la primera letra', 'letra inicial');
    var y = window.prompt('Ingrese el valor de la última letra', 'letra final');
    var z = parseInt(window.prompt('Ingrese el intervalo entre letras', 'valor intervalo'));

    indiceX = letters.indexOf(x);
    indiceY = letters.indexOf(y);


    for( var i=indiceX; i<indiceY; i=i+z) {
        result.push(letters[i]);
    } 


    console.log('El array resultante es: ', result)
};

fillValues()

