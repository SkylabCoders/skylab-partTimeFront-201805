describe('player 1 vs computer', function() {

   it('test tie', function(){     // el "it" describe un escenario
       var computerhand = getComputerHand();  
       var hand1 = computerhand;  // --> defino "result" como variable propia de éste 
       expect(rockPaperScissors(hand1, computerhand)).toBe(hand1 + ' vs ' + computerhand + ' => tie!');  // el "expect" define cuál es el resultado esperado
   })


});

describe('player 1 vs player 2', function(){

    it('player1 wins', function(){ 
        expect(rockPaperScissors('rock', 'scissors')).toBe('rock vs scissors => rock wins!');  
        
        expect(rockPaperScissors('scissors', 'paper')).toBe('scissors vs paper => scissors wins!');

        expect(rockPaperScissors('paper', 'rock')).toBe('paper vs rock => paper wins!');

    })


    it('player2 wins', function(){ 
        expect(rockPaperScissors('rock', 'paper')).toBe('rock vs paper => paper wins!');  
        
        expect(rockPaperScissors('scissors', 'rock')).toBe('scissors vs rock => rock wins!');
    
        expect(rockPaperScissors('paper', 'scissors')).toBe('paper vs scissors => scissors wins!');
    
    })


});

describe('undefined', function(){
    it('player1 undefined', function(){
        expect(rockPaperScissors(undefined, 'paper')).toBe('ingresse la mano del jugador 1');
    )}
});