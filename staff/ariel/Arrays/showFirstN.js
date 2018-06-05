/* ### first

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

    Test Data : 
    console.log(first([7, 9, 0, -2])); 
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    Expected Output : 
    7
    [] 
    [7, 9, 0] 
    [7, 9, 0, -2] 
    [] 
    */

var m = 0;

function getfirstN(x){

    console.log('El array tiene : ', x.length, ' elementos')

    var n = parseInt(prompt('Ingrese el nro de elementos a visualizar'));

    console.log('Has elegido visutalizar los primeros ' + n + ' elementos')

    if (n == ''){
        m = 1;
    } else {
        m = n;
    }

    x.splice(n);

    return x;

}

getfirstN([1,2,34,4,4565,4,9,9,9]);