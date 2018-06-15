function RockPaperScissors(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  var hand1 = '';
  var hand2 = '';
  var handwinner = '';
  var score1 = 0;
  var score2 = 0;


  var alternatives = ['paper', 'rock', 'scissors', 'end', 'winner'];

  hand1 = window.prompt(player1 + ' ingresa tu mano');

  while (hand1.toLowerCase() != 'end'){

    while (alternatives.indexOf(hand1.toLowerCase()) < 0 ){    // evaluate correct spelling hand1

      hand1 = window.prompt('Choose between Rock, Paper or Scissors', 'input hand1 here');

    };
    
    if (typeof player2 == 'undefined'){
      hand2 = alternatives[Math.floor(Math.random()*3)];
    
    } else {
      hand2 = window.prompt(player2 + ' ingresa tu mano');

      while (alternatives.indexOf(hand2.toLowerCase()) < 0 ){     // evaluate correct spelling hand2
      
        hand2 = window.prompt('Choose between Rock, Paper or Scissors', 'input hand2');

      };
    };

    play(hand1, hand2);
  }



  return 'The game has ended, the winner is ' + winner(score1, score2);

};

RockPaperScissors.prototype.play = function (hand1, hand2){
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
};

RockPaperScissors.prototype.winner = function() {
  //...
 // return  // the winner name or 'No winner, tie!'
};


/*
function definePlayers(){

  player1 = window.prompt('Input Player 1 name');

  if (typeof player1 === null){
    alert('Player 1 must be defined');
    dfinePlayers();
  };

  if (player1.toLowerCase() == 'end' || player1.toLowerCase() == 'winner'){
    return player1;
  }

  player2 = window.prompt('Input Player 2 name',);

  if (typeof player2 === null){
    player2 = 'computer';
  }; 

  return 'El jugador 1 es ' + player1 + ' y el jugador 2 es '+  player2;
};

definePlayers();



function play (player1, player2){
  
  var alternatives = ['paper', 'rock', 'scissors', 'end', 'winner'];

  hand1 = window.prompt(player1 + ' ingrese la mano');

  while (alternatives.indexOf(hand1.toLowerCase()) < 0 ){    // evaluate correct spelling hand1

    hand1 = window.prompt('Choose between Rock, Paper or Scissors', 'input hand1 here');

  };
  
  while (hand1.toLowerCase() != "end"){

    while (hand1.toLowerCase() !='winner'){

      if (player2 == 'computer') {

        var hand2 = getComputerhand();
    
        return hand1, hand2
    
      } else {
       
        hand2 = window.prompt(player2 + ' ingrese la mano', 'mano2');
    
        
        while (alternatives.indexOf(hand2.toLowerCase()) < 0 ){     // evaluate correct spelling hand2
    
          hand2 = window.prompt('Choose between Rock, Paper or Scissors', 'input hand2');
    
        };
      }
    }
  }

    handResult(hand1, hand2)
  };

};

*/

function handResult(hand1, hand2){

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


function getComputerHand(alternatives){

  var x = alternatives[Math.floor(Math.random()*3)];

  return x
};

function winner(score1, score2){

  if(score1 > score2){
    return hand1 + ' is the winner'
  } else if (score1< score2){
    return hand2 + 'is the winner'
  } else {
    return 'its a tie !'
  }

};




var game = new RockPaperScissors();


