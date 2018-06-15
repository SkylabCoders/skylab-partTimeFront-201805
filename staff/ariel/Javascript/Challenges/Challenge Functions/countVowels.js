/*How many vowels
Write a JavaScript function that accepts a string 
as a parameter and counts the number of vowels within
the string
Note : As the letter 'y' can be regarded as both a vowel 
and a consonant, we do not count 'y' as vowel here.

Example string : 'The quick brown fox' 
Expected Output : 5
*/

function vowels(myArr){
 var arr = myArr.split('')
  
 var count = 0
 for (var i =0; i<arr.length; i++){
  
   switch (arr[i]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      count++;      
        break; 
}
   
 }
  return count
  
}

console.log(vowels('The quick brown fox'))



function vowels(myArr){
    var arr = myArr.split('')
    var vowels = "aeiouAEIOU";
    var count = 0
    
    for (var i =0; i<arr.length; i++){
      if(vowels.indexOf(arr[i]) >= 0){
        count ++;
      }  
    }
     
    return count
    
  }
  
  console.log(vowels('The quick brown fox'))