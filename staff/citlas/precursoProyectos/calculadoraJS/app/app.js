function calculate(){
	//imputs siempre recogen en string por eso el parse
	var n1 = parseInt(document.getElementById('n1').value)
	var n2 = parseInt(document.getElementById('n2').value)
	var sum = n1+n2
	var subs = n1-n2
	var mult = n1*n2
	var div = n1/n2
	document.getElementById('results').innerHTML = '<li>' + n1 + ' + ' + n2 + ' = ' + sum + '</li>' + '<li>' + n1 + ' - ' + n2 + ' = ' + subs + '</li>' + '<li>' + n1 + ' x ' + n2 + ' = ' + mult + '</li>' + '<li>' + n1 + ' / ' + n2 + ' = ' + div + '</li>'
}

function calculator(a, b) {
  var results = [];
  
  a=document.getElementById('n1').value
  b=document.getElementById('n2').value

	if (isNaN(a)){	
		a = document.getElementById('n1').value
  	} else {
  		a= parseInt(document.getElementById('n1').value)
  	}
  	if (isNaN(b)){
  		b = document.getElementById('n2').value	
  	} else {	
  		b= parseInt(document.getElementById('n2').value)
  	}
	
	console.log(isNaN(a))
	console.log(typeof(a)+' esto es typeof a')
	console.log(typeof(b)+' esto es typeof b')
	console.log(b)

	
	

  /*if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined' || typeof b === 'string' || typeof b === 'boolean'){
   console.log('Al menos uno de los valores que introduciste no es un número')
   */
  

   if (typeof a !== 'number' && typeof b !== 'number'){
   document.getElementById('results').innerHTML = 'Ninguno de los dos valores que introduciste es un número'
  
   } else   if (isNaN(b)){//este me falla
    document.getElementById('results').innerHTML = 'la raiz cuadrada de ' + a + ' es ' + Math.sqrt(a).toFixed(3);
  
   } else if (typeof b !== 'number'){
   document.getElementById('results').innerHTML = 'El segundo valor que has introducido no es un número'  
   
   } else if (typeof a !== 'number'){
   document.getElementById('results').innerHTML = 'El primer valor introducido no es un número'
  
   
   } else {
    results.push(a + b);
    results.push(a - b);
    results.push(a * b);
    results.push(a / b); 
    for (i=0;i<results.length;i++){
  		if (results[i] % 1 !== 0){
    	results[i] = results[i].toFixed(3);
  		}
  	}
  	document.getElementById('results').innerHTML = '<ul>' + '<li>' + a + ' + ' + b + " = " + results[0] + '</li>'+ '<li>' + a + ' - ' + b + " = " + results[1] + '</li>'+ '<li>' + a + ' * ' + b + " = " + results[2] + '</li>'+ '<li>' + a + ' / ' + b + " = " + results[3] +'</ul>'
    } 
}
