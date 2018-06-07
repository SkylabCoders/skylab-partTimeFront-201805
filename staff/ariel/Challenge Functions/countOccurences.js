/* ## Occurrencers Letter

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

    Sample arguments : 'w3resource.com', 'o' 
    Expected output : 2 

*/


function getRandomString(){
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


    return generated

};

function getRandomLetter(){
    var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var letter = '';
    var indice = (Math.round(Math.random()*letters.length));
    letter = letters[indice];

    return letter

};

function countOccurences(str, letter){
    var count = 0;
    var convertToArray = [];

    convertToArray = str.split("");

    for (var i=0; i<convertToArray.length; i++){
        if (convertToArray[i] === letter){
            count = count + 1;
        }
    }

    console.log('La letra ', letter, ' aparece ', count, ' veces en el string')
};


countOccurences(getRandomString(), getRandomLetter());
