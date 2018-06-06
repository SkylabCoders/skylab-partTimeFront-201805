
/* ### removeFalsy

Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

    Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
    Expected result : [15, -22, 47]
*/


var falsos =  ['null', '0','', 'false', 'undefined', 'NaN']

function removeFalsy(x){

    for (i = x.length-1; i>=0;  i--){

        if (falsos.indexOf(String(x[i])) >= 0){
            x.splice(i, 1);
        }
    };

 return x;

}

removeFalsy([NaN, 0, 15, false, -22,'',undefined, 47, null]);