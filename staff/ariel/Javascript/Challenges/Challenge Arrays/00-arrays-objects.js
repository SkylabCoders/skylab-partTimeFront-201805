/*
var beatles = ['John', 'George', 'Ringo', 'Paul'];
var rollings = ['Mick', 'Keith', 'Charlie', 'Ron']


var all = beatles.concat(rollings)
console.log(all.indexOf('Charlie'))
console.log(beatles);
console.log(rollings);


// AGREGAR UN ELEMENYO OJO QUE SI PONGO MAL EL INDICE PUEDO CAMBIAR UN ELEMENTO QUE YA EXISTE
beatles[4] = "Pete";
console.log(beatles);

// CON EL METODO PUSH SIEMPRE VA AL FINAL Y NO SE PISA INFO
beatles.push("Pete");

// shift y unshift me permiten quitar o poner en el principio
// push y pop hacen lo mismo al final del array


console.log(beatles.sort()); //ordena algabéticamente o de mneor a mayor

console.log(beatles.reverse()); // inveierte el orden


// SLICE
//  selecciona parte del array --> no modifica el array final
console.log(beatles.slice(1,2));  // se indica pos inicial (inclusive) y final (exclusive)

// SPLICE
console.log(beatles.splice(1,3));  // a partir del 1 remueve 3
// si le agrego un 3er parámetro puedo ingresar un elemento:

console.log(beatles.splice(1,2,'Pete','Yoko'));




//isArray Write a JavaScript function to check whether an input is an array or not.

var x = [];

function esArray(x){
    if (typeof x == 'array') {
        console.log('Es Array');
    } else { 
        console.log('No es array');
    }
}

// joinElements Write a simple JavaScript program to join all elements of the following array into a string.

var beatles = ['John','George','Ringo','Paul']

function juntar(x){
    console.log(x.join('-'));
}

juntar(beatles);

// array_Clone Write a JavaScript function to clone an array.

var x = [];
var y = [];

function clonar(x){
    for (var i =0; i< x.length; i++){
    y[i] = x[i];
    }
};

//  findDifferences: Write a JavaScript function to find the difference of two arra

var x1 = [2,4,6,8,3];
var x2 = [2,5,7];
var x3 = [];


for (i=0; i < x1.length; i++){

    var esta = false;

    for (j=0; j<x2.length; j++){

        if (x1[i] === x2[j]){
        esta = true;
                 
        break;

        }
    }  
    
    if (!esta) {
        x3.push(x1[i]);
    }
}

for (i=0; i<x2.length; i++){
    var esta = false;
    for (j=0; j<x1.length; j++){
        if (x2[i] == x1[j]){
        esta = true;
        break;
        }
    }  
    if (!esta){
        x3.push(x2[i]);
    }
} 
console.log('las diferencias son:' + x3) 


// OTRA ALTENRATIVA


var array1 = [1,2,3,4,5,6,7];
var array2 = [1,2,4,5,6,7,8];
var temp = [];


for (var i in array1) {
  if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
  if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}

console.log(temp);


// Sum and Product: Write a JavaScript program to compute the sum and product of an array of integers.

var sample = [8,44,-1.45,3]
var sum = 0;
var prod = 1;

function sumProd(y){
    for (i=0; i<y.length; i++){
        sum = sum + y[i];
        prod = prod * y[i];
    }

    console.log('La suma es: '+ sum +'; y el producto es: ' + prod);
}

sumProd(sample);

//addItems: Write a JavaScript program to add items in an blank array and display the items.

var sample = [];
var resultado = [];

function addItems(){

    var elementos = prompt('Ingrese el nro de elementos', '#');

    for (i=1; i<=elementos; i++){
        var item = prompt('Ingrese el elemento ' + i + ' al array')
        resultado.push(item);
    };

    console.log('El array es: ' + resultado);
};

addItems();



// generateArrayLength: Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting i.

var resultado = [];

function addIncreased(){

    var elementos = prompt('Ingrese la longitud del array', '#');

    resultado[0] = parseInt(prompt('Ingrese el primer elemento de la array', 'valor entero'));

    for (i=1; i<elementos; i++){

        resultado[i]=resultado[i-1]+1;
    }

    console.log(resultado)
}

addIncreased();

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


// ### findDuplicates: Write a JavaScript program to find duplicate values in a JavaScript array.

// NOTA: NO LOGRO QUE EL ARRAY REPEATED NO MUESTRE LOS ELMENTOS REPETIDOS MAS DE UNA VEZ

var generated = [];
var repeated = [];
var elementos = 1;

function findDuplicates() {
   elementos = Math.round(Math.random()*100);

    console.log('EL array tendrá: ' + elementos + ' elementos.')


    // GENERA EL ARRAY
    for (var i=0; i<elementos; i++){
        generated[i] = (Math.round(Math.random()*20))
    };

    //COMPARACION CREAR ARRAY REPETIDOS
    for (i=0; i < elementos; i++){
        
        for (var j=(i+1); j<=elementos; j++){
            
            if (generated[i] === generated[j]){
                repeated.push(generated[i]); 
                break;
            }
        }
    }


    // ORDENAR EL ARRAY REPEATED
    var compare = function(a,b){
        if(a < b){
            return -1;
        } 
        return 1;
    };

    
    // ELIMINAR DUPLICADOS DEL ARRAY REPEATED
    for (var k=0; k < repeated.length; k++){
        
        for (var l=repeated.length-1; l>k; l--){
            
            if (repeated[k] === repeated[l]){
                repeated.splice(l,1);
            }
        }
    }

    repeated.sort(compare);

    // IMPRIMIR 
    console.log('El array generado es: ' + generated);
    console.log('');
    console.log('Los elementos repetidos son: ' + repeated);
    console.log('');
    console.log('La cantidad de elementos repetidos es: ' + repeated.length)

}

findDuplicates()




// ### mergeArrays: Write a JavaScript function to merge two arrays and removes all duplicates elements.

var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 

function mergeArrays(){

    var array3 = array1.concat(array2);

   for (var k=0; k < array3.length; k++){
        
        for (var l=array3.length-1; l>k; l--){
            
            if (array3[k] === array3[l]){
                array3.splice(l,1);
            }
        }
    }

    console.log('El array concatenado es: ' + array3);
}

mergeArrays()


    Test data :
    var array1 = [1, 2, 3]; 
    var array2 = [2, 30, 1]; 
    console.log(merge_array(array1, array2));
    [3, 2, 30, 1]


    
// ### separateEven:  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

var nro = [];


function separateEven(){
    var cifras = Math.round(Math.random()*10);

    if (cifras<2){
        alert('EL nro debe tener al menos 2 cifras');
        separateEven();
    };

    for (var i=0; i<cifras; i++){
        nro[i] = (Math.round(Math.random()*10))
    };

    console.log('EL nro generado es: ' + nro);
    

    for (i=0; i < cifras ; i++){

        if(nro[i]==='-'){
            continue;
        };

        if(Number.isInteger(nro[i]/2) && Number.isInteger(nro[(i+1)]/2)){
            nro.splice((i+1),0,'-');
        };
    }


    console.log('El nro modificado es: ' + nro.join(''));

}

separateEven()



// ### mostFrequentItem Write a JavaScript program to find the most frequent item of an array.

    //Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //Sample Output : a ( 5 times ) 


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var repetitions = [];
var max = 0;
var i = 0;

function mostFreq(){

    for (var i=0; i<arr1.length; i++){
        
        var count = 1;

        for( var j=i+1; j<arr1.length; j++)

            if( arr1[i]==arr1[j]){
            count = count+1
        }

        repetitions.push(count);

    }

    console.log('Repeticiones: ' + repetitions);
    max = Math.max.apply(null, repetitions);
    i = repetitions.indexOf(5);
    console.log('El valor que más se repite es el: ' + arr1[i]);
    console.log('y se repite: ' + max + ' veces.')

}

mostFreq();



// ### moveElement Write a JavaScript function to move an array element from one i to another.


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

    //Test Data :
    //console.log(move([10, 20, 30, 40, 50], 0, 2));
    //[20, 30, 10, 40, 50]
    //console.log(move([10, 20, 30, 40, 50], -1, -2));
    //[10, 20, 30, 50, 40]





//### swapCase: Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

var txtString = prompt('Ingrese una palabra, frase o texto','texto aquí');
var txtArray = [];


for (i=0; i<txtString.length; i++){
    if (txtString[i] ==='.' || txtString[i] ===',' ||txtString[i] ==='-'||  txtString[i] ==='-'){
        continue;
    } else if (txtString[i] === txtString[i].toUpperCase()) {
        txtArray[i] = txtString[i].toLowerCase();
    } else {
        txtArray[i] = txtString[i].toUpperCase();
    }
}



alert('El texto original es: "' + txtString + '" \n\nEl texto modificado es: ' + txtArray.join(''));





// ### Print elements array: Write a JavaScript program which prints the elements of the following array.
//Note : Use nested for loops.

    var sampleArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

    for (var i=0; i<sampleArray.length; i++){
        console.log('Row ' + i);
        for (var j=0; j<sampleArray[i].length; j++){
            console.log(sampleArray[i][j]);
        };
    };


   // Sample Output : 
    //"row 0" 
    //" 1" 
    //" 2" 
    //" 1"
    //" 24"
    //"row 1" 

   
// ### array_filled (string): Write a JavaScript function to create a specified number of elements with pre-filled string value array.

function preFilled(){
    var sampleString = '';
    var elements = 0;
    var generatedArray = [];

    sampleString = prompt('Ingrese el valor de los elementos');
    elements = prompt('Ingrese la cantidad de elementos del array', 'elementos');

    for (i=0; i<elements; i++){
        generatedArray[i] = sampleString;
    }

    console.log('El array generado es: ' + generatedArray);


        // Test Data :
        // console.log(array_filled(3, 'default value')); 
        // ["default value", "default value", "default value"]
        // console.log(array_filled(4, 'password'));
        // ["password", "password", "password", "password"]
};

preFilled();

// ### Sum squares: Write a JavaScript program to find the sum of squares of a numeric vector.

function sumSquares(){
    var sum = 0;
    var generated = [];

    // GENERA EL ARRAY
    elementos = Math.round(Math.random()*1000);
    for (var i=0; i<elementos; i++){
        generated[i] = (Math.round(Math.random()*10000))
    };

    for (var j=0; j<elementos; j++){
        sum = sum + generated[j]*generated[j];
    }

    console.log('El array es: '+ generated + '\n\n La suma de los cuadrados de todos los elementos es: ' + sum);
}
sumSquares()


 
//### removeDuplicate: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


function replaceDup(){
    var array1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = [];
    var elementos = Math.round(Math.random()*100);
    var parImpar = 0;

    // PRIMERA ITERACION PARA ASIGNAR ALEATORIAMENTE LETRAS O NROS AL ARRAY GENERADO
    for (var i = 0; i<elementos; i++){
        parImpar = (Math.round(Math.random()*25));
        if (Number.isInteger(parImpar/2)){
            generated[i] = array1[parImpar];
        } else {
            generated[i] = Math.round(Math.random()*100);
        };
    };

    console.log(array1[parImpar]);

    console.log('El array generado es :   ' + generated)
    console.log('');


    // SEGUND ITERACION PARA COMPARAR ELEMENTOS DE UN MISMO ARRAY
    for (i=0; i<generated.length; i++){
        for (j=(i+1); j<=elementos; j++){
            if(generated[i] === generated[j]){
                generated.splice(j,1);
            };
        };
    };

    console.log('El array sin repeticiones es :   ' + generated)
};

replaceDup();

*/
/*
// ### showChoices We have the following arrays : Write a JavaScript program to display the colors in the following way :
//"1st choice is Blue ."
//"2nd choice is Green."
// "3rd choice is Red."

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"]


function showChoices(){

    for (var i=0; i < color.length; i++){

        if(i === 0 ){
            ordinal = o[1];
        } else if (i === 1){
            ordinal = o[2];
        } else if (i === 2 ){
            ordinal = o[3];
        } else {
            ordinal = o[0];
        };

        console.log(i+1 + ordinal + ' is ' + color[i]);
    };
};

showChoices();


Note : Use ordinal numbers to tell their i.



//### showLeapYears Find the leap years in a given range of years.

// ALGORITMO
// p: Es divisible por 4; q: es divisible entre 100; r: es divisible entre 400
// p & (!q || r)

function leapYear(){
    var years = [];
    var leapYears = []
    var elements = Math.round(Math.random()*10000);

    for (var i= 0; i< elements; i++){
        years[i] = Math.round(Math.random()*5000);

        if ( Number.isInteger(years[i]/4) && (!Number.isInteger(years[i]/4) || Number.isInteger(years[i]/400))){
            console.log('El año ' + years[i] + ' es bisiesto')
            leapYears.push(years[i]);
        } else { 
            console.log(years[i])
        }

    };
    console.log('');
    console.log('Hemos encontrado los siguentes ' + leapYears.length + ' años bisiestos en la lista de ' + elements + ' años:');
    console.log('');

    for ( var j= 0; j < leapYears.length; j ++){
        console.log(leapYears[j]);
    };

};

leapYear();

// ### shuffleArray: Write a JavaScript program to shuffle an array.


function shuffle(){
    var array1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = [];
    var elementos = Math.round(Math.random()*100);
    var parImpar = 0;
    var pos1 = 0;
    var pos2 = 0;
    var trans = 0;

    // PRIMERA ITERACION PARA ASIGNAR ALEATORIAMENTE LETRAS O NROS AL ARRAY GENERADO
    for (var i = 0; i<elementos; i++){
        parImpar = Math.round(Math.random()*25);
        if (Number.isInteger(parImpar/2)){
            generated[i] = array1[parImpar];
        } else {
            generated[i] = Math.round(Math.random()*100);
        };
    };

    console.log('El array oririginal es:  ' + generated);

    for (var i=0; i < elementos*1000; i++){
        pos1 = Math.round(Math.random()*elementos);
        pos2 = Math.round(Math.random()*elementos);
        generated[trans] = generated[pos2];
        generated[pos2] = generated[pos1];
        generated[pos1] = generated[trans];
    };

    console.log('El array modificado es:  ' + generated);
};

shuffle();





// ### binarySearch Write a JavaScript program to perform a binary search.

// Note : A binary search or half-interval search algorithm finds the i of a specified input value within an array sorted by key value. 

    // Sample array : 
    // var items = [1, 2, 3, 4, 5, 7, 8, 9];
    // Expected Output : 
    // console.log(binary_Search(items, 1)); //0 
    // console.log(binary_Search(items, 5)); //4



    function binarySearch(){

        var sampleArray = [];
        var randomNr = 0;
        var elements = Math.round(Math.random()*100);

        for (var i= 0; i< elements; i++){                   // ---> Genero el array
            sampleArray[i] = Math.round(Math.random()*10);
        };

        console.log('El array original es: ' + sampleArray);
        console.log('');

        for (var k=0; k < sampleArray.length; k++){
        
            for (var l = sampleArray.length; l>k; l--){
                
                if (sampleArray[k] ===  sampleArray[l]){
                    sampleArray.splice(l,1);
                };
            };
        };

        console.log('El array sin elementos repetidos es: ' + sampleArray);
        console.log('');

        randomNr = Math.round(Math.random()*10)

        if ( sampleArray.indexOf(randomNr) === -1){
            console.log( 'El nro ' + randomNr + ' no está en el array.')
        } else {

            console.log('El array sin elementos repetidos es: ' + sampleArray + ' (tiene ' + sampleArray.length + ' elementos)');
            console.log('');
            console.log('El número ' + randomNr + ' se encuentra en la posición ' + sampleArray.indexOf(randomNr));
        };

    };

    binarySearch();


    
    

// ### sumPositions There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

    Sample array : 
    array1 = [1,0,2,3,4];
    array2 = [3,5,6,7,8,13];
    Expected Output : 
    [4, 5, 8, 10, 12, 13] 


    function sumTwoArrays(){
        
        var array1 = [];
        var array2 = [];
        var elements1 = 0;
        var elements2 = 0; 
        
        elements1 = Math.round(Math.random()*10);

        for (var i = 0; i < elements1; i++){
            array1[i] = Math.round(Math.random()*100);
        };

        elements2 = Math.round(Math.random()*10);

        for (i = 0; i < elements2; i++){
            array2[i] = Math.round(Math.random()*100);
        }

        console.log('El array 1 es: ' + array1);
        console.log('');
        console.log('El array 2 es: ' + array2);

        if (array1.length >= array2.length){
            for (i=0; i<array2.length; i++){
                array1[i] = array1[i] + array2[i];
            };

            console.log('El array Suma es: ' + array1)
        } else {
            for (i=0; i<array1.length; i++){
                array2[i] = array1[i] + array2[i];
            };

            console.log('El array Suma es: ' + array2);
        };

    };

    sumTwoArrays();


  
### generateArraySteps: Write a JavaScript function to generate an array between two integers of 1 step length.

    Test Data :
    console.log(rangeBetwee(4, 7)); 
    [4, 5, 6, 7]
    console.log(rangeBetwee(-4, 7));
    [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

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



//### flattenArray: Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

    Sample Data :
    console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
    [1, 2, 3, 4, 5, 6]
    console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
    [1, 2, 3, [[4]], 5, 6]

    nestedArray = [];
    resultArray = [];
    
    function ejemplo(x){
    
        for (var i = 0; i <x.length; i++ ) {
    
            switch (typeof x[i]){
    
            case 'number':
                resultArray.push(x[i])
            break;
    
            case 'object':                  // --> Cómo hago que solo suba 1 nivel si se pasa un array vacío???
                nestedArray = x[i];
                ejemplo(nestedArray);
            break;
            };
        };
    
        return 'El array aplanado es: ', resultArray
    
    };
    
    ejemplo([1,3,[4,5,[[6,7,8]]],9])

### unionArray

Write a JavaScript program to compute the union of two arrays.
Sample Data :

    console.log(union([1, 2, 3], [100, 2, 1, 10]));
    [1, 2, 3, 10, 100]

    function unionArrays(x,y) {

        for (i= 0; i<y.length; i++){
    
            x.push(y[i]);
        };
    
        var compare = function(a,b){
            if(a < b){
                return -1;
            } 
            return 1;
        };
    
        x.sort(compare);
    
        for ( i = x.length-1; i>=0; i-- ){
            if ( x[i] == x[i-1]){
                x.splice(x[i], 1);
            };
        }
    
        return 'El array resultado es:' , x
    };
    
    unionArrays([1, 2, 3], [100, 2, 1, 10]);



### removeFalsy 
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

    Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
    Expected result : [15, -22, 47]



### first

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

    Test Data : 
    console.log(first([7, 9, 0, -2])); 
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    Expected Output : 
    7
    [] 
    [7, 9, 0] 
    [7, 9, 0, -2] 
    [] 



### sortObjectsTitle

Write a JavaScript function to sort the following array of objects by title value.

    Sample object :

    var library = [ 
       { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
       { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
       { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
       ];
    Expected result :

    [[object Object] {
      author: "Suzanne Collins",
      libraryID: 3245,
      title: "Mockingjay: The Final Book of The Hunger Games"
    }, [object Object] {
      author: "Bill Gates",
      libraryID: 1254,
      title: "The Road Ahead"
    }, [object Object] {
      author: "Steve Jobs",
      libraryID: 4264,
      title: "Walter Isaacson"
    }]

    var library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
        ];
    
        function sortObject(x){
    
            function compare(a,b) {
                if (a.title < b.title)
                  return -1;
                if (a.title > b.title)
                  return 1;
                return 0;
            }
              
            return x.sort(compare);
    
        };
    
        sortObject(library);




### findPairSum

Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

    Input: numbers= [10,20,10,40,50,60,70], target=50
    Output: 3, 4


 
### validValues 

Write a JavaScript function to retrieve the value of a given property from all elements in an array.

    Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
    Expected result : [15, -22, 47]

    
### longestCommon   ??????????????????????????????????????????????????????????????????????????????????????????????????????

Write a JavaScript function to find the longest common starting substring in a set of strings.

    Sample array : console.log(longest_common_starting_substring(['go', 'google']));
    Expected result : "go"

   
   
### fillArray

Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : 
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

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

 

### removeElement

Write a JavaScript function to remove a specific element from an array.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]

    function removeElement(x,y){
        var indice = x.indexOf(y);
    
        x.splice(indice,1);
    
        return x
    
    }
    
    removeElement([2, 5, 9, 6],5);



### findArrayWithElement

Write a JavaScript function to find an array contains a specific element.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]

    function findArrayElement(x,y){

        var indice = x.indexOf(y);
    
        if (indice >= 0) {
            return 'El valor se encuentra en la posición ' + indice + ' del array,'
        } else {
            return 'El valor no está en el array'
        }
    
    
    }
    
    findArrayElement([2, 5, 9, 6], 5);

 

### emptyArray

Write a JavaScript script to empty an array keeping the original size.


function emptyArray(x){
    for (i=0; i<x.length; i++){
        x[i] = '';
    }

    return  x 
}

emptyArray([1,2,3,4,5,'e','f',null,undefined]);

   

### getNthLargest

Write a JavaScript function to get nth largest element from an unsorted array.

    Test Data :
    console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
    89


    function getLargestElement(x,y){

        function order(a,b){
            if (a<b){
                return -1
            };
            if (a>b){
                return 1
            };
        };

        x.sort(order)

        var element = x[x.length-y];


    return element
}

getLargestElement([ 43, 56, 23, 89, 88, 90, 99, 652], 4);



### array_filled (numeric)

Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

    Test Data :
    console.log(array_filled(6, 0)); 
    [0, 0, 0, 0, 0, 0]
    console.log(array_filled(4, 11));
    [11, 11, 11, 11]


function filledArray(x,y){
    var result = [];


    for (i=0; i<x; i++){

        result[i] = y;
    };

    return result
};

filledArray(4,11)



### filterFalsy

Write a JavaScript function to filter false, null, 0 and blank values from an array.

    Test Data :
    console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
    [58, "abcd", true]

    
    function filterArray(x){

        for (i=x.length; i>=0; i--){
    
            if ( String(x[i]) === 'false' || String(x[i]) === 'null' || String(x[i]) === '0')
    
            x.splice(i,1);
        };
    
        return x
    }
    
    filterArray([58, '', 'abcd', true, null, false, 0]);

    */