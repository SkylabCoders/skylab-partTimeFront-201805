/*### getNthLargest

Write a JavaScript function to get nth largest element from an unsorted array.

    Test Data :
    console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
    89

*/

function getLargestElement(x,y){

        function order(a,b){
            if (a<b){
                return -1
            };
            if (a>b){
                return 1
            };
        };

        x.sort(order)

        var element = x[x.length-y];


    return element
}

getLargestElement([ 43, 56, 23, 89, 88, 90, 99, 652], 4);