
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




