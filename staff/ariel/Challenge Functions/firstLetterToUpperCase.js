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