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

        result = hand1 + ' vs ' +hand2+ ' => '+ hand2 + ' wins!';

    } else if (hand2 == hand1){

        result = hand1+' vs '+hand2+' => tie!';

    } else {
        result = hand1 + ' vs ' +hand2+ ' => '+ hand1 + ' wins!';
    }


    return result;
};

rockPaperScissors(paper,);


// VERSION ORIGINAL

/*


function rockPaperScissors(hand1, hand2) {
    this.x = ['rock', 'paper', 'scissors'];
    this.hand1 = hand1;
    this.hand2 = hand2;
    var result = '';

    if(typeof this.hand2 == 'undefined') {
        this.hand2 = this.x[Math.floor(Math.random()*3)];
    };


    if( this.hand2 == 'rock' && this.hand1 == 'scissors' || this.hand2 == 'scissors' && this.hand1 == 'paper' || this.hand2 == 'paper' && this.hand1 == 'rock'){

        result = 'Hand 2 gana';

    } else if (this.hand2 == this.hand1){

        result = 'Empate';

    } else {
        result = 'Hand 1 gana'
    }


    return result;
};

rockPaperScissors('rock', 'scissors');


function evaluate (){

    if( this.hand2 == 'rock' && this.hand1 == 'scissors' || this.hand2 == 'scissors' && this.hand1 == 'paper' || this.hand2 == 'paper' && this.hand1 == 'rock'){

        result = 'Hand 2 gana';

    } else if (this.hand2 == this.hand1){

        result = 'Empate';

    } else {
        result = 'Hand 1 gana'
    }

    return result;
}

*/
