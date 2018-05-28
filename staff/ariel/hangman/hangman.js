

var frutas = [
    'manzana',
    'banana',
    'pera',
    'fresa',
    'cereza',
    'anana',
    'tomate',
    'naranja',
    'clementina',
    'chirimoya',
    'pomelo',
    'melocoton',
    'ciruela',
    'lichi',
    'melon',
    'sandia',
    'mango',
    'papaya',
    'higos',
    'maracuya',
    'guanabana'
];
var palabra = [];
var incognita = [];
var guess = '';
var cont = 0;

var nombre = prompt('Ingresa tu nombre', 'nombre');

var indice = Math.round(Math.random()*20);


for (var i=0; i<frutas[indice].length; i++){
    palabra[i]=frutas[indice][i];
    incognita[i]='_'
}


var vidas = Math.round(palabra.length * 1.5);

console.log('La fruta tiene ' + frutas[indice].length + ' letras');
console.log('');
console.log(incognita.join(' '));
console.log('');
console.log(nombre + ' tienes ' + vidas + ' vidas');

for (i=0; i<vidas; i++){

    console.log('La fruta es: ' + incognita.join(' '));
    console.log('');

    guess = prompt('Ingrese una letra', 'letra');
    cont = 0;

    for (j=0; j<palabra.length; j++){

        if (guess === palabra[j]){
            incognita[j] = guess;
            cont = cont+1;
        } 
    }

    if (cont!= 0){
        alert ('Felicitaciones la letra "' + guess + '" está en la palabra');
        alert ('La furta es: ' + incognita.join(' '));

        if ( incognita.join() === palabra.join() ) {
            alert('FELICITACIONES HAS GANADO');
            break;
        }

    } else if (cont == 0 ){
        vidas = vidas - 1;

        if (vidas == 0 ){
            alert('GAME OVER');
            break;

        } else {
            alert('La letra "' + guess + '" no se encuentra en la palabra');
            alert ('Te quedan ' + vidas + ' vidas');
        };
    }


 
}

