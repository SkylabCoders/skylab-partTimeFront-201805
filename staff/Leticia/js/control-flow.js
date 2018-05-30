# Practice Control-flow [25m]

# Goals

-  Control flows

# Tasks

### larger_integer

//Write a JavaScript program that accept two integers and display the larger.

function getMax(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log(getMax(2,4));

### sign_product

Write a JavaScript conditional statement to find the sign of 
product (multiplicacion) of three numbers. 
Display an alert box with the specified sign.

var x = 3, y=-7, z=2;

if (x>0 && y>0 && z>0){
  console.log("The sign is +");
}
else if (x<0 && y<0 && z<0){
  console.log("The sign is -");
}
else if (x>0 && y<0 && z<0){
  console.log("The sign is +");
}
else if (x<0 && y>0 && z<0){
  console.log("The sign is +");
}
else{
  console.log("The sign is -");
}

```
Sample numbers : 3, -7, 2 
Output : The sign is -
```

### sort_numbers

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
if (x>y && x>z)
{
    if (y>z){
        console.log(x + ", " + y + ", " +z);
    }
    else{
        console.log(x + ", " + z + ", " +y);
    }
}
else if (y>x && y >z)
{
    if (x>z){
        console.log(y + ", " + x + ", " +z);
    }
    else{
        console.log(y + ", " + z + ", " +x);
    }
}
else if (z>x && z>y)
{
    if (x>y){
        console.log(z + ", " + x + ", " +y);
    }
    else{
        console.log(z + ", " + y + ", " +x);
    }
}  

```
Sample numbers : 0, -1, 4 
Output : 4, 0, -1
```

###  largest_number

//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

a=-5; b=-2; c=-6; d= 0; f=-1;

if (a>b && a>c && a>d && a>f){
    console.log(a);
}
else if (b>a && b>c && b>d && b>f){
    console.log(b);
}
else if (c>a && c>b && c>d && c>f){
    console.log(c);
}
else if (d>a && d>c && d>b && d>f){
    console.log(d);
}
else{
    console.log(f);
}

// con array y metodo
function largestOfFive(a,b,c,d,e){
    var myArray = [a,b,c,d,e]; 
    myArray = myArray.sort().reverse();
    return myArray.slice(0,1)[0];
}
console.log(largestOfFive(-5, -2, -6, 0, -1));

```
Sample numbers : -5, -2, -6, 0, -1 
Output : 0
```

### odd_or_even

//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for(var i = 0; i <= 15; i++) {
    if(i % 2 === 0) {
        console.log( i + " is even");
    } else {
        console.log( i + " is odd");
    }
}

```
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even"
```

### FizzBuzz

// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and 
// for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
for(var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

### contruct_pattern

Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// con loop anidado
for(var i=1 ; i<=5 ; i++){
    var chr = '';
    
    for(var j=1 ; j<=i ; j++){
      chr += "* " ;  
    }
    
    console.log(chr);    
}

//Con un solo loop
var chr = '';

for(var i=1 ; i<=5 ; i++){
  chr += "* ";  

  console.log(chr);
  
}
  

```
*  
* *  
* * *  
* * * *  
* * * * *
```

// under_1000
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;

for(var i=0 ; i<1000 ; i++){
  if(i%3 === 0 && i%5 === 0){
    sum += i
  }
}
console.log(sum);