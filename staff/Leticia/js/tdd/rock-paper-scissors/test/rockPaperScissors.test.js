describe('player 1 vs computer', function(){
    it('test tie', function(){
        var computerHand = getComputerHand();
        var hand1 = computerHand;

        expect(rockPaperScissors(hand1,computerHand))
            .toBe(hand1 + ' vs '+computerHand+' => tie!');
    });
})

describe('player 1 vs player 2', function(){
    it('player 1 wins', function(){
        expect(rockPaperScissors('scissors','paper'))
            .toBe('scissors vs paper => scissors wins!');
        
        expect(rockPaperScissors('paper','rock'))
            .toBe('paper vs rock => paper wins!');

        expect(rockPaperScissors('rock','scissors'))
            .toBe('rock vs scissors => rock wins!');
    });
})

describe('player 1 vs player 2', function(){
    it('player 2 wins', function(){
        expect(rockPaperScissors('paper','scissors'))
            .toBe('paper vs scissors => scissors wins!');
        
        expect(rockPaperScissors('rock','paper'))
            .toBe('rock vs paper => paper wins!');

        expect(rockPaperScissors('scissors','rock'))
            .toBe('scissors vs rock => rock wins!');
    });
})