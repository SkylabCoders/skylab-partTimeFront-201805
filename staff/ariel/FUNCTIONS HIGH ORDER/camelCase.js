/*## Camel Case

Write a high order function that take the array of months and create a new array that contains the same months but with the first letter in upper case.

*/

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


var newArray = months.map(function(e, i, arr){
    return e[0].toUpperCase()+e.substring(1,e.length)
});

console.log(newArray);


// ======== CITLAS VERSION


var arr2=[]

arr2 = months.map(function(e,i){
  return e.replace(e[0], e[0].toUpperCase());    // ATENCION replace() solo cambia la primera ocurrencia
})

console.log(arr2)
    

