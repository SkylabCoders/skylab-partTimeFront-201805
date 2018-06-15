//### removeDuplicate: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


function replaceDup(){
    var array1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = [];
    var nodupl=[];
    var elementos = Math.round(Math.random()*100);
    var parImpar = 0;

    // PRIMERA ITERACION PARA ASIGNAR ALEATORIAMENTE LETRAS O NROS AL ARRAY GENERADO
    for (var i = 0; i<elementos; i++){
        parImpar = (Math.round(Math.random()*25));
        if (Number.isInteger(parImpar/2)){
            generated[i] = array1[parImpar];
        } else {
            generated[i] = Math.round(Math.random()*100);
        };
    };

    console.log(array1[parImpar]);

    console.log('El array generado es :   ' + generated)
    console.log('');



    // SEGUNDO ITERACION PARA COMPARAR ELEMENTOS DE UN MISMO ARRAY Y ELIMINAR LOS REPETIDOS


    for (var k=0; k < generated.length; k++){
        
        for (var l = generated.length; l>k; l--){
            
            if (generated[k] === generated[l]){
                generated.splice(l,1);
            };
        };
    };


    console.log('El array sin repeticiones es :   ' + generated)
};

replaceDup();