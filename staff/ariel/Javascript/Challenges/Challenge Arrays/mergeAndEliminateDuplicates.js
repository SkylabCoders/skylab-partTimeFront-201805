
// ### mergeArrays: Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeArrays(){
    var array1 = [1, 2, 3, 8, 15, 21, 6, 8]; 
    var array2 = [2, 30, 1, 2, 21]; 


    var array3 = array1.concat(array2);

    console.log('El array concatenado es: ' + array3);
    console.log('');

   for (var k=0; k < array3.length; k++){
        
        for (var l=array3.length; l>k; l--){
            
            if (array3[k] === array3[l]){
                array3.splice(l,1);
            }
        }
    }


    console.log('El array concatenado y sin duplicados es: ' + array3);
};

mergeArrays()


    Test data :
    var array1 = [1, 2, 3]; 
    var array2 = [2, 30, 1]; 
    console.log(merge_array(array1, array2));
    [3, 2, 30, 1]
