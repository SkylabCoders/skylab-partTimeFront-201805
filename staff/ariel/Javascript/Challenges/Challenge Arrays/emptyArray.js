/* ### emptyArray

Write a JavaScript script to empty an array keeping the original size.
*/

function emptyArray(x){
    for (i=0; i<x.length; i++){
        x[i] = '';
    }

    return  x 
}

emptyArray([1,2,3,4,5,'e','f',null,undefined]);