// Define a function called add with a single argument input. 
// The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.

// add(1,2,3,4) // => 10


function add(input){
  
    var arr = input.split(",");
    var sum = 0;
    
    for(var i=0; i<arr.length; i++){
        sum += parseInt(arr[i]);
    }
    
    return sum;
}
  
  

// Reverse Number
// Write a JavaScript function that reverse a number

// Example x = 32243;
// Expected Output : 34223 


function reverse(input){
    return parseInt(input.toString().split('').reverse().join(''));     
}
  
console.log(reverse(1234));
  
  
  
// Is palindrome?
// Write a JavaScript function that checks whether a passed string is palindrome or not
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
  
  
function isPalindrome(input){  
    var original = input.split('');
   
    for (var i = original.length-1; i >= 0; i--){
     
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
 
//al derecho nos comemos el indice, se salta elemento siguiente por indice eliminado
var arr = ['a','b','c','c','d','e'];

for(var i=0 ; i< arr.length ; i++){
  console.log(arr);
  
  if(arr[i] === "c"){
    arr.splice(i,1);
  }
}

//al revés no nos borra el indice, entonces no se salta elemento
var arr = ['a','b','c','c','d','e'];
for(var i=arr.length -1 ; i>= 0 ; i--){
  console.log(arr);
  
  if(arr[i] === "c"){
    arr.splice(i,1);
  }
}


// String combinations
// Write a JavaScript function that generates all combinations of a string

!!!!!!!!!!!!!!!!!!!!

function combine(str){
    var result = [];



}

combine('dragon');



// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

var dog = 'dog';
var result = [];

for(var i = 0; i < dog.length; i++){
  // j = i+1 -> para empezar en uno más que la letra con la que empezamos, si no el substring sale vacio
  // dog.length+1 -> porque el end es una posicion inclusive en el substring, por eso se suma 1
  for(var j = i+1; j < dog.length+1; j++){
    result.push(dog.substring(i,j));
  }
}

console.log(result);
// result = [d, do, dog, o, og, g]



// Sort letters
// Write a JavaScript function that returns a passed string with letters 
// in alphabetical order

// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sort(word){
    return  word.split('').sort().join('');
}

console.log(sort('webmaster'));
  


// Uppercase First Letter
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

//Example string : 'the quick brown fox' 
//Expected Output : 'The Quick Brown Fox '

function upperFirst(text){
  
    var arr = [];
    
    arr[0] = text[0].toUpperCase();
    
    for (var i=1; i <= text.length; i++){
      if( text[i-1] === " "){
        arr.push(text[i].toUpperCase());
      } else {
        arr.push(text[i]);
      }
    }
    
    return arr.join("");
  }
  
  console.log(upperFirst('a ver si funciona'))
  

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
        index = i;
      }
    }
  
    return arr[index];
}

console.log(showLongest(phrase));


// Otra forma

var phrase = 'Web Development Tutorial';

function showLongest(toCheck) {
    var arr = toCheck.split(" ");
    var length = [];
    
    for(var i=0; i<arr.length; i++){
        length[i] = arr[i].length;
    }
    
    // los ... hacen: length = [3,11,8] >>> 3,11,8
    var maxIndex = Math.max(...length);
    return arr[length.indexOf(maxIndex)]
}

console.log(showLongest(phrase));


 
// How many vowels
// Write a JavaScript function that accepts a string 
// as a parameter and counts the number of vowels within
// the string
// Note : As the letter 'y' can be regarded as both a vowel 
// and a consonant, we do not count 'y' as vowel here.

// Example string : 'The quick brown fox' 
// Expected Output : 5

//citlas:
function vowels(myArr){
    var arr = myArr.split('');
    var count = 0;

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
     return count;
   }
   
console.log(vowels('The quick brown fox'))


// profe   
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

 

// Is prime
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

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


// What type
// Write a JavaScript function which accepts an argument and returns the type
// Note : There are six possible values that typeof returns: object, boolean, 
// function, number, string, and undefined.

// `object`, `boolean`, `function`, `number`, `string`, and `undefined`.
function typeOfThisElement(toCheck) {
    return "Type of "+toCheck+" is: "+ instanceOf(toCheck);
}
/*
console.log(typeOfThisElement(2));
console.log(typeOfThisElement('a'));
console.log(typeOfThisElement(true));
console.log(typeOfThisElement([1,2]));
console.log(typeOfThisElement({pro: "val"}))
console.log(typeOfThisElement(typeOfThisElement));
console.log(typeOfThisElement(null));
*/

// instanceof
console.log([1,2] instanceof Array)


var u = new User("alumno");
console.log(u);

console.log(u instanceof User) // true



// Matrix
// -----------------------------------------
//   0 1 2
// 0[1,0,0] 00 es 1
// 1[0,1,0] 11 es 1
// 2[0,0,1] 22 es 1

// matriz 1 0 -> 1
// Write a JavaScript function which returns the n rows by n columns identity matrix.

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
   return matrix; 
  }
  
  console.log(generateIdentityMatriz(15));
  
  
  
  
// Second lowest and second greatest
// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function secondLG(num){
    var sorted = num.sort(function(a, b){return a-b});
    console.log(sorted)
    var answer = []
    answer.push(sorted[1]);
    answer.push(sorted[sorted.length-2])
    return answer
  }

  function secondLG(num){
    var sorted = num.sort(function(a, b){
      return a-b
    });
    console.log(sorted)
    var answer = []
    answer.push(sorted[1]);
    answer.push(sorted[sorted.length-2])
    return answer
  }
  
  console.log(secondLG([1,2,3,4,5]))


  // Cómo funciona el sort
  // esa funciçon son como las tripas que no vemos 

  console.log([11,12,3,4,5].sort(function(a,b){
    if(a > b){
      return -1;
    }else{
      return 1
    }
  }))
  

// Perfect Numbers
// Write a JavaScript function which says whether a number is perfect.

// According to Wikipedia : In number theory, a perfect number is a 
// positive integer that is equal to the sum of its proper positive divisors, 
// that is, the sum of its positive divisors excluding the number itself 
// (also known as its aliquot sum). Equivalently, a perfect number is a number 
// that is half the sum of all of its positive divisors (including itself).

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper 
// positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal 
// to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.


function perfectNumber(n){
    var isExact = [];
    var sum = 0;
    var result = "";
    
    for(var i = 1; i<n; i++){
      if(n % i === 0){
        isExact.push(i);
      }
    }
    
    for(var i = 0; i<isExact.length; i++){
      sum += isExact[i];
    }
    
    if(sum === n){
      result = n + " I am a perfect number";
    } else {
      result = n + " I am not a perfect number";
    }
    
    return result;
  }
  
  console.log(perfectNumber(28));


  // usando menos variables
  function perfectNumber(n){
    var isExact = [];
    var sum = 0;
    
    for(var i = 1; i<n; i++){
      if(n % i === 0){
        isExact.push(i);
      }
    }
    
    for(var i = 0; i<isExact.length; i++){
      sum += isExact[i];
    }
    
    if(sum === n){
      return n + " I am a perfect number";
    } else {
      return n + " I am not a perfect number";
    } 
  }
  console.log(perfectNumber(28));
  

  // profe
  // no necesito tenerlos todos para empezar  sumar

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


// Factors
// Write a JavaScript function to compute the factors of a positive integer.
// Example: input: factors(10) output: 1, 2, 5, 10



// Coinify
// Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output coins we used : 25, 10, 10, 1

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
    }
  }
    
  var result = coinify(146, [25, 10, 5, 2]);
  
  console.log("Las monedas son: ",result.coinsUsadas);
  
  if(result.sinCambio > 0){
    console.log("Te debo: ",result.sinCambio);
  }
  
  
  // version profe
  function coinify (x, coins) {
    var coinsUsadas = [];
    var coinActual = 0
       
    while (x > 0 && coinActual < coins.length) {
      
        if(x >= coins[coinActual]){
            coinsUsadas.push(coins[coinActual]);
            x = x - coins[coinActual];  

        } else {
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
} else {
    console.log("No te debo nada");
}
    


// getExponent -- Citlas
// Write a JavaScript function to compute the value of bn where n 
// is the exponent and b is the bases. Accept b and n from the user 
// and display the result.

function getExponent (b,n){
    var result = 1
    
    for (var i=0; i<n; i++){
        result = result * b;
    }
    return result;
  }
  
  var b = 2;
  var n = 3;
  
  console.log("Exponente", getExponent(b,n)) // citlas
  console.log("Comprobar",Math.pow(b,n)) // profe



// Unique Characters -- Leticia
// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// ejempl sin convertir en array iteramos por STRING
function findUnique(word) {
  var found = "";
  
  for (var i=0; i<word.length; i++){
    // con includes
    if (!found.includes(word[i]) ) {
      found += word[i];
    }
  }
  
  return found;
}

console.log(findUnique('thequickbrownfoxjumpsoverthelazydog'));


// con indexOf
function findUnique(word) {
    var found = "";
    
    for (var i=0; i<word.length; i++){
    // con indexOf
      if (found.indexOf(word[i]) < 0) {
        found += word[i];
      }
    }
    
    return found;
}
console.log(findUnique('thequickbrownfoxjumpsoverthelazydog'));
  
  

// Occurences
// Write a JavaScript function to get the number of occurrences of each letter in specified string.
// Example:    input: Char_Counts('welcome')
//             output: w: 1, e: 2, l: 1, c: 1, o:1, m: 1

function charCounts(str) {
    for(var i = 0; i<str.length; i++){
        
    }
} 

charCounts('welcome');



// Binary Search
// Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Hint: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
// Hint: https://en.wikipedia.org/wiki/Binary_search_algorithm

var arr = [10,5,8,3,12,65,34,7,33];

function binarySearch(arr, searching, l, r){
  var sortedArr = arr.sort(function(a,b){ return a-b; });

  if(typeof l === 'undefined') l = 0;
  if(typeof r === 'undefined') r = sortedArr.length;
  var m = Math.floor((r+l)/2);
 
  var currentSearch = arr[m];
  
  while(currentSearch != searching && l<r-1){
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

console.log(binarySearch(arr, 7));




// getStringId
// Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function stringId(str,strLength) {
    var stringId = [];

    for(var i = 0; i<strLength; i++){
        var randomPosition = Math.floor(Math.random() * str.length);
        
        stringId.push(str[randomPosition]);
    }

    return stringId.join('');
}

stringId(list,6);


// Occurrencers Letter
// Write a JavaScript function that accepts two arguments, a string and a letter 
// and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2 

function ocurrences(l,str){
    number = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i] === l){
            number += 1;
        }
    }
    return number;
}

ocurrences('o','w3resource.com');



// First not repeated
// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNotRep(str){
  str = str.split('')
  var arr = []
  var counter = {}
  
  str.forEach(function(el, i, elArr){//el primer elemento siempre es el elmento, el segundo el index y el tercero el array
    if(counter[el]){
      counter[el]++
    } else {
      counter[el]=1;
    }
  });

  console.log(Object.keys(counter));

  for (var key in counter) {
    console.log(key)
    console.log(counter[key]);

    if(counter[key]>1){
      delete counter[key]
    }
}
 
console.log(counter);

return Object.keys(counter)[0];
}


console.log(firstNotRep('eabbccd'))



// Bubble Sort algorithm
// Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

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




// Longest Country
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

var countries = ["Canada", "United States of America", "Spain", "Italy", "Greece"];

function showLargerItem(arr) {
    var largest = "";
    var tempLength = arr[0].length;
    
    for(var i=1; i<arr.length; i++){
        if(arr[i].length > tempLength) {
            largest = arr[i];
            tempLength = arr[i].length;
        }
    }

    return largest;
}

showLargerItem(countries);



// Function name
// Write a JavaScript function to get the function name.

function nameFunction(){
  return nameFunction.name;
}

console.log(nameFunction());



// getLargerArrays
// Write a JavaScript function that returns array elements larger than a number.

function largerArrThan(n) {
    arr = [];

    for(var i=0; i<n+1; i++){
        arr.push("element");    
    }

    return arr;
}

largerArrThan(4);