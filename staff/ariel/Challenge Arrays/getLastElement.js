// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

var sample = [1,2,34,4,4565,4,9,9,9];

function getLastN(x){
    var n = parseInt(prompt('Ingrese el nro de elementos a visualizar'));
    if (n == ''){
        n = 1;
    };
    var resultado = sample.splice((sample.length-n), n);
    console.log(resultado);
}

getLastN(sample);