# THIS IS THE *HANGMAN* GAME

####STRUCTURE

The program is developed inside a function called hangMAn.
There is a list of 20 fruits inside it and when the program starts the following steps are taken:
 1. A fruit is picked randomly from the list.
 2. The number of letters are counted.
 3. The player will have fruit letters * 1.5.
 4. The name of the player is requested.
 5. A chart with the information about the amount of letter and player's lifes is displayed.

 Once everything is set up, *the game* starts as follows:

 1. An alert requests the player to input a letter
 2. The program evaluates:
    - if the letter has already been input before.
        - if YES: it request a new inpu. No life is deduct.
    - if the letter appears in the fruit name
        - if YES: it shows its position(s) in the word. No life is deducted.
        - if NO: it shows a message saying the letter is not in the word and it deducts 1 life.
    - if the unknown word was completed
        - if YES: a congratulations message is displayed.
        - if NO: it keeps playing.
    - if the player still has lifes
        - if YES: keeps playing
        - if NO
    

##COMMENTS:
The core of the programm is a *while loop* (while lives>0). 
I compare the guessed letter with each letter of the word using a *for loop*. To do so I convert the words of the list from strings to array.
All *thinking* is done with *control flows*.




