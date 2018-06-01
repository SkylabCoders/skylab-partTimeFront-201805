// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

var sample = [1,2,34,4,4565,4,9,9,9];

function getLastN(x){
    var lastElements = parseInt(prompt('Ingrese el nro de elementos a visualizar'));
    if (lastElements = ''){
        lastElements = 1;
    };
    var resultado = sample.splice((sample.length-lastElements), lastElements);
    console.log(resultado);
}

getLastN(sample);