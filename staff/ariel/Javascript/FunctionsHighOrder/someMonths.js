/*## Some Months

Write a high order function that take the array of months and create a new array that contains only the months that begin with j.


*/

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

var newArray = months.filter(function(e, i, arr){
    return e[0] === "j"
})

console.log(newArray);