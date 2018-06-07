
/*### filterFalsy

Write a JavaScript function to filter false, null, 0 and blank values from an array.

    Test Data :
    console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
    [58, "abcd", true]

*/


function filterArray(x){

    for (i=x.length; i>=0; i--){

        if ( String(x[i]) === 'false' || String(x[i]) === 'null' || String(x[i]) === '0')

        x.splice(i,1);
    };

    return x
}

filterArray([58, '', 'abcd', true, null, false, 0])

