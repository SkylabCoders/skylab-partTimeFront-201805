
// HANGMAN

// Definir un array con 20 palabras aleatorias (pueden estar relacionadas con una categoría como por ejemplo "Verduras", "Equipos de fútbol)
// Seleccionar una palabra y definir el número de vidas del usuario
// Utilizando el window.prompt debéis ir preguntando letras al usuario
// Si la letra es correcta, debéis informarlo e irla escribiendo
// Si la letras no es correcta debéis informarlo y descontar el número de vidas del usuario
// Si se agotan las vidas del usuario, mostrar un mensaje "GAME OVER"
// Si se adivina la palabra, mostrar un mensaje "YOU WIN"


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




// var greekGods = ['Achelous','Aeolus','Aether','Alastor','APOLLO','ARES','Aristaeus','Asclepius','ATLAS','Attis','Boreas','Caerus','Castor','Cerus','CHAOS','Charon','Cronos','Crios','CRONUS','Dinlas','DIONYSUS'];

// var lifes = 8;
// var wordToGuess = "";
// var userProgress = [];

// //function chose a word 
// function chooseWord(arr){
//     randomPos = Math.floor(Math.random() * arr.length);
//     wordToGuess = greekGods[randomPos].split('');
    
//     return wordToGuess;
// }

// function encriptWord(arr) {
//     var wordEncripted = []; 
    
//     for(i=0;i<arr.length;i++){
//         wordEncripted.push(' _ ');
//     }
//     return wordEncripted; 
// }

// function playLetter(wordToGuess, wordEncripted){
//     var letter = "";

//     var letter = window.prompt('¿Qué letra quieres jugar?'); // [3] ask for letter
        
//     //comprobacion de letra dentro de array
//     for(var i = 0; i < word.length; i++) {
//         if(letter === wordToGuess[i]){
//             wordEncripted[i] = wordToGuess[i];
//         }
//     }
//     return wordEncripted;

//     console.log(wordEncripted.join(''));
// }


// function hangman(arr){
    
//     chooseWord(arr); // [1] choose a word 

//     encriptWord(wordToGuess); // [2] encript that word
    
//     if(wordEncripted !== wordToGuess) {
//         playLetter(wordToGuess, wordEncripted); // [3] ask for letter
//     } else {
//         console.log('Congratulations!')
//     }
// }

// hangman(greekGods);
