/*### findArrayWithElement

Write a JavaScript function to find an array contains a specific element.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]
*/

function findArrayElement(x,y){

    var indice = x.indexOf(y);

    if (indice >= 0) {
        return 'El valor se encuentra en la posición ' + indice + ' del array,'
    } else {
        return 'El valor no está en el array'
    }


}

findArrayElement([2, 5, 9, 6], 5);