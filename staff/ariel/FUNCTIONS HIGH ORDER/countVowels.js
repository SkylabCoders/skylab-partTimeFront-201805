/*
## Count Vowels

Write a high order function that counts all the vowels of the following text.

*/

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];

var nroDeVowels = loremIpsum.split("").filter(function(e, i, arr){

  return vowels.indexOf(e) >= 0

);

console.log(nroDeVowels.length)


// =====

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'.split('');
var vowels = "aeiouAEIOU";

var result = loremIpsum.reduce(function(suma, e, i, arr){
    return (vowels.includes(e)? suma+1 : suma);
},0);
  
console.log(result);  