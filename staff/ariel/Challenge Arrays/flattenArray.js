/*### flattenArray: Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only
 be flattened a single level.

    Sample Data :
    console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
    [1, 2, 3, 4, 5, 6]
    console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
    [1, 2, 3, [[4]], 5, 6]
*/


// ATENCION !!!--> Cómo hago que solo suba 1 nivel si se pasa un array vacío???

nestedArray = [];
resultArray = [];

function ejemplo(x){

    for (var i = 0; i <x.length; i++ ) {

        switch (typeof x[i]){

        case 'number':
            resultArray.push(x[i])
        break;

        case 'object':
            nestedArray = x[i];
            ejemplo(nestedArray);
        break;
        };
    };

    return 'El array aplanado es: ', resultArray

};

ejemplo([1,3,[4,5,[[6,7,8]]],9])