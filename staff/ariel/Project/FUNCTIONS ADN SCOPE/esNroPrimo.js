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