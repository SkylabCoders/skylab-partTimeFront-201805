function generateArrayOfnumbers(){
    
    var generated = [];
    var elementos = window.prompt('Ingrese el nro de elementos', 'elementos');
    var valor = window.prompt('Ingrese el valor máximo de los elementos ', 'valor');
   
    for (var i = 0; i<elementos; i++){

        generated[i] = Math.round(Math.random()*valor);
    };

    return generated
};