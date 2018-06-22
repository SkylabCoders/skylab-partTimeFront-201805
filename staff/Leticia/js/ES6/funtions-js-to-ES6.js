function removeElement(x,y){
    var indice = x.indexOf(y);

    x.splice(indice,1);

    return x

}
removeElement([2, 5, 9, 6],5);



const removeElement = (x,y) => {
    let indice = x.indexOf(y);
    x.splice(indice,1);
    return x;
}
removeElement([2, 5, 9, 6],5);

//------------------------------------

// Original
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

// ES6 hacer de nuevo
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


//------------------------------------

//Original
function sumAndProduct (a){
    var sum = 0;
    var product = 1;
    for (i=0;i<a.length;i++){
        sum = sum + a[i];
        product = product * a[i];
    }
}
return "la suma es " + sum + " el product es " + product

//ES6
const sumAndProduct = (a)=>{
    let sum = 0;
    let product = 1;
    // a.forEach ((n)=> sum = sum + n);
    // a.forEach((n) => product = product * n);
    a.forEach((n) => {
        sum=sum+n
        product=product*n
    });
    
    return `la suma es ${sum} el product es ${product}`
}

console.log(sumAndProduct([2,3]))


// ------
const sumAndProduct = (a) => {
    
    const {sum, pro} = a.reduce(function(x,y){
        return {sum: x + y.sum, pro: x * y.pro}
      
    },{sum: 0, pro: 1});

    return `a suma es ${sum} y el product es ${pro}`

};

console.log(sumAndProduct([1,2,3,4,5]));

  
  
  
  