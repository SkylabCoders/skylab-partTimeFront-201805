// sortItems Write a JavaScript program to sort the items of an array.

var generated = [];

function getSorted(){

    var longitud = parseInt(prompt('Ingrese la longitud del array'));

    console.log(longitud);

    for (i=0; i<longitud; i++){
        generated[i] = (Math.round(Math.random()*100));

    }

    console.log('El array es: ' + generated)

    var compare = function(a,b){
        if(a < b){
            return -1;
        } 
        return 1;
    };

    console.log('El array ordenado es: ' + generated.sort(compare));

}

getSorted();