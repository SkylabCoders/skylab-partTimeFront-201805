/*### array_filled (numeric)

Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

    Test Data :
    console.log(array_filled(6, 0)); 
    [0, 0, 0, 0, 0, 0]
    console.log(array_filled(4, 11));
    [11, 11, 11, 11]

*/

function filledArray(x,y){
    var result = [];


    for (i=0; i<x; i++){

        result[i] = y;
    };

    return result
};

filledArray(4,11)