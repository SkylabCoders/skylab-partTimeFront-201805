function RockPaperScissors(player1, player2) {
    // Parametros
  this.player1 = player1;
  this.player2 = player2;

    // Variables locales
  this.handwinner = ''
  this.score1 = 0;
  this.score2 = 0;
  this.hand1 = '';
  this.hand2 = '';
  this.result = '';
  this.alternatives = ['paper', 'rock', 'scissors', 'end', 'winner'];

    //funciones locales
  this.play = function(){

        if(this.hand1.toLowerCase() == 'winner'){
            this.win();
        };

        if(this.hand1.toLowerCase() == 'end'){
            return 
        };


        if(typeof this.hand2 == 'undefined'){
            hand2 = getHand2();
        };

        if(this.hand2 == 'rock' && this.hand1 == 'scissors' || 
        this.hand2 == 'scissors' && this.hand1 == 'paper' || 
        this.hand2 == 'paper' && this.hand1 == 'rock'){

        this.result = this.hand1 + ' vs ' +this.hand2+ ' => '+ this.hand2 + ' wins!';
        this.handwinner = this.hand2;

        return this.result, this.handwinner

        } else if (this.hand2 == this.hand1){
            this.result = this.hand1+' vs '+this.hand2+' => tie!';
            this.handwinner = ''
            return this.result,  this.handwinner

        } else {
            this.result = this.hand1 + ' vs ' +this.hand2+ ' => '+ this.hand1 + ' wins!';
            this.handwinner = this.hand1;
            return this.result, this.handwinner
        }

    };
  this.getHand2 = function(){
        x = this.alternatives[Math.floor(Math.random()*3)];
        return x
    };

  this.win = function (score1, score2){
        if(score1 > score2){
            return 'The winner is ' + player1
        } else if (score1< score2){
            return 'The winner is ' + player2
        } else {
            return 'its a tie !'
        }       
    };

    // SCORES
   if( this.handwinner == this.hand1){
        this.score1 +=1 ;

    } else if (this.handwinner == this.hand2){
        this.score2 += 1;
    };

};







