/*function rockPaperScissors(hand1,hand2){
    


    if((typeof hand2) == "undefined"){
        var choose = ""
        choose = Math.floor((Math.random() * 3));
        if (choose==0){
            hand2 = "rock";
        } else if (choose==1){
            hand2 = "paper";
        } else if (choose==2){
            hand2 = "scissors";
        }
        //random que escoja rock paper o scissors
        //console.log("no hay hand2")
    }
    
    if(hand1 !="rock" && hand1 !="paper" && hand1 !="scissors" ){
        return "Tienes que escoger rock, paper o scissors"
    } else if (hand2 !="rock" && hand2 !="paper" && hand2 !="scissors" ){
        return "Tienes que escoger rock, paper o scissors"
    }

    if (hand1 == "rock"){
        switch (hand2){
            case "rock":
                return hand1 + " vs " + hand2 + " =>" +" tie";
                break;
            case "paper":
                return hand1 + " vs " + hand2 + " =>" +" paper wins";
                break;
            case "scissors":
                return hand1 + " vs " + hand2 + " =>" +" rock wins";
                break;
        }
    } else if (hand1 == "paper"){
        switch (hand2){
            case "rock":
                return hand1 + " vs " + hand2 + " =>" +" paper wins";
                break;
            case "paper":
                return hand1 + " vs " + hand2 + " =>" +" tie";
                break;
            case "scissors":
                return hand1 + " vs " + hand2 + " =>" +" scissors wins";
                break;
        }
    } else if (hand1 == "scissors"){
        switch (hand2){
            case "rock":
                return hand1 + " vs " + hand2 + " =>" +" rock wins";
                break;
            case "paper":
                return hand1 + " vs " + hand2 + " =>" +" scissors wins";
                break;
            case "scissors":
                return hand1 + " vs " + hand2 + " =>" +" tie";
                break;
        }
    
    }
}

rockPaperScissors("rock","paper")
*/
/* respuesta Ariel


function rockPaperScissors(hand1, hand2) {
    var x = ['rock', 'paper', 'scissors'];
    var hand1 = hand1;
    var hand2 = hand2;
    var result = '';

    if(typeof hand2 == 'undefined') {
        hand2 = x[Math.floor(Math.random()*3)];
    };


    if(hand2 == 'rock' && hand1 == 'scissors' || 
        hand2 == 'scissors' && hand1 == 'paper' || 
        hand2 == 'paper' && hand1 == 'rock'){

        result = 'Hand 2 gana';

    } else if (hand2 == hand1){

        result = 'Empate';

    } else {
        result = 'Hand 1 gana'
    }


    return result;
};

console.log(rockPaperScissors('paper', 'paper'));



*/



function getComputerHand(){
    var x = ['rock', 'paper', 'scissors'];
    return x[Math.floor(Math.random()*3)];
}

function RockPaperScissors(player1, player2) {   
    this.player1 = player1;
    this.player2 = player2;
    if(typeof player2 == 'undefined') {
        this.player2 = 'Computer';
    };
    this.player1Count = 0;
    this.player2Count = 0;

    if(location.hash !== "#no-winner"){
        this.winner = function(){
            
        }
    }

    this.play = function(hand1, hand2) {
        var x = ['rock', 'paper', 'scissors'];
         var hand1 = hand1;
         var hand2 = hand2;
         var result = '';
         
     
         if(typeof hand2 == 'undefined') {
             hand2 = getComputerHand();
         };
     
         if(hand1 !="rock" && hand1 !="paper" && hand1 !="scissors" ){
             return "Tienes que poner rock, paper or scissors"
         } else if (hand2 !="rock" && hand2 !="paper" && hand2 !="scissors" ){
             return "Tienes que poner rock, paper or scissors"
         } else {
             if(hand2 == 'rock' && hand1 == 'scissors' || 
                 hand2 == 'scissors' && hand1 == 'paper' || 
                 hand2 == 'paper' && hand1 == 'rock'){
                 result = hand1 + ' vs ' + hand2 +' => ' + hand2 + ' wins!';
                 this.player2Count = this.player2Count+1;
                 console.log(this.player2Count + "esto es player2count")
             } else if (hand2 == hand1){
                 result = hand1+' vs '+hand2+' => tie!';
             } else {
                 result = hand1 + ' vs ' + hand2 +' => ' + hand1 + ' wins!';
                 this.player1Count = this.player1Count+1;
                 console.log(this.player1Count+ "esto es player1count")
             }
         }
         return result;
     }
};

console.log("HASH",location.hash);
if(location.hash !== "#no-winner"){
    RockPaperScissors.prototype.winner = function() {
        if(this.player1Count>this.player2Count){
            return this.player1
        } else if (this.player1Count<this.player2Count){
            return this.player2
        } else if (this.player1Count==this.player2Count){
            return 'No winner, tie!'
        }
    }
}
var game = new RockPaperScissors('John', 'Peter');
game.newPlay = function(){
    console.log("playyy!");
}

game.newPlay();

game.play("paper","scissors")
//"paper vs scissors => scissors wins!"
game.play("rock","rock")
//"rock vs rock => tie!"
game.winner()
//"Peter"
game.play("paper", "rock")
//"paper vs rock => paper wins!"
game.winner()
//"No winner, tie!"
game.play("rock", "scissors")
//"rock vs scissors => rock wins!"
game.winner()
//"John"








