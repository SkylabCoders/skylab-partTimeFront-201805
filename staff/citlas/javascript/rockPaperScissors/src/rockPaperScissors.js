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

function rockPaperScissors(hand1, hand2) {
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

        result = 'Hand 2 gana';

        } else if (hand2 == hand1){

            result = hand1+' vs '+hand2+' => tie!';

        } else {
            result = 'Hand 1 gana'
        }
    }
    


    return result;
};










