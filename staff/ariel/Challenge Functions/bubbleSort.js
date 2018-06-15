
/* ## Bubble Sort algorithm

Write a JavaScript function to apply Bubble Sort algorithm. 

> Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 

    Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/


function bubbleSort(x){

    var changes = 1;
    var temp = 0;

    while (changes > 0){

        changes = 0;

        for (var i=0; i<x.length-1; i++){

            if(x[i]<x[i+1]){
                temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                changes = changes + 1;
            };
        };
    };

    return x
};

bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])


// ================================ Solución Cristiam

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
