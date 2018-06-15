/*### longestCommon

Write a JavaScript function to find the longest common starting substring in a set of strings.

    Sample array : console.log(longest_common_starting_substring(['go', 'google']));
    Expected result : "go"

*/

/*
var subStrings = [];

function longestCommon(x){

for(j=0; j<x.length; j++){

    subStrings[j] = x[j][0];

    for(var i=0; i<x[i].length; i++){

        if(j==i){
            continue;    // ----> 
        }

        subStrings[i] = subStrings[j] + x[i][j];

    }

    console.log(subStrings)
};

longestCommon(['hola','holly']) 

*/




//, 'ola', 'holly', 'holanda']) //, 'sobre', 'sonoro', 'sobrado', 'sobresaturado'])



function longestCommon(arr){
    var maxSubLen = 0;
    var maxSub = '';
    
    for(var i=0 ; i<arr.length ; i++){
  //    console.log("comparando la palabra: ",arr[i]);
       for(var j=0 ; j<arr.length ; j++){
          if(i == j) continue;
   //       console.log("con la palabra: ",arr[j]);
         
         for(var k=1 ; k <= arr[i].length ; k++){
           var sub = arr[i].substring(0, k);
           
           if(arr[j].substring(0,k) == sub && maxSubLen<=sub.length){
             maxSubLen = sub.length;
             maxSub = sub;
           }
         }
       }
    }
    return "EL MAXIMO SUBSTRING ES: "+maxSub+" y mide: "+maxSubLen;
  }
  console.log(longestCommon(['go', 'guoogle','google', 'g', 'goog', 'abcde', 'ab', 'abc','abcdj']))