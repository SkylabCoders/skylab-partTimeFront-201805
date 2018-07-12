
/*### removeElement

Write a JavaScript function to remove a specific element from an array.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]
*/

function removeElement(x,y){
    var indice = x.indexOf(y);

    x.splice(indice,1);

    return x

};

removeElement([2, 5, 9, 6],5);

const remove = (x,y)=>{
    let indice = x.indexOf(y);  
    x.splice(indice, 1);
    return x
};

console.log(remove ([2, 5, 9, 6],5));


// =================================================================

/* Sum and Product
Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct (a){
    var sum = 0;
    var product = 1;
    for (i=0;i<a.length;i++){
        sum = sum + a[i];
        product = product * a[i];
    }

    return "la suma es " + sum + " el product es " + product
}*/


const sumAndProduct = (a) => {
    
    const sum = a.reduce(function(x,y,i,v){
        return x+y
    },0);

    const product = a.reduce(function(x,y){
        return x*y
    },1);

    return `a suma es ${sum} y el product es ${product}`

};

console.log(sumAndProduct([1,2,3,4,5]));


