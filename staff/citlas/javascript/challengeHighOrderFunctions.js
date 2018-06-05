/*
Camel Case
Write a high order function that take the array of months and create a new array 
that contains the same months but with the first letter in upper case.
*/

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

//VA A SUSTITUIR CADA ELEMENTO DEL ARRAY CON EL RESULTADO DE LA FUNCION Y RETORNA UN ARRAY NUEVO

var arr2=[]

arr2 = months.map(function(e,i){
  return e.replace(e[0], e[0].toUpperCase());
})

console.log(arr2)
//console.log(months)
//otra opcion con substring

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
              
var arr2=[];

arr2 = months.map(function(e,i){
  return e[0].toUpperCase() + e.substring(1,e.length)
})

console.log(arr2)
    

/*
Some Months
Write a high order function that take the array of months and create a new array 
that contains only the months that begin with j.
*/
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


var filtered = [];


filtered = months.filter(function(e){
  return (e[0]  == "j");
})

console.log(filtered);
//leticia
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

var jMonths = months.filter(function(e){
    return e.substring(0,1) === 'j';
});

console.log(jMonths);

/*
Count Vowels
Write a high order function that counts all the vowels of the following text.
*/
console.log("--------------")
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

var vowels = "aeiouAEIOU";
loremIpsum = loremIpsum.split('');
var result = loremIpsum.reduce(function(suma, e, i, arr){
  //return console.log(e)
  return (vowels.includes(e)? suma+e : suma);
  
},'')

console.log(result);
console.log(result.length);

console.log("--------------")

//otra de Ari


var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];

var nroDeVowels = loremIpsum.split("").filter(function(e, i, arr){
  return vowels.indexOf(e) >= 0;
})

console.log(nroDeVowels.length)

/*
Great Than Five Letters
Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.
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

//simplificado

function moreThanFive(e){
    return e.length >= 5;
  }
  
  var resultado = months.every(moreThanFive)
  console.log(resultado);
  
  var resultado = months.some(moreThanFive)
  console.log(resultado);