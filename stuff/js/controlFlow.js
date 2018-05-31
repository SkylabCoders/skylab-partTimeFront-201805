# Practice Control-flow [25m]

# Goals

-  Control flows

# Tasks

### larger_integer

Write a JavaScript program that accept two integers and display the larger.


function max(x,y){
    return x>y ? x:y
};

console.log(getMax(x,y));


### sign_product

Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function getSign(x, y, z){
    
    signo = Math.sign(x*y*z)

    if (signo == -1){
        console.log('Signo negativo');
    }
        else if (signo == 1){
        }
}
```
Sample numbers : 3, -7, 2 
Output : The sign is -
```

### sort_numbers

Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

var vector = [-5,-2,0];
var newArray =[];

function getMax(x){

    for (var i=0; i<x.length; i++){

        if (x[i] > x[i+1] && x[i] > x[i+2]){
            newArray[i] = x[i];
        } else if { (x[i] > x[i+1] && x[i] < x[i+2]) 
                newArray[i] = x[i+2];
            
        } else if { 
            (x[i] < x[i+1]){

            
        }

        }

    }

    console.log(newArray)
}

getMax(vector)


function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

```
Sample numbers : 0, -1, 4 
Output : 4, 0, -1
```

###  largest_number

Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

```
Sample numbers : -5, -2, -6, 0, -1 
Output : 0
```

### odd_or_even

Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

```
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even"
```

### FizzBuzz

Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

### contruct_pattern

Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor


for (var i=0; i<5; i++){
    var chr = '';
    for (var j=0; j<=i; j++){
        chr = chr + '* '; //chr += '* '
    }
    console.log(chr)
}


 var chr = '';
for (var i=0; i<5; i++){
    chr = chr + '* '; //chr += '* '
    
    console.log(chr)
}



```
*  
* *  
* * *  
* * * *  
* * * * *
```

### under_1000

Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;

for(var i=0 ; i<1000 ; i++){
  if(i%3 === 0 && i%5 === 0){
    sum += i
  }
}
console.log(sum);