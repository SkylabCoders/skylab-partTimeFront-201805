/* ## getLargerArrays

Write a JavaScript function that returns array elements larger than a number.

*/

function generateArrayOfnumbers(){
    
    var generated = [];
    var elementos = window.prompt('Ingrese el nro de elementos', 'elementos');
    var valor = window.prompt('Ingrese el valor máximo de los elementos ', 'valor');
   
    for (var i = 0; i<elementos; i++){

        generated[i] = Math.round(Math.random()*valor);
    };

    return generated
};



function getLargerArray(){
    var result = [];
    this.array = generateArrayOfnumbers();

    var maxVal = window.prompt('Ingrese el valor mínimo', 'valor mínimo');
    
    for (var i = 0; i<this.array.length; i++){

       if (this.array[i] > maxVal) {
           result.push(this.array[i])
       };
    };

    return result
};

getLargerArray();


