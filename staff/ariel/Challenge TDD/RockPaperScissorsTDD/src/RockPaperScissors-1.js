function RockPaperScissors(player1, player2, result, handwinner) {
  this.player1 = player1;
  this.player2 = player2;
  this.handwinner = ''
  this.result = result;
  this.score1 = 0;
  this.score2 = 0;
  
  play(hand1, hand2);

 //SCORES   ----> cómo pasar el return de play() como input de RockPaperScissor???????????????? 
    if(handwinner == hand1){
        this.score1 +=1 ;

    } else if (handwinner == this.hand2){
        score2 += 1;
    };

    win(score1, score2)
 
};



function play (hand1, hand2) {

    var alternatives = ['paper', 'rock', 'scissors', 'end', 'winner'];

    if(typeof hand2 == 'undefined'){
        hand2 = getHand2(alternatives);
    };

    if(hand2 == 'rock' && hand1 == 'scissors' || 
    hand2 == 'scissors' && hand1 == 'paper' || 
    hand2 == 'paper' && hand1 == 'rock'){

    result = hand1 + ' vs ' +hand2+ ' => '+ hand2 + ' wins!';
    handwinner = hand2;

    return result, handwinner

    } else if (hand2 == hand1){
        result = hand1+' vs '+hand2+' => tie!';
        handwinner = ''
        return result,  handwinner

    } else {
        result = hand1 + ' vs ' +hand2+ ' => '+ hand1 + ' wins!';
        handwinner = hand1;
        return result, handwinner
    }
};




function getHand2(){
    x = alternatives[Math.floor(Math.random()*3)];
    return x
};




function win (score1, score2){
    if(score1 > score2){
        return 'The winner is ' + player1
    } else if (score1< score2){
        return 'The winner is ' + player2
    } else {
        return 'its a tie !'
    }
            
}
