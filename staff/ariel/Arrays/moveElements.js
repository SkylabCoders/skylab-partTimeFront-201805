// ### moveElement Write a JavaScript function to move an array element from one position to another.


var sampleArray = [];
var copyArray = [];
var mover = '';
var first = 0;
var second = 0;
var trans = 0;


elementos = Math.round(Math.random()*20);

// GENERA EL ARRAY
for (var i=0; i<elementos; i++){
    sampleArray[i] = (Math.round(Math.random()*10));
    copyArray[i] = sampleArray[i];
};

    
mover = prompt('El array es:  '+ sampleArray + '\n\nDesea mover elementos?','si / no');

if (mover.toLowerCase() === 'si' ){

    function moveElements(){
        first = parseInt(prompt('El array es:  '+ sampleArray + '\n\nIndique el elemento 1 que desea mover','primer elemento'));
        if(first > sampleArray.length || first < 0){
            prompt('Esa posición no existe ! \n La posición debe estar entre 0 y '+(elementos-1));
        };
        second = parseInt(prompt('El array es:  '+ sampleArray + '\n\nIndique el elemento final del bloque/elemento que desea mover','segundo elemento'));
        if(second > sampleArray.length || second < 0){
            prompt('Esa posición no existe ! \n La posición debe estar entre 0 y '+(elementos-1));
        };

        trans = sampleArray[first];
        sampleArray[first] = sampleArray[second];
        sampleArray[second] = trans;

        mover = prompt('El array original es:   ' + copyArray + '\n\nElemento 1 = ' + first + '\nElemento 2 = ' + end + '\n\nEl array modificado es:   ' + sampleArray + '\n\nDesea hacer más cambios?', 'si / no');


        if (mover.toLowerCase() === 'si' ){
            moveElements();
        }

    } 
} 

moveElements();