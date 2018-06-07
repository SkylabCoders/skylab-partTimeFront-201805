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