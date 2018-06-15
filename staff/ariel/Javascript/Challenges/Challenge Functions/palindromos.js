
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