/*Write a JavaScript function to convert an amount to coins.

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
  
var result = coinify(146, [25, 10, 5, 2, 1]);
console.log(c"Las monedas son: ",result.coinsUsadas)



if(result.sinCambio > 0){
  console.log("Te debo: ", result.sinCambio) ; 
};


// ---------------------------------------------------------------

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
  


