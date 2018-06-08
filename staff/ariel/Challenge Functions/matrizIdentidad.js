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