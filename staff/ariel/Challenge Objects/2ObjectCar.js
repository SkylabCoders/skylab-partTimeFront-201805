/*### Create object car

Write an object that represents a car with three properties: `brand`, `model`, `color`. Add a method that shows the following message: 'My black Sean León is great!' (Hint: use `this`)

Use literal notation, and object constructor notation.
*/

function car (brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.message = function (){
        console.log('My ' + this.color + ' ' + this.brand + ' ' + this.model + ' is great!');
    };

};

var miCoche = new car('Seat', '500', 'old');

miCoche.message();
