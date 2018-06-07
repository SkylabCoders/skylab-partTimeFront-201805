/* Definir un array con 20 palabras aleatorias (pueden estar relacionadas con una categoría 
    como por ejemplo "Verduras", "Equipos de fútbol)
Seleccionar una palabra y definir el número de vidas del usuario
Utilizando el window.prompt debéis ir preguntando letras al usuario
Si la letra es correcta, debéis informarlo e irla escribiendo
Si la letras no es correcta debéis informarlo y descontar el número de vidas del usuario
Si se agotan las vidas del usuario, mostrar un mensaje "GAME OVER"
Si se adivina la palabra, mostrar un mensaje "YOU WIN"*/
/* Definir un array con 20 palabras aleatorias (pueden estar relacionadas con una categoría 
    como por ejemplo "Verduras", "Equipos de fútbol)
Seleccionar una palabra y definir el número de vidas del usuario
Utilizando el window.prompt debéis ir preguntando letras al usuario
Si la letra es correcta, debéis informarlo e irla escribiendo
Si la letras no es correcta debéis informarlo y descontar el número de vidas del usuario
Si se agotan las vidas del usuario, mostrar un mensaje "GAME OVER"
Si se adivina la palabra, mostrar un mensaje "YOU WIN"*/

var paises = ['mexico','españa','argentina','venezuela','colombia', 'uruguay','francia','alemania','suiza','suecia', 'italia','croacia','canada','china','japon', 'portugal','brasil','chile','andorra','holanda'];


function hangman(){
    var vidas = 5;
    var selectedWord; 
    var xWord = [];
    var counts = {};

  //seleccionar palabra random y separarla en letras
   // function selectWord(){
        selectedWord = paises[Math.floor((Math.random() * paises.length))];
        selectedWord = selectedWord.split('');
    //}
    //selectWord();
    console.log(selectedWord);
  
    //var final = selectedWord.slice(0).join('');  //para tener la palabra final
  
    for(i=0;i<selectedWord.length;i++){
      xWord.push('*');//para crear la palabra con * en cada letra
    }
  console.log(xWord);
  
  function checkStatus(){
    if (xWord.includes('*')){
          if (vidas<1){
            alert('Game Over \n La palabra era '  + selectedWord.join(''));
            return
          } else {
          askLetter();
          };
    } else {
          alert('You win');
          return
    }
  };//fin de check status

 

  function askLetter(){
    var letter = prompt('Escoge una letra', 'escribela aqui');
    letter=letter.toLowerCase();
    var acertar = 0;
    for (i=0;i<selectedWord.length;i++){
      if(selectedWord[i]==letter){
        xWord[i]= letter;
       
        
        //selectedWord[xWord.indexOf(letter)] = '1';
        //console.log(xWord)
        acertar++;
      } 
      
      }//termina for
    if (acertar<1) {
        vidas--; 
        alert('una ' + letter + ' No has acertado! te quedan ' + vidas + ' vidas!');  
      } else {
         alert('una ' + letter + ' Has acertado!\n' + xWord.join(''));
      }
     checkStatus();
  }
  
  askLetter();

}

hangman();
console.log("este es otro----------------")

console.log('------------------------------------')

// solucion Ari



function hangMan(){

  var frutas = [
      'manzana',
      'banana',
      'pera',
      'fresa',
      'cereza',
      'anana',
      'tomate',
      'naranja',
      'clementina',
      'chirimoya',
      'pomelo',
      'melocoton',
      'ciruela',
      'lichi',
      'melon',
      'sandia',
      'mango',
      'papaya',
      'higos',
      'maracuya',
      'guanabana'
  ];
  var palabra = [];
  var incognita = [];
  var guess = [];
  var cont = 0;

  var nombre = window.prompt('Ingresa tu nombre', 'nombre');

  // ELECCION ALEATORIA DE LA PALABRA

  var indice = Math.round(Math.random()*20);
  for (var i=0; i<frutas[indice].length; i++){
      palabra[i]=frutas[indice][i];
      incognita[i]='_'
  }

  // LA CANTIDAD DE VIDAS ES 1,5 x LONGITUD DE LA PALABRA
  var vidas = Math.round(palabra.length * 1.5);

  alert('Hola ' + nombre.toUpperCase() + '\n\n La fruta tiene ' + frutas[indice].length + ' letras.      '+ incognita.join(' ') +'\n\n  y tienes ' + vidas + ' vidas para adivinarla');

  while (vidas > 0) {

      guess = window.prompt('La fruta es    ' + incognita.join(' ') +'\ntienes ' + vidas + ' vidas' + '\n\n Ingrese una letra', 'letra');
      var esta = false;
    
      for (i=0; i<palabra.length; i++){               // Analiza si la letra ya se ha ingresado con anterioridad
          if(guess === incognita[i]){
              alert ('La letra "' + guess.toUpperCase() + '" ya ha sido ingresada')
              guess = window.prompt('La fruta es    ' + incognita.join(' ') + '\n\n Ingrese una letra', 'letra');
            
          } else if (guess === palabra[j]){
              incognita[j] = guess;
              esta = true;
          } 
      };


      if (esta){


          if ( incognita.join() === palabra.join() ) {
              alert('FELICITACIONES HAS GANADO!!! \nLa fruta era:    ' + frutas[indice].toUpperCase());

          
              break;
          }

          alert ('Felicitaciones la letra "' + guess + '" está en la palabra. '+ '\n\nLa fruta es:     ' + incognita.join(' ') + '\n\nTienes ' + vidas +'vidas');

      } else if (cont == 0 ){
          vidas = vidas - 1;

          if (vidas == 0 ){
              alert('GAME OVER\n\nLa fruta era: ' + frutas[indice]);
              break;

          } else {
              alert('La letra "' + guess + '" no se encuentra en la palabra. \n\nLa fruta es: ' + incognita.join(' ') + '\n\nTe quedan ' + vidas + ' vidas');
          };
      }

  };
}
hangMan();


//respuesta leticia

var greekGods = ['Achelous']//,'Aeolus','Aether','Alastor','APOLLO','ARES','Aristaeus','Asclepius','ATLAS','Attis','Boreas','Caerus','Castor','Cerus','CHAOS','Charon','Cronos','Crios','CRONUS','Dinlas','DIONYSUS'];

var lifes = 8;
var userProgress = [];

//function chose a word 
function chooseWord(arr){
    randomPos = Math.floor(Math.random() * arr.length);
    return greekGods[randomPos].split('');
}

function encriptWord(arr) {
    var wordEncripted = []; 
    
    for(i=0;i<arr.length;i++){
        wordEncripted.push(' _ ');
    }
    return wordEncripted; 
}

function playLetter(wordToGuess, status){
    var letter = window.prompt('¿Qué letra quieres jugar? ESTADO: '+status.word.join('')); // [3] ask for letter    
    var esta = false;
  
    //comprobacion de letra dentro de array
    for(var i = 0; i < wordToGuess.length; i++) {
        if(letter === wordToGuess[i]){
            status.word[i] = wordToGuess[i];
            esta = true;
        }
    }
    
    if(!esta){
      status.lifes--;  
    }
    
console.log(status.word, wordToGuess);
    if(status.word.join('') === wordToGuess.join('')){
       status.current = "success";
        
    }else if(status.lifes == 0){
      status.current = "fail";
    }
    
    return status;
  
}


function hangman(arr){
    var wordToGuess = chooseWord(arr); // [1] choose a word 
  
    var status = {
      lifes: 8,
      word : encriptWord(wordToGuess),
      current: "running"
    }
  
    while (status.current === "running"){
      status = playLetter(wordToGuess, status);
      // {lifes: 7, word:['_'], current: 'running' }
      console.log(status);
      
    }
  
    if(status.current === "success"){
      alert("YOU WIN");
      
    }else if(status.current === "fail"){
      alert("GAME OVER");
    }
}

hangman(greekGods);