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


    if(hand2 == 'rock' && hand1 == 'scissors' || 
        hand2 == 'scissors' && hand1 == 'paper' || 
        hand2 == 'paper' && hand1 == 'rock'){

        result = hand1+' vs '+hand2+' => '+hand2+' wins!';

    } else if (hand2 == hand1){

        result = hand1+' vs '+hand2+' => tie!';

    } else {
        result = hand1+' vs '+hand2+' => '+hand1+' wins!';
    }


    return result;
};