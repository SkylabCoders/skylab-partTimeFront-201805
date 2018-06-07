/*### is_object

Write a JavaScript function to check whether an `input` is an object or not.
*/

function isObject(x,y,j,k){

    var result = '';

    if(typeof x === 'object'){
        result = 'Is an Object'
    } else {
        result = 'Is NOT an Object'
    };

    return result
};

isObject(3);
