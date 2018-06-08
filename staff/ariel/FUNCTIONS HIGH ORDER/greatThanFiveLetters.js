/* ## Great Than Five Letters

Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.

```
```
*/

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


var resultado = months.every(function(e, i, arr){
    if(e.length >= 5){
        return true
    } else {
        return false
    }
})

console.log(resultado);


// ==========

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


var resultado = months.some(function(e, i, arr){
    if(e.length >= 5){
        return true
    } else {
        return false
    }
})

console.log(resultado);


// ======= ECONOMIZANDO



var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


function moreThanFive(e){
  return e.length >= 5;
}

var resultado = months.every(moreThanFive)
console.log(resultado);

var resultado = months.some(moreThanFive)
console.log(resultado);
