describe('player 1 vs computer', function(){
    it('test tie', function(){
        for(var i=0; i<100;i++){
            var computerHand = getComputerHand();
            var hand1 = computerHand;
            expect(rockPaperScissors(hand1,computerHand))
                .toBe(hand1 + " vs " + computerHand+" => tie!");
        } 
    })
})

describe('player 1 vs player 2', function(){
    it('player 1 wins', function(){
            expect(rockPaperScissors("rock","scissors"))
                .toBe('Hand 1 gana');   
            expect(rockPaperScissors("scissors","paper"))
                .toBe('Hand 1 gana'); 
            expect(rockPaperScissors("paper","rock"))
                .toBe('Hand 1 gana');  
    })
    it('player 2 wins', function(){
        expect(rockPaperScissors("scissors","rock"))
            .toBe('Hand 2 gana');   
        expect(rockPaperScissors("paper","scissors"))
            .toBe('Hand 2 gana'); 
        expect(rockPaperScissors("rock","paper"))
            .toBe('Hand 2 gana');  
    })
    it('player 1 is not rock, paper or scissors', function(){
        expect(rockPaperScissors("x","rock"))
            .toBe('Tienes que poner rock, paper or scissors');   
        expect(rockPaperScissors(true,"scissors"))
            .toBe('Tienes que poner rock, paper or scissors'); 
        expect(rockPaperScissors("1","paper"))
            .toBe('Tienes que poner rock, paper or scissors');  
    })
    it('player 2 is not rock, paper or scissors', function(){
        expect(rockPaperScissors("rock","x"))
            .toBe('Tienes que poner rock, paper or scissors');   
        expect(rockPaperScissors("scissors",true))
            .toBe('Tienes que poner rock, paper or scissors'); 
        expect(rockPaperScissors("paper",1))
            .toBe('Tienes que poner rock, paper or scissors');  
    })

})

//hacer test para verificar que el ganador sea el que tiene más ganados
//no hacer sobre esta, hay que duplicar este y hacerlo en otro archivo