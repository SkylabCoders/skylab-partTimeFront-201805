/*### unionArray

Write a JavaScript program to compute the union of two arrays.
Sample Data :

    console.log(union([1, 2, 3], [100, 2, 1, 10]));
    [1, 2, 3, 10, 100]
*/



function unionArrays(x,y) {

    for (i= 0; i<y.length; i++){

        x.push(y[i]);
    };

    var compare = function(a,b){
        if(a < b){
            return -1;
        } 
        return 1;
    };

    x.sort(compare);

    for ( i = x.length-1; i>=0; i-- ){
        if ( x[i] == x[i-1]){
            x.splice(x[i], 1);
        };
    }

    return 'El array resultado es:' , x
};

unionArrays([1, 2, 3], [100, 2, 1, 10]);