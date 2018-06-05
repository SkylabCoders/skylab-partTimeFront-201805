// Perfect Numbers
// Write a JavaScript function which says whether a number is perfect.


// Example : The first perfect number is 6, because 1, 2, and 3 are its proper 
// positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal 
// to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.


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
