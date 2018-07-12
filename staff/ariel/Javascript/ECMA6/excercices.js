////// CIT

const sumAndProduct = (a)=>{ 
  
  let sum = 0;
  let product = 1;
  a.forEach((n) => {
    sum=sum+n
    product=product*n
  });
  //a.forEach((n) => product=product*n)
  
  return `la suma es ${sum} y el product es ${product}`;
}

console.log(sumAndProduct([2,3]))

//----------------- sol Ari
const sumAndProduct = (a) => {
    
    const {sum, pro} = a.reduce(function(x,y){
        return {sum: x + y.sum, pro: x * y.pro}
      
    },{sum: 0, pro: 1});

    return `a suma es ${sum} y el product es ${pro}`

};

console.log(sumAndProduct([1,2,3,4,5]));


const sumAndProduct = (a) => {
    
    const sum = a.reduce(function(x,y){
        return x+y
    },0);

    const product = a.reduce(function(x,y){
        return x*y
    },1);

    return `a suma es ${sum} y el product es ${product}`

};

console.log(sumAndProduct([1,2,3,4,5]));


//-----------------------------

////// LET

var sentence = "The Quick Brown Fox";

function invertCase(str){
    var newArray = str.split("");

    for(i = 0; i < newArray.length; i++){
        if( newArray[i] === newArray[i].toLowerCase()) {
            newArray[i] = newArray[i].toUpperCase();
        } else {
            newArray[i] = newArray[i].toLowerCase();
        }
    }
    return newArray.join("");
}

invertCase(sentence);

//-------------

let sentence = "The Quick Brown Fox";

const invertCase = (str) => {
    let newArray = str.split("");

    newArray.forEach((e)=>{
        if( e === e.toLowerCase()) {
            e = e.toUpperCase();
        } else {
            e = e.toLowerCase();
        }
    });
    
    return newArray.join("");
}

invertCase(sentence);}



/*### removeElement ---> Ari

Write a JavaScript function to remove a specific element from an array.

    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]
*/

function removeElement(x,y){
    var indice = x.indexOf(y);

    x.splice(indice,1);

    return x

}

removeElement([2, 5, 9, 6],5);

// ===================================

const remove = (x,y)=>{
    const indice = x.indexOf(y);  
    x.splice(indice, 1);
    return x
};

console.log(remove ([2, 5, 9, 6],5));


//-------------solucion citlas
const removeElement = (arr,el)=>{ 
 return arr.filter((n) => n != el );
}
console.log(removeElement([2, 5, 9, 6], 5));
