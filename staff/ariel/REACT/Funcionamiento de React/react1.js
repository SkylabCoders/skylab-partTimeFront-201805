
const obj1 = {prop1: "pr1", prop11: "1111"};
const obj2 = {prop1: "pr2", prop2: "prrrr"};

console.log("--------- ANTES --------")
console.log(obj1)
console.log(obj2)

//Copia el objeto de la derecha en el objeto de la izquierda sustityendo 
//las keys comunes de ambos objetos con los valores del objeto de la derecha
// Tres tristes tigres...     ESTO SE UTILIZA PARA ACTUALIZAR EL STATE EN REACT
const obj3 = Object.assign(obj1, obj2);

console.log("--------- DESPUES --------")
console.log(obj1)
console.log(obj2)
console.log(obj3)
