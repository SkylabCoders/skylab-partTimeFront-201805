//### swapCase: Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

var txtString = prompt('Ingrese una palabra, frase o texto','texto aquí');
var txtArray = [];


for (i=0; i<txtString.length; i++){
    if (txtString[i] ==='.' || txtString[i] ===',' ||txtString[i] ==='-'||  txtString[i] ==='-'){
        continue;
    } else if (txtString[i] === txtString[i].toUpperCase()) {
        txtArray[i] = txtString[i].toLowerCase();
    } else {
        txtArray[i] = txtString[i].toUpperCase();
    }
}
