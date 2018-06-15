/* ## Binary Search

Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

Hint: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
Hint: https://en.wikipedia.org/wiki/Binary_search_algorithm
*/

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