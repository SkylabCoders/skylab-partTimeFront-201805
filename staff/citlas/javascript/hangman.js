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



//-------------------------------------------------no sirve para tres letras repetidas ej canada

var paises = ['mexico','españa','argentina','venezuela','colombia', 'uruguay','francia','alemania','suiza','suecia', 'italia','croacia','canada','china','japon', 'portugal','brasil','chile','andorra','holanda'];


function hangman(){
    var vidas = 5;
    var selectedWord; 
    var xWord = [];
  var counts = {};

  
    function selectWord(){
        selectedWord = paises[Math.floor((Math.random() * paises.length))];
        selectedWord = selectedWord.split('');
    }
    selectWord();
    console.log(selectedWord);
  
    var final = selectedWord.slice(0).join('');  
  
  for(i=0;i<selectedWord.length;i++){
      xWord.push('2');
    }
  //console.log(xWord);
  
  function checkStatus(){
    console.log("this is xword " + xWord + " and this is final " + final)
      if (xWord.includes('2')){
          if (vidas<1){
        console.log('Game Over');
        console.log('la palabra era '  + final);
        return
      } else {
        askLetter();
      };
          }  else {
            console.log('You win');
            return
          }
      
    };

    function checkDuplicates(){
      
      for (var i = 0; i < selectedWord.length; i++)
        counts[selectedWord[i]] = (counts[selectedWord[i]] + 1) || 1;
      return counts;
    }
  //checkDuplicates()
  
    function askLetter(){
      var letter = prompt('Escoge una letra', 'escribela aqui');
     
      if (selectedWord.includes(letter)){
        
        // while (selectedWord.includes(letter)){
        checkDuplicates()
        console.log(counts)
        for (i=0;i<counts[letter]+1;i++){
          console.log('una ' + letter + ' Has acertado!');
        xWord[selectedWord.indexOf(letter)]= letter;
        selectedWord[xWord.indexOf(letter)] = '1';
        console.log(selectedWord + " esto es selected word")
        console.log(xWord + " esto es x word");
        }
        
     // }
           
      } else {
        vidas--; 
        console.log('una ' + letter + ' No has acertado! te quedan ' + vidas + ' vidas!');    
      }
      checkStatus();
    }
    askLetter();
    
    }

hangman();
console.log('------------------------------------')
