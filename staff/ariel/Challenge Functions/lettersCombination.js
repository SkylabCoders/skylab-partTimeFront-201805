var dog = 'dog';
var result = [];


for(var i = 0; i < dog.length; i++){
  for(var j = i+1; j < dog.length+1; j++){
    result.push(dog.substring(i,j));
  }
}

console.log(result);