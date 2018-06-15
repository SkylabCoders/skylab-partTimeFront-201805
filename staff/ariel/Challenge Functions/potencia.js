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

console.log("Exponente", getExponent(b,n))console.log()M"Comprobar",ath.pow()b,n