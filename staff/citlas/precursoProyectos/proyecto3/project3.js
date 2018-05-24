/* Mini-Proyecto del tema 3
BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. 
Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. 
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, 
si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. 
El cartón se mostrará, al final de cada turno, con los cambios efectuados, 
indicándole al usuario qué número se ha encontrado. 
El programa deberá preguntar al usuario al inicio de 
cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.
Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la 
ejecución seguirá, 
el juego solo acabará cuando todos los números estén a "X".
Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. 
Por último, deberá preguntar si desea volver a jugar.

Hint:
Empieza por la versión más básica!
Why?:
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que 
empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido 
podremos empezar a extenderlo tanto como queramos.
Si funciona con 5 números deberá funcionar con 15, no? 😁
Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random 
cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el 
número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima 
versión posible, eso ya lo solucionaremos. Si hay coincidencia, remplazaremos el número por una 'x' y 
mostramos el cartón modificado

Sepáralo todo en funciones, englobado en una funcion global llamada bingo(), tal que:
-Function! => Generar Numero Random Bombo
-Function! => Nuevo turno (Match carton[i] === randomNum)
-Function! => Preguntar Nuevo Turno*/


function bingo (){
	var numbers = [1,2,3,4,5];
	var linea = ['x','x','x','x','x'];
	var turnos = 0;
	var winner = false;
	
	
	function name() {
    var person = prompt("¿Cuál es tu nombre?", "Escribelo aquí");
    if (person != null) {
        console.log("Hola " + person + "! List@ para el bingo?");
    }
  }
  name();
  
  
  function mostrarCarton(){
    console.log('Estos son los números en tu carton ' + numbers + '. Es hora de jugar!!');
  }
  mostrarCarton();
  
	function random (){
	  return Math.floor((Math.random() * 5)+1);//entre 1 y 5
  }
  
  function endGame(){
    console.log('Felicidades Ganaste!');
    winner = true;


  }
  

function checkX(num) {
    return num === 'x';
}



  function checkLine(){
    if (numbers.every(checkX)) {
    console.log('linea!!!!!')
    console.log('te ha tomado ' + turnos + ' turnos!')
    endGame();
    }
      
  }
  
   function confirm (){
    var yN = prompt("¿Quieres otro número?", "Escribe Y si sí o N para No");
    if (yN.toUpperCase() === 'Y') {
        console.log("si quiere seguir jugando");
        newTurn();
    } else {
      console.log('Ok, aqui se acaba el juego! Hasta luego')
    }
     
   }
 
 function playAgain (){
    var yN = prompt("¿Quieres empezar de nuevo?", "Escribe Y si sí o N para No");
    if (yN.toUpperCase() === 'Y') {
        console.log("si quiere empezar de nuevo jugando");
        numbers = [1,2,3,4,5];
    	turnos = 0;
    	winner = false;
        newTurn();
    } else {
      console.log('Ok, aqui se acaba el juego! Hasta luego')
    }
     
   } 

  
  function newTurn (){
    turnos++;

    for (number=0;number<numbers.length+1;number++){
      var numRan = random();
        if (numRan === numbers[number]){
       	  console.log('Ha salido el ' + numbers[number]);
          numbers.splice(number,1,'x');      
          break;
        }//termina if random
    }//termina for
    
    console.log(numbers);
    checkLine();
    if (winner === false){
    	confirm();
    } else {
    	playAgain();
    	
    }

  }//termina turn
  
  newTurn();
}//termina bingo

bingo();

  
