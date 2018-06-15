/* # Occurences 

Write a JavaScript function to  get the number of occurrences of each letter in specified string.

````
Example:    input: Char_Counts('welcome')
            output: w: 1, e: 2, l: 1, c: 1, o:1, m: 1

```
*/

var result = [];
var arrayX = [];
var count = 0;

function occurences(x){

    arrayX = x.split("");

    console.log(arrayX)

    for(var i=0; i<arrayX.length; i++){

        count = 1;

        for(var j=arrayX.length; j>i; j--){
            if( arrayX[i] == arrayX[j]){
                count = count+1;
            };
        };

        if (result.indexOf(arrayX[i])<0){ 
            result.push(arrayX[i]);
            result.push(count);
        };

    };

    return result
}

occurences('wellcome');