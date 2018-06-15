
// EXPRESION PARA VALIDAR SI UNA DIRECCION DE CORREO ES CORRECTA

var regExp = /^[a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;



var regExp = /^\d{5}$/;  // -----> Zip code de España  ^ --> que empiece con;  \d ---> digitos,  {5} nro de dígitos; $ ---> que acabe con

console.log(regExp.test(123456))
