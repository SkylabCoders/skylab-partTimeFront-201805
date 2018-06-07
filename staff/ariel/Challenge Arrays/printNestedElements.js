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