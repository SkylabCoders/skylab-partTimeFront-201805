* ## Goals

Develop unit testing of a simple problem following TDD methodology: write test first, then implement the solution.

Create a "rock, paper, scissors" game in TDD methodology.

## Requirements

The "rock, paper, scissors" game accepts two scenarios:

- player 1 vs player 2
- player 1 vs computer

The game is implemented in one function that receives the players hands and returns the result.

```js
function rockPaperScissors(hand1, hand2) {
    ...
    return result;
}
```

The function accepts two parameters: one for each player hand.

The possible values for a hand are: "rock", "paper" or "scissors".

The second hand is optional. If only the first hand is informed, then the second hand is initialized randomly (this is the scenario of player 1 vs computer).

The function returns a string with the players hands that are playing, and the result, in the following form:

- if one hand is superior to the other: ```"<hand1> vs <hand2> => <hand-that-is-superior> wins!"```
- if both hands are the same: ```"<hand1> vs <hand2> => tie!"```

Examples:

```js
> rockPaperScissors("paper","scissors")
"paper vs scissors => scissors wins!"

> rockPaperScissors("rock","rock")
"rock vs rock => tie!"

> rockPaperScissors("paper")
"paper vs rock => paper wins!"

> rockPaperScissors("paper")
"paper vs paper => tie!"
```

## Tasks

- Mount the solution in the following structure:

```
rock-paper-scissors
            ├── src
            │   └── rockPaperScissors.js
            └── test
                ├── SpecRunner.html
                ├── lib
                │   └── jasmine-x.y.z
                │       └── ...
                └── rockPaperScissors.test.js
```
      
- Write the test first. It should cover all possible cases.

- Implement the function after writing the test cases.
