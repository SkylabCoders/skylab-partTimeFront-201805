/*# Practice Control-flow [25m]
# Goals
-  Control flows
# Tasks
*/

//### larger_integer
//Write a JavaScript program that accept two integers and display the larger.
function larger(a,b){
    if (a<b){
        return b;
    } else {
        return a;
    }
}
console.log(larger(3,5))

/*### sign_product
//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2 
Output : The sign is -
*/
function productSign(a,b,c){
    var product = a*b*c;
    if (Math.sign(product)<1){
        return("The sign is -");
    } else {
        return("The sign is +");
    }
}
console.log(productSign(3,4,-2));

/*
### sort_numbers
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1
*/
function sortThree (a,b,c){
    var myArray = [a,b,c] 
      return myArray.sort().reverse();
  }
  console.log(sortThree(0,-1,4))

/*###  largest_number
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1 
Output : 0
*/
function largestOfFive(a,b,c,d,e){
    var myArray = [a,b,c,d,e]; 
    myArray = myArray.sort().reverse();
    return myArray[0];
}
console.log(largestOfFive(-5, -2, -6, 0, -1));

/*
### odd_or_even
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even"
*/
for (var i=0; i<16; i++){
    if (i % 2 == 0){//even
        console.log(i+" is even");
    } else {
        console.log(i+" is odd");
    }
}

/*### FizzBuzz
Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and 
for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz".
*/


//SOLUCION de Leticia
for(var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }else if(i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*
### contruct_pattern
Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor
```
*  
* *  
* * *  
* * * *  
* * * * *
```
*/
//solucion Cristiam
for(var i=1 ; i<=5 ; i++){
    var chr = '';
    
    for(var j=1 ; j<=i ; j++){
      chr += "* ";  
    }
    
    console.log(chr);
    
  }

/*
### under_1000
Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/
//solucion Cristiam
var sum = 0;

for(var i=0 ; i<1000 ; i++){
  if(i%3 === 0 && i%5 === 0){
    sum += i
  }
}
console.log(sum);