/*function calculate(){
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

      if (typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined' || typeof b === 'string' || typeof b === 'boolean'){
   console.log('Al menos uno de los valores que introduciste no es un número')
   
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

*/

/*

Pasapalabra Game! (Final JS) 🎮⁉️
Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

Haz el juego del Pasapalabra, 
el programa deberá lanzar la definición de una palabra y 
el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, 
al final del juego, y habiendo respondido todas las letras, 
deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. 
Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender 
que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, 
la dejará para la siguiente ronda. 
El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.


*/

//function pasapalabraPlay (){
  var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]
  var scoreOK = 0
  var scoreBad = 0
  var pasadas = []
  var pasadasCounter = 0
  var jugador = prompt('Cuál es tu nombre?', 'responde aquí')
  var jugadores = {}
  jugadores.player = jugador
  console.log(jugadores.player)
  var iGlobal = 0
  
  document.getElementById('bienvenida').innerHTML = 'Vamos a jugar ' + jugador + '!'


  function play(){
      
      document.getElementById('preguntaShow').innerHTML = questions[iGlobal].question
      //aqui falta darle send al button de esta es mi respuesta    
  }
  //play()

  function end(){
    if (iGlobal>26){
        pasapalabra()
        console.log('Ya se acabo')
        console.log(jugadores.player + ' has tenido ' + jugadores.puntos)
        console.log(jugadores)
        document.getElementById('resultadosShow').innerHTML = 'Has tenido ' + scoreOK + ' aciertos y ' + scoreBad + ' errores y ' + pasadasCounter + ' pasapalabra'
        jugadores.puntos = scoreOK
        document.getElementById('resultadosShow').style.backgroundColor = "white";
     } 
  }

  function answer(){ 
     var responde = document.getElementById('respuestaInput').value
      //console.log(responde + 'esto es responde')
      //console.log(iGlobal + 'esto es iglobal')
      //prompt('Cuál es la respuesta de...' + questions[i].question, 'responde aquí')
      if (responde.toLowerCase()=== questions[iGlobal].answer){
        console.log('muy bien')
        scoreOK++ 
        document.getElementById(questions[iGlobal].letter).style.backgroundColor = "rgb(46, 204, 113)";
        iGlobal++
        document.getElementById('respuestaInput').value = ''
        document.getElementById('preguntaShow').innerHTML = questions[iGlobal].question
        end()
      } else if (responde === 'pasapalabra'){
        console.log('has pasadopalabra')
        pasadas.push(iGlobal)
        pasadasCounter++
        document.getElementById(questions[iGlobal].letter).style.backgroundColor = "rgb(241, 196, 15)";
        iGlobal++
        document.getElementById('respuestaInput').value = ''
        document.getElementById('preguntaShow').innerHTML = questions[iGlobal].question
        end()
      } else {
        console.log('mal')
        scoreBad++ 
        document.getElementById(questions[iGlobal].letter).style.backgroundColor = "rgb(231, 76, 60)";
        iGlobal++
        document.getElementById('respuestaInput').value = ''
        if (iGlobal<27){
          document.getElementById('preguntaShow').innerHTML = questions[iGlobal].question          
        }
        end()
      }
    }
  
  console.log(pasadas)

  function pasapalabra(){
    for (i=0;i<pasadas.length;i++){
      console.log(questions[pasadas[i]].question)
      var responde = prompt('Se acabo la ronda. Esta es una de tus palabras pasadas. Cuál es la respuesta de...' + questions[pasadas[i]].question, 'responde aquí')
      if (responde === questions[pasadas[i]].answer){
        console.log('muy bien')
        scoreOK++
        document.getElementById(questions[pasadas[i]].letter).style.backgroundColor = "rgb(46, 204, 113)";

      } else if (responde === 'pasapalabra'){
        console.log('has pasadopalabra')
        pasadas.push(i)
        pasadasCounter++
      } else {
        console.log('mal')
        scoreBad++
        document.getElementById(questions[pasadas[i]].letter).style.backgroundColor = "rgb(231, 76, 60)";

      }
    }

  }
  //pasapalabra()
  

  
//}

//pasapalabraPlay()

function otroJuego(){
   scoreOK = 0
  scoreBad = 0
  pasadas = []
  pasadasCounter = 0
  iGlobal = 0
  //document.getElementById('a').style.backgroundColor = "rgb(127, 140, 141)";
  var changeLetters = document.getElementsByClassName("letter");
  var len =  changeLetters.length;
  for(var i=0 ; i<len; i++){
   changeLetters[i].style.backgroundColor="rgb(52, 73, 94)";
  }
  document.getElementById('resultadosShow').innerHTML = ''
  play()
}




