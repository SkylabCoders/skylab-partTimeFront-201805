function RockPaperScissors(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  var alternatives = ['paper', 'rock', 'scissors'];

  
  if( typeof this.player1 == 'undefined'){
      return 'Player 1 must be defined'
  };

  
  hand1 = prompt(this.player1 + ' input your hand');

  

    if(typeof player2 == 'undefined'){
        this.player2 == 'Computer';
    } //else {
        //hand2 = prompt(this.player2 + ' input your hand');

        //if(alternatives.indexOf(hand2.toLowerCase()) <0 ){
          //  hand2 = prompt(hand2 + ' you must choose between "Paper", "Rock", "Scissors"');
        //};

    

   
   
    this.play = function (hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
        this.handwinner
    
       // if(alternatives.indexOf(hand1.toLowerCase()) < 0 ){
       // hand1 = prompt(hand1 + ' you must choose between "Paper", "Rock", "Scissors"');   // --> evaluate spell h1
       // };

       // if(typeof hand2 == 'undefined'){
         //   hand2 = getHand2(alternatives);
       // } else {
            //hand2 = prompt(this.player2 + ' input your hand');
    
            // if(alternatives.indexOf(hand2.toLowerCase()) <0 ){
               // hand2 = prompt(hand2 + ' you must choose between "Paper", "Rock", "Scissors"');
            // };
       // };


        if(this.hand2 == 'rock' && this.hand1 == 'scissors' ||            // A: Situaciones en que ganaría h2
        this.hand2 == 'scissors' && this.hand1 == 'paper' || 
        this.hand2 == 'paper' && this.hand1 == 'rock'){
    
        handwinner = this.hand2;
        result = this.hand1 + ' vs ' + this.hand2 + ' => '+ handwinner + ' wins!';
    
    
        return result
    
        } else if (this.hand2 == this.hand1){                         // B: Situación de empate
    
            handwinner = "It\'s a tie!";
            result = this.hand1 + ' vs ' + this.hand2 +' => '+ handwinner ;
            
            return result
    
        } else {                                            // si no A y no B => gana h1 
    
            handwinner = this.hand1;
            result = this.hand1 + ' vs ' + this.hand2+ ' => '+ handwinner + ' wins!';
        }
        
        return result


    };

  
  // return 'Player 1 is: ' + this.player1 +', and player2 is ' + this.player2 + '.'
 
};

game = new RockPaperScissors('John', 'Marie');



function getHand2(x){
    y = x[Math.floor(Math.random()*3)];
    return y
};
