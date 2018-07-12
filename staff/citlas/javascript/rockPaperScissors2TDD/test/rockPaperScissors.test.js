describe('player 1 vs computer', function(){
    var game; 
    
    beforeEach(function(){
        game = new RockPaperScissors('John', 'Peter');
    })

    it('test tie', function(){
        for(var i=0; i<100;i++){
            var computerHand = getComputerHand();
            var hand1 = computerHand;
            expect(game.play(hand1,computerHand))
                .toBe(hand1 + " vs " + computerHand+" => tie!");
        } 
    })
})

describe('player 1 vs player 2', function(){
    var game; 

    beforeEach(function(){
        game = new RockPaperScissors('John', 'Peter');
    })
    
    it('player 1 wins', function(){
            //rockPaperScissors.prototype.play = function(hand1, hand2) 
            //game.play("paper","scissors")
            expect(game.play("rock","scissors"))
                .toBe('rock vs scissors => rock wins!');   
            expect(game.play("scissors","paper"))
                .toBe('scissors vs paper => scissors wins!'); 
            expect(game.play("paper","rock"))
                .toBe('paper vs rock => paper wins!');  
    })
    it('player 2 wins', function(){
        expect(game.play("scissors","rock"))
            .toBe('scissors vs rock => rock wins!');   
        expect(game.play("paper","scissors"))
            .toBe('paper vs scissors => scissors wins!'); 
        expect(game.play("rock","paper"))
            .toBe('rock vs paper => paper wins!');  
    })
    it('player 1 is not rock, paper or scissors', function(){
        expect(game.play("x","rock"))
            .toBe('Tienes que poner rock, paper or scissors');   
        expect(game.play(true,"scissors"))
            .toBe('Tienes que poner rock, paper or scissors'); 
        expect(game.play("1","paper"))
            .toBe('Tienes que poner rock, paper or scissors');  
    })
    it('player 2 is not rock, paper or scissors', function(){
        expect(game.play("rock","x"))
            .toBe('Tienes que poner rock, paper or scissors');   
        expect(game.play("scissors",true))
            .toBe('Tienes que poner rock, paper or scissors'); 
        expect(game.play("paper",1))
            .toBe('Tienes que poner rock, paper or scissors');  
    })

    //hacer test para verificar que el ganador sea el que tiene más ganados

    it('return player 1 as winner', function(){
        var game = new RockPaperScissors('John', 'Peter');
        game.play("paper", "scissors")
        game.play("rock", "rock")
        game.winner()
        game.play("paper", "rock")
        game.winner()
        game.play("rock", "scissors")
        expect(game.winner())
            .toBe('John');    
    })

    it('return player 2 as winner', function(){
        var game = new RockPaperScissors('John', 'Peter');
        game.play("scissors", "paper")
        game.play("rock", "rock")
        game.winner()
        game.play("rock", "paper")
        game.winner()
        game.play("scissors", "rock")
        expect(game.winner())
            .toBe('Peter');    
    })

    it('it is a tie!', function(){
        var game = new RockPaperScissors('John', 'Peter');
        game.play("scissors", "paper")
        game.play("rock", "rock")
        game.winner()
        game.play("rock", "paper")
        game.winner()
        game.play("rock", "rock")
        expect(game.winner())
            .toBe('No winner, tie!');    
    })

})


