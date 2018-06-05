/* ### findPairSum

Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

    Input: numbers= [10,20,10,40,50,60,70], target=50
    Output: 3, 4

*/

var index1 = 0;
var index2 = 0;

function findPair(arr,t){

    for (var i=0; i<arr.length; i++){
        for (var j=i+1; j<arr.length; j++){

            if (arr[i]+arr[j] == t){
                index1 = i;
                index2 = j;
                break;
            }
        }
    }

    console.log('los índices son: (' + index1+', '+index2+')');

};

findPair([10,20,10,40,50,60,70],50);
