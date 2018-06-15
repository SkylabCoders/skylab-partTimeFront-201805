
/*### removeElement

Write a JavaScript function to remove a specific element from an array.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]
*/

function removeElement(x,y){
    var indice = x.indexOf(y);

    x.splice(indice,1);

    return x

}

removeElement([2, 5, 9, 6],5);