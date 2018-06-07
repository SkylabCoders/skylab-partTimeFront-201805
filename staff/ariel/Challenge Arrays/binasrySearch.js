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