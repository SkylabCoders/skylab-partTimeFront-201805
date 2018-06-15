// ### mostFrequentItem Write a JavaScript program to find the most frequent item of an array.

    //Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //Sample Output : a ( 5 times ) 


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var repetitions = [];
var max = 0;
var position = 0;

function mostFreq(){

    for (var i=0; i<arr1.length; i++){
        
        var count = 1;

        for( var j=i+1; j<arr1.length; j++)

            if( arr1[i]==arr1[j]){
            count = count+1
        }

        repetitions.push(count);

    }

    console.log('Repeticiones: ' + repetitions);
    max = Math.max.apply(null, repetitions);
    position = repetitions.indexOf(5);
    console.log('El valor que más se repite es el: ' + arr1[position]);
    console.log('y se repite: ' + max + ' veces.')

}

mostFreq();