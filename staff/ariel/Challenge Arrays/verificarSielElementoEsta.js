//  findDifferences: Write a JavaScript function to find the difference of two arra

var x1 = [2,4,6,8,3];
var x2 = [2,5,7];
var x3 = [];


for (i=0; i < x1.length; i++){

    var esta = false;

    for (j=0; j<x2.length; j++){

        if (x1[i] === x2[j]){
        esta = true;
                 
        break;

        }
    }  
    
    if (!esta) {
        x3.push(x1[i]);
    }
}

for (i=0; i<x2.length; i++){
    var esta = false;
    for (j=0; j<x1.length; j++){
        if (x2[i] == x1[j]){
        esta = true;
        break;
        }
    }  
    if (!esta){
        x3.push(x2[i]);
    }
} 
console.log('las diferencias son:' + x3) 


// OTRA ALTENRATIVA


var array1 = [1,2,3,4,5,6,7];
var array2 = [1,2,4,5,6,7,8];
var temp = [];


for (var i in array1) {
  if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
  if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}

console.log(temp);