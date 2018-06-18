describe('player 1 vs player 2', function(){


  it('player1 wins', function(){ 
    expect(game.play('rock', 'scissors')).toBe('rock vs scissors => rock wins!');  
    expect(game.play('scissors', 'paper')).toBe('scissors vs paper => scissors wins!');
    expect(game.play('paper', 'rock')).toBe('paper vs rock => paper wins!');
  })


  it('player2 wins', function(){ 
    expect(game.play('rock', 'paper')).toBe('rock vs paper => paper wins!');  
    expect(game.play('scissors', 'rock')).toBe('scissors vs rock => rock wins!');
    expect(game.play('paper', 'scissors')).toBe('paper vs scissors => scissors wins!');
  })
})



describe('Tie', function(){
  
  it('tie', function(){ 
    expect(game.play('rock', 'rock')).toBe("rock vs rock => It's a tie!" );  
    expect(game.play('scissors', 'scissors')).toBe("scissors vs scissors => It's a tie!");
    expect(game.play('paper', 'paper')).toBe("paper vs paper => It's a tie!");
  })

})

/* describe('players input', function(){
  var game;

  it("input of player1 and player 2", function() {
    game = new RockPaperScissors('John', 'Marie');
    expect(game('John', 'Marie')).toBe('Player 1 is: Paul, and player2 is Marie');
  });


  it("input of player1", function() {
    game = new RockPaperScissors('John');
    expect(game('John')).toBe('Player 1 is: Paul, and player2 is Computer');
  });

  it("no player1 input", function() {
    game = new RockPaperScissors();
    expect(game(undefined)).toBe('Player 1 must be defined');
  });

});

*/

