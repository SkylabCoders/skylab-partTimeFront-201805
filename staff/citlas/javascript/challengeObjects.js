/*is_object
Write a JavaScript function to check whether an input is an object or not.
*/
var myObj = {a:1,b:2,c:3}

function isObject(obj){
    console.log( typeof obj);
  if (typeof obj === "object"){
    console.log("it is an object")
  } else {
    console.log("not an object")
  }
}

isObject(myObj);


/*
Create object car
Write an object that represents a car with three properties: brand, model, color.
Add a method that shows the following message: 'My black Sean León is great!' (Hint: use this)
Use literal notation, and object constructor notation.*/


//literal notation
var car = {
    brand: "Seat",
    model: "Leon",
    color: "black"
}

//object constructor
function CarConstructor(brand, model, color) {
    this.brand = brand,
    this.model = model;  
    this.color = color;  
  }
  var seatCar = new CarConstructor("Seat b","Leon b","blackish");

console.log(car);
console.log(seatCar);

function showMessage(obj){
return "My " + obj.color + " "+ obj.brand + " " + obj.model + " is great!"
}

console.log(showMessage(car));