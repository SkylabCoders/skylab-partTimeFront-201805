/*Practice Functions [2h]
Goals
Functions
Tasks
Fibonacci Challenge
The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

Hint: Use a recursive function

*/

/*
String Calculator
Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.

add(1,2,3,4) // => 10

*/

function add(input){
  
    var arr = input.split(",");
    var sum = 0;
    
    for(var i=0; i<arr.length; i++){
      
      sum += parseInt(arr[i]);
    }
    
    return sum;
  }
  
  console.log(add("1,2,3,4"));
  
    

/*
Reverse Number
Write a JavaScript function that reverse a number

Example x = 32243;
Expected Output : 34223
*/

function reverse(input){
  
   
    return parseInt(input.toString().split('').reverse().join(''));
     //primero hace un tostring luego hace el split luego el reverse y luego el join y al final hace el parseint

  }
  
  console.log(reverse(1234));
  
    
/*
Is palindrome?
Write a JavaScript function that checks whether a passed string is palindrome or not
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/


function isPalindrome(input){
  
   var original = input.split('');
  
  for (var i = original.length-1; i >= 0; i--){//si lo hacemos al reves la posicion que se come splice me mueve el resto de las posisciones, en cmabio si empezamos al final, el 1 y el 0 no se van a mover
    
    if (original[i] === " "){
      
      original.splice(i,1);
    }
  };
  
  
  
  if( original.toString() === original.reverse().toString()){
    
    return true;
    
  } else {
    
    return false;
  }
  
   
}

console.log(isPalindrome('no es palindromo'));







/*
String combinations
Write a JavaScript function that generates all combinations of a string

Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
*/
var dog = 'dog';
var result = [];


for(var i = 0; i < dog.length; i++){
  for(var j = i+1; j < dog.length+1; j++){//se pone el dog.length+1 por que el substring no incluye el final
    result.push(dog.substring(i,j));
  }
}

console.log(result);

// result = [d, do, dog, o, og, g]

/*
Sort letters
Write a JavaScript function that returns a passed string with letters in alphabetical order

Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function sort(word){
  
 
    return  word.split('').sort().join('');
  }
  
  console.log(sort('webmaster'));

  
/*
Uppercase First Letter
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
*/


function upperFirst(text){
  
    var arr = [];
    
    arr[0] = text[0].toUpperCase();
    
    for (var i=1; i < text.length; i++){
      
      if( text[i-1] === " "){
        arr.push(text[i].toUpperCase());
      
      } else {
        
       arr.push(text[i].toLowerCase());
        
      }
    
    }
    
    return arr.join("");
    
  }
  
  console.log(upperFirst('A VER si funciona'))
  
  

/*
Longest Word
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

Example string : 'Web Development Tutorial' 
Expected Output : 'Development'
*/
// Longest Word
// Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string

// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

var phrase = 'Web Development Tutorial';

function showLongest(toCheck) {
    var arr = toCheck.split(" ");
    var length = 0;
    var index = 0;
    
    for(var i=0; i<arr.length; i++){
      if (length < arr[i].length) {
        length = arr[i].length;
        index = arr[i];
      }

    }
  
    return index;
}

console.log(showLongest(phrase));

// otra respuesta
var phrase = 'Web Development Tutorial';

function showLongest(toCheck) {
    var arr = toCheck.split(" ");
    var length = [];
    
    for(var i=0; i<arr.length; i++){
      length[i] = arr[i].length;
    }
  
  //length = [3,11,8] >>> 3,11,8
  
    var maxIndex = Math.max(...length);
    return arr[length.indexOf(maxIndex)]
}

console.log(showLongest(phrase));

/*
How many vowels
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

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

   //otra respuesta


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

/*
Is prime
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

/*## Is prime

Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/



function isPrime(x){
  
    if ( x === 1 || x === 2){
    
      return 'Es primo'
      
    } else {
      
      for ( var i=2; i < x; i++) {
        
        if (Number.isInteger(x/i)) {
            
            return 'No es primo'
            
            }
      
      }
      
      return 'Es primo'
    
    }
    
    
  };
  
  console.log(isPrime(17))

  //otra respuesta
  /*## Is prime

Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/



function isPrime(x){
  
    if ( x === 1 || x === 2){
    
      return 'Es primo'
      
    } else {
      
      for ( var i=2; i < x; i++) {
        
        if (x % i == 0) {
            
            return 'No es primo'
            
            }
      
      }
      
      return 'Es primo'
    
    }
    
    
  };
  
  console.log(isPrime(17))

/*
What type
Write a JavaScript function which accepts an argument and returns the type
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function typeOfThisElement(toCheck) {
    return "Type of "+toCheck+" is: "+ instanceOf(toCheck);//o era con type of
}

console.log(typeOfThisElement(2));
console.log(typeOfThisElement('a'));
console.log(typeOfThisElement(true));
console.log(typeOfThisElement([1,2]));
console.log(typeOfThisElement({pro: "val"}))
console.log(typeOfThisElement(typeOfThisElement));
console.log(typeOfThisElement(null));


/*
Matrix
Write a JavaScript function which returns the n rows by n columns identity matrix.
*/


function generateIdentityMatriz(n){
  
    var matrix = [] ;
    
    for (var i = 0; i < n; i++){
      
      matrix[i] = [];
      
      for (var j = 0; j < n; j++){
        
        if( i == j){
          
        
          matrix[i][j] = 1;
          
          
        } else {
          
          matrix[i][j] = 0;
          
        }
      }
    }
    
   return matrix
    
  }
  
  console.log(generateIdentityMatriz(15));
  
  
  
  
  



/*Second lowest and second greatest
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

function secondLG(num){
    var sorted = num.sort(function(a, b){return a-b});
    console.log(sorted)
    var answer = []
    answer.push(sorted[1]);
    answer.push(sorted[sorted.length-2])
    return answer
  }
  
  console.log(secondLG([1,2,3,4,5]))
  
  
  
  

/*
Perfect Numbers
Write a JavaScript function which says whether a number is perfect.

According to Wikipedia : In number theory, a perfect number is a positive 
integer that is equal to the sum of its proper positive divisors, that is, 
the sum of its positive divisors excluding the number itself (also known as its 
    aliquot sum). Equivalently, a perfect number is a number that is half the sum 
    of all of its positive divisors (including itself).

Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive 
divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of 
all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number 
is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/


function perfectNumber(n){
    var isExact = [];
    var sum = 0;
    
    for(var i = 1; i<n; i++){
      if(n % i === 0){
        sum += i;
      }
    }
    
    if(sum === n){
      return n + " I am a perfect number";
    } else {
      return n + " I am not a perfect number";
    }
    
  }
  
  
  console.log(perfectNumber(2));
  

  
/*
Factors
Write a JavaScript function to compute the factors of a positive integer.
Example: input: factors(10) output: 1, 2, 5, 10
*/

/*
Coinify
Write a JavaScript function to convert an amount to coins.

Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1
*/


function coinify (x, coins) {
  
    var coinsUsadas = [];
  
    
    for ( var i = 0; i < coins.length; i++){
    
      
      
      while (x >= coins[i]) {
          
        coinsUsadas.push(coins[i]);
        
        x = x - coins[i];
          
      }
                
    }
        
    return {
      coinsUsadas: coinsUsadas,
      sinCambio: x 
    };
        
      
  }
    
  var result = coinify(1, [25, 10, 5, 2, 1]);
  
  console.log("Las monedas son: ",result.coinsUsadas);
  
  if(result.sinCambio > 0){
    console.log("Te debo: ",result.sinCambio)  
  }else{
    console.log("No te debo nada");
  }
  
  //otra respuesta
  function coinify (x, coins) {
  
    var coinsUsadas = [];
    var coinActual = 0
      
      
    while (x > 0 && coinActual < coins.length) {
      if(x >= coins[coinActual]){
        coinsUsadas.push(coins[coinActual]);
        x = x - coins[coinActual];  
      
      }else{
        coinActual++;
      }
    }
          
          
        
    return {
      coinsUsadas: coinsUsadas,
      sinCambio: x 
    };
        
      
  }
    
  var result = coinify(146, [25, 10, 5, 2]);
  
  console.log("Las monedas son: ",result.coinsUsadas);
  
  if(result.sinCambio > 0){
    console.log("Te debo: ",result.sinCambio)  
  }else{
    console.log("No te debo nada");
  }
    
    
/*
getExponent
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
*/
/*$getExponent -- Citlas
Write a JavaScript function to compute the value 
of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result.
*/

function getExponent (b,n){
    var result = 1
    
    
    for (var i=0; i<n; i++){
     result = result*b;
      
    }
    return result
    
  }
  
  
  var b = 2;
  var n = 3;
  
  console.log("Exponente", getExponent(b,n))
  
  console.log("Comprobar",Math.pow(b,n))
/*

Unique Characters
Write a JavaScript function to extract unique characters from a string.

Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/


function findUnique(word) {
    var found = "";
    
    for (var i=0; i<word.length; i++){
      if (!found.includes(word[i]) ) {
        found += word[i];
      }
    }
    
    return found;
  }
  
    
    
  console.log(findUnique('thequickbrownfoxjumpsoverthelazydog'));
  
    //otra respuesta con indexOf

function findUnique(word) {
    var found = "";
    
    for (var i=0; i<word.length; i++){
      if (found.indexOf(word[i]) < 0) {
        found += word[i];
      }
    }
    
    return found;
  }
  
    
    
  console.log(findUnique('thequickbrownfoxjumpsoverthelazydog'));
  
  
/*
Occurences
Write a JavaScript function to get the number of occurrences of each letter in specified string.

Example:    input: Char_Counts('welcome')
            output: w: 1, e: 2, l: 1, c: 1, o:1, m: 1
*/

function Char_Counts(word){//las cuenta pero no pone en orden el resultado
    var count = {};
    word.split('')
    
    for (i=0;i<word.length;i++){  
      
       console.log(count[word[i]])
      
      if (count[word[i]] > 0){
         count[word[i]] = count[word[i]]+1
        
      } else if (count[word[i]] == undefined){
        count[word[i]] = 1
        
      }
    
      
    }
  return count
     
      
}

console.log(Char_Counts('welcome'));
/* Output!!------------------------------
Object {
    c: 1,
    e: 2,
    l: 1,
    m: 1,
    o: 1,
    w: 1
  }*/


/*
Binary Search
Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and 
smaller chunks until it finds the desired value.
Hint: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
Hint: https://en.wikipedia.org/wiki/Binary_search_algorithm
*/
/*
Let min = 0 and max = n-1.
If max < min, then stop: target is not present in array. Return -1.
Compute guess as the average of max and min, rounded down (so that it is an integer).
If array[guess] equals target, then stop. You found it! Return guess.
If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
Otherwise, the guess was too high. Set max = guess - 1.
Go back to step 2.
*/
var pri = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var min = 0
var max = pri.length-1
var tar = 67



function binary(primes, target){
  while(primes[guess] !== target){
    if(max<min){
      return -1
    }  else { 
      var guess = Math.floor((min+max)/2)
      //console.log(guess)
      if (primes[guess]<target){
        min = guess +1;
      } else {
      max = guess -1;
      }
    }     
  } 
   
    if (primes[guess] == target){
      console.log(guess + " es el index del target ", target)
      return guess
    }
      
}
  
console.log(binary(pri, tar))

//la respuesta de Cristiam

var arr = [10,5,8,3,12,65,34,7,33];

function binarySearch(arr, searching, l, r){
  var sortedArr = arr.sort(function(a,b){ return a-b; });

  if(typeof l === 'undefined') l = 0;
  if(typeof r === 'undefined') r = sortedArr.length;
  var m = Math.floor((r+l)/2);
 
  var currentSearch = arr[m];
  
  while(currentSearch != searching &&  l<r-1){
    console.log(l,r,m,currentSearch);
    if(searching < currentSearch){
      r = m;
    
    }else if(searching > currentSearch){
      l = m; 
    }
    m = Math.floor((r+l) / 2);
    currentSearch = arr[m];
    
  }      
  
  return arr[m] == searching ? m : -1;

}
//[ 3, 5, 7, 8, 10, 12, 33, 34, 65 ]

console.log(binarySearch(arr, 34));











/*
getStringId
Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/


function getStringId(str,len){
    var answer = ""
    for(var i =0; i<len;i++){
      
      answer = answer + str[Math.floor((Math.random() * str.length))];
    }
    return answer
  }
  console.log(getStringId("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",2))
  
  

/*
Occurrencers Letter
Write a JavaScript function that accepts two arguments, a string and a letter and the
 function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o' 
Expected output : 2 
*/


function occurences(str,letter){
    str = str.split('')
    var counter = 0
    str.forEach(function(el, i, elArrayDeBeatles){//el primer elemento siempre es el elmento, el segundo el index y el tercero el array
    if (el==letter){
      counter++
    }
  })
    return counter
  }
  console.log(occurences('w3resource.com', 'o' ))
  

/*
First not repeated
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/

function firstNotRep(str){
    str = str.split('')
    var arr = []
    var counter = {}
    str.forEach(function(el, i, elArr){//el primer elemento siempre es el elmento, el segundo el index y el tercero el array
      if(counter[el]){
        counter[el]++
      } else {
        counter[el]=1
      }
      
     
    })
    for (var key in counter) {
      console.log(key)
      console.log(counter[key])
      if(counter[key]>1){
      delete counter[key]
    }
    }
   
    console.log(counter)
    return Object.keys(counter)[0];
  }
  console.log(firstNotRep('abbccd'))
  
/*
Bubble Sort algorithm
Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort,
is a simple sorting algorithm that works by repeatedly stepping through the list to 
be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/


sample =  [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//esta mal por que no son adyacentes---
function bubble (arr){
  var temp = 0
 
  for (var i =0; i<sample.length; i++){
     for (var j =0; j<i; j++){
       if(arr[i]>arr[j]){
      temp = arr[j]
      arr[j] = arr[i]//el 1 se convierte en cero
      arr[i] = temp // el cero se convierte en uno  
    
   }
  }
 }
  return arr 
}
console.log(bubble(sample))

// solucion de Cristiam, aqui si mira las adyacentes
var arr = [10,5,8,3,12,65,34,7,33];

function bubbleSort(arr){
  var hayCambio = true;
  
  while(hayCambio){
    hayCambio = false;
    
    for(var i=0 ; i<arr.length-1 ; i++){
      if(arr[i] < arr[i+1]){
        var temp = arr[i];

        arr[i] = arr[i+1];
        arr[i+1] = temp;
        hayCambio = true;
      }
    }
  }
  
  
  return arr;
  
}
//[ 3, 5, 7, 8, 10, 12, 33, 34, 65 ]

console.log(bubbleSort(arr));











/*
Longest Country
Write a JavaScript function that accept a list of country names as input and 
returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/

function longestCountry (countries){
    var longest = 0
    var answer = ""
    countries.forEach(function(element) {
      if (element.length>longest){
        longest=element.length
        answer = element
      };
  });
    return answer
  }
  console.log(longestCountry(["Australia", "Germany", "United States of America"]))


/*
Function name
Write a JavaScript function to get the function name.
*/

function getFunctionName(){
    return getFunctionName.name
  }
  
  console.log(getFunctionName())

/*
getLargerArrays
Write a JavaScript function that returns array elements larger than a number.
*/

function getLargerArrays(arr,num){
    var answer = []
    arr.forEach(function(element) {
    if(element>num){
       answer.push(element)
       }
  });
    return answer
  }
  
  console.log(getLargerArrays([1,2,3,4,5,6],3))