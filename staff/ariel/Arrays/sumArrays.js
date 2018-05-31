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