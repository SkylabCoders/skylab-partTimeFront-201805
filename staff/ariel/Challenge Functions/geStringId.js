/* ## getStringId 

Write a JavaScript function that generates a string id (specified length) of random characters.

    Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function getStringId(){
    var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var generated = '';
    var elementosMax = window.prompt('Ingrese el máx nro de elementos que tendrá el string', 'max elements');
    var elementos = Math.round(Math.random()*elementosMax);
    var parImpar = 0;

    for (var i = 0; i<elementos; i++){
        parImpar = (Math.round(Math.random()*25));
        if (Number.isInteger(parImpar/2)){
            generated = generated + letters[parImpar];
        } else {
            generated = generated + Math.round(Math.random()*100);
        };
    };

    console.log(generated);

};

getStringId();