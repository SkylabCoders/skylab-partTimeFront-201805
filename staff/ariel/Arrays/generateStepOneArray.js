/*### generateArraySteps: Write a JavaScript function to generate an array between two integers of 1 step length.

    Test Data :
    console.log(rangeBetwee(4, 7)); 
    [4, 5, 6, 7]
    console.log(rangeBetwee(-4, 7));
    [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

function arraySteps(){
    var arraySteps = [];
    var elementoInicial = parseInt(prompt('Ingrese el valor del elemento inicial del array: ', 'valor inicial'));
    var elementoFinal = parseInt(prompt('Ingrese el valor del elemento final del array: ', 'valor final'));

    for(i=0; i<= (elementoFinal-elementoInicial); i++){
        arraySteps[i] = (elementoInicial + i);
    };

    alert('El array generado con step 1 es:  ' + arraySteps);
};

arraySteps();