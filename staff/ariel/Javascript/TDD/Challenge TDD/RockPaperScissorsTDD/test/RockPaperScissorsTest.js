

describe('players input', function(){

  it("input of player1", function() {
    
    expect(RockPaperScissors('Paul', 'Marie')).toBe('El jugador 1 es Paul y el jugador 2 es Marie');
    expect(RockPaperScissors('Paul')).toBe('El jugador 1 es Paul y el jugador 2 es computer');


  });

  it("ningún input", function() {
    expect(RockPaperScissors()).toBe('El jugador 1 debe definirse');
  });

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

describe('A spy', function(){
  
)}


describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };


    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });
¶
The toHaveBeenCalled matcher will pass if the spy was called.

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });