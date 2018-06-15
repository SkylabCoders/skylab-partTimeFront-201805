// ### shuffleArray: Write a JavaScript program to shuffle an array.


function shuffle(){
    var array1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = [];
    var elementos = Math.round(Math.random()*100);
    var parImpar = 0;
    var pos1 = 0;
    var pos2 = 0;
    var trans = 0;

    // PRIMERA ITERACION PARA ASIGNAR ALEATORIAMENTE LETRAS O NROS AL ARRAY GENERADO
    for (var i = 0; i<elementos; i++){
        parImpar = Math.round(Math.random()*25);
        if (Number.isInteger(parImpar/2)){
            generated[i] = array1[parImpar];
        } else {
            generated[i] = Math.round(Math.random()*100);
        };
    };

    console.log('El array oririginal es:  ' + generated);

    for (var i=0; i < elementos*1000; i++){
        pos1 = Math.round(Math.random()*elementos);
        pos2 = Math.round(Math.random()*elementos);
        generated[trans] = generated[pos2];
        generated[pos2] = generated[pos1];
        generated[pos1] = generated[trans];
    };

    console.log('El array modificado es:  ' + generated);
};

shuffle();

