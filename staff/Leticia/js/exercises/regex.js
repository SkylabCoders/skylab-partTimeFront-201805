
// regExp
//---------------------------------------------

var regExp = /a/ig;

var text = "JAnuarayA";

metodo de para regExp -> .exec:
console.log(regExp.exec(text));

console.log(regExp.exec(text,'g'));???

console.log(text.replace(regExp,"x"))

// Fuera de //
// i -> ignore case
// g -> global

// dentro de //
// [] -> match any character inside the brackets [ae]
// ^ -> [^au] que no contenga
// a-o -> el - crea un rango [a-o]
// | -> [u|a] o una u otra
// a+ -> al menos una a
 
// Escapar
// \.
// \n
// \s


var patt = /aa/ig
//exec ejecuta busqueda y da resultado
console.log(patt.exec("asdaakaas"))
// {'aa', index: 3, input: 'asdaakaas'}

// Comprobación email válido:
var regExp = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
// Test da true/false
console.log(patt.test("asdaakaas"))

// que empiece y acabe con 5 digitos
var regExp = /^\d{5}$/;
console.log(regExp.test(123456));


var patt = /aa/ig
//toString pasa a string
console.log(patt.toString("asdaakaas"))




