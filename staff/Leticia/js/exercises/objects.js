//is_object
// Write a JavaScript function to check whether an input is an object or not.

var a = "pepe";
var manolo =  {
    age: 30,
    job: 'window cleaner'
}

function detectObjects(obj) {
    if(typeof(obj) === "object"){
        return "this is an object";
    } else {
        return "this is not an object";
    }
}

detectObjects(manolo);
detectObjects(a);

// Create object car
// Write an object that represents a car with three properties: brand, model, color. 
// Add a method that shows the following message: 'My black Sean León is great!' 
// (Hint: use this)

var car = {
    brand: 'fiat',
    model: 'panda',
    color: 'blue'
}
function showMyCar(){
    var myCar = 'My ' + car.color + ' ' + car.brand + ' ' + car.model + ' is great';
    
    console.log(myCar);
}

showMyCar();


