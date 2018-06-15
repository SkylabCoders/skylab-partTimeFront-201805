// ### getRandom: Write a JavaScript function to get a random item from an array.


var randomIndex = 0;
var generated = [];

function getRandom(){



    var elementos = prompt('Ingrese la longitud del array', '#');

    if (elementos > 10){

        alert('el array  no puede tener más de 10 elementos')
        getRandom();

    } else if (elementos < 1){
        alert('el valor debe ser mayor a 0');
        getRandom();
    } else {

        for (i=0; i<elementos; i++){
            generated[i] = (Math.round(Math.random()*100))
        }
    }

    randomIndex = Math.round(Math.random()*100);

    while (randomIndex > (elementos-1)){
        randomIndex = Math.round(Math.random()*10)
    };



    console.log('El elemento correspondiente al índice ' + randomIndex+ ' es: ' + generated[randomIndex]);

}

getRandom()