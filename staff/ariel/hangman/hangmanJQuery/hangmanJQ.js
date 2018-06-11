

function hangMan(){

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
    var guess = [];
    var cont = 0;

    var nombre = prompt('Ingresa tu nombre', 'nombre');

    // ELECCION ALEATORIA DE LA PALABRA

    function selectWord(frutas){

        var indice = Math.round(Math.random()*20);

        for (var i=0; i<frutas[indice].length; i++){
            palabra[i]=frutas[indice][i];
            incognita[i]='_'
        }

        return incognita, frutas[indice]
    };

    // LA CANTIDAD DE VIDAS ES 1,5 x LONGITUD DE LA PALABRA
    var vidas = Math.round(palabra.length * 1.5);

    alert('Hola ' + nombre.toUpperCase() + '\n\n La fruta tiene ' + frutas[indice].length + ' letras.      '+ incognita.join(' ') +'\n\n  y tienes ' + vidas + ' vidas para adivinarla');

    while (vidas > 0) {

        guess = prompt('La fruta es    ' + incognita.join(' ') +'\ntienes ' + vidas + ' vidas' + '\n\n Ingrese una letra', 'letra');

        for (i=0; i<palabra.length; i++){               // Analiza si la letra ya se ha ingresado con anterioridad
            if(guess === incognita[i]){
                alert ('La letra "' + guess.toUpperCase() + '" ya ha sido ingresada')
                guess = prompt('La fruta es    ' + incognita.join(' ') + '\n\n Ingrese una letra', 'letra');
            };
        };

        cont = 0;

        for (j=0; j<palabra.length; j++){

            if (guess === palabra[j]){
                incognita[j] = guess;
                cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
            } 
        }

        if (cont!= 0){


            if ( incognita.join() === palabra.join() ) {
                alert('FELICITACIONES HAS GANADO!!! \nLa fruta era:    ' + frutas[indice].toUpperCase());

            
                break;
            }

            alert ('Felicitaciones la letra "' + guess + '" está en la palabra. '+ '\n\nLa fruta es:     ' + incognita.join(' ') + '\n\nTienes ' + vidas +'vidas');

        } else if (cont == 0 ){
            vidas = vidas - 1;

            if (vidas == 0 ){
                alert('GAME OVER\n\nLa fruta era: ' + frutas[indice]);
                break;

            } else {
                alert('La letra "' + guess + '" no se encuentra en la palabra. \n\nLa fruta es: ' + incognita.join(' ') + '\n\nTe quedan ' + vidas + ' vidas');
            };
        }

    };
}
