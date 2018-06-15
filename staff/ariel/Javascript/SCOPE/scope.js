

var a = 2

function fA(x){
     x = a + 1

    return  x
};


function fB(x){
     y = x + a

    return  y
}

console.log('el resultado de fA() es ' + fA() + ' y el de fB() es ' + fB());


console.log('=============')

console.log('el resultado de fA(1) es ' + fA(1) + ' y el de fB(fA(1)) es ' + fB(fA(1)));

function send(name) {  // Local variable 'name' is stored in the closure  
    
    return function () {  
        sendHi(name);  // for the inner function.  
    }  
}  

function sendHi(msg) {  
    console.log('Hello ' + msg);  
}  

var func = send('Bill');  

func();  
// Output:  
// Hello Bill  

sendHi('Pete');  
// Output:  
// Hello Pete  

func();  
// Output:  
// Hello Bill