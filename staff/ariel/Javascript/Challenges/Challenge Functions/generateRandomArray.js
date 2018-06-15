function generateRandomArray(){
    var array1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = [];
    var elementos = Math.round(Math.random()*100);
    var parImpar = 0;


    for (var i = 0; i<elementos; i++){
        parImpar = (Math.round(Math.random()*25));
        if (Number.isInteger(parImpar/2)){
            generated[i] = array1[parImpar];
        } else {
            generated[i] = Math.round(Math.random()*100);
        };
    };

    console.log(array1[parImpar]);

    console.log('El array generado es :   ' + generated);
    console.log('');

    return generated
};

generateRandomArray();

