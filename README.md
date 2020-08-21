# Scramble

## Objective

For the midterm project you will be demonstrating your understanding JavaScript by creating a text-based word game called Scramble, where player must guess the word from a scramble of letters.

## Game Play

When the page loads, the player will be presented with a list of instructions in the browser's console. The player can request these instructions again at any time by using the `help()` command. The `help()` function has been provided in the started files.

After the player starts the game, they will be given a scrambled word. The player will be able to guess the correct spelling of the word using the `guess()` command. If correctly guessed the word the player will receive a point. If guessed incorrectly, they player will receive a strike. 

A new word will not be displayed until player guesses correctly or the player passes on the work. If a player guesses correctly or passes on a word that word **should not** appear again during the game. 

The player can skip a word by using the `pass()` command. Passing on a word will remove the word from the list, but the player will not receive a point. The player can only pass a limited number of times.

The game ends when all words in the list have been guessed or after the player has received the maximum number of strikes.

After the games ends, the player will be present with a total number points earned for that game.

## Requirements

The following requirement must be met in order to complete the assignment successfully:

1. Clone this repository from GitHub and use the provided files to complete the assignment. The files contain `index.html`, `style.css`, and `scramble.js`. **All changes for this assignment will be made to the `scramble.js` file.**
2. Create a words array to hold the words that will be used in the game. To keep things simple do NOT include words with spaces or special characters. The array should include at least 10 words. 
3. Create a game object. The game object will hold the current game's status including but not limited to:
    1. The game active status
    2. The random list of words
    3. The current word
    4. The current scrambled word
    5. The number of strikes
    6. The number of points
    7. The maximum number of allowed strikes
    8. The number of passes used
    9. The maximum number of passes
4. Create a `start()` function, which is used to start a new game, will do the following:
    1. Reset all the game status properties
    2. Make a copy of the words array and store it in the game object
    3. Shuffle the words array copy. A shuffle function was provided in the starter files.
    4. Select a word from the shuffled array save to the game object.
    5. Display a scrambled version of the word to the player.
5. If a game currently active than a new game CANNOT be started.
6. Create a `guess()` function that will be used by the player to guess the word and will do the following:
    1. Check to see if the guessed word matches the current word unscrambled. **Case should NOT matter.** 
    2. If the words do match the player will receive a point. The word should be removed from the game list (the same word should not appear twice) and the next word should be displayed.
    3. If the words do NOT match the player will receive a strike and the current word will be displayed again.
7. The player should NOT be able to make guesses if there is no active game.
8. Create a `pass()` function that will be used by the player to skip a word and will do the following:
    1. Check if player has any passes left
    2. Remove the from the game list (the same word should not appear twice) and the next word should be displayed.
    3. The player should **NOT** receive a point for passing.
9. The player should NOT be able to pass if there is no active game.
10. The game will end if there are no more words in the list OR the player has received the maximum number of strikes
11. When the game ends the player total points should be displayed. 
12. After the game ends the player should be able to start a new game using the `start()` function.

## Shuffle Function
The following screencast shows how to use the provided `shuffle()` function.

[A Custom Shuffle Function](https://scrimba.com/c/cR3EJaTk)

## Hints
Below are a few suggestions, recommendations, and answers to common questions on how to complete this project. This list will be updated as questions arise.

1. You may need more functions than just the ones used for the actions. For example, you may want a function that will get and scramble the next word.
2. You may want to work with all capital letters. It will simplify things when checking if a letter is in a puzzle. You can use string method `toUpperCase()` to convert a string to all capital letter.
3. The string method `split()` will convert a string to array.
4. The array method `join()` will convert an array to a string.
5. The array method `slice()` can be used to make a copy of an array. 
6. The array methods `pop()`, `shift()`, and `splice()` will return the item that was removed from an array.

## Example
The following video is an example of how a finished version of the assignment could look like.

[Scramble](https://youtu.be/tl6FeUNb06A)

## Submission
When the project is completed, follow the steps below to submit for grading:

1. Create a commit with the message "Completes the Scramble assignment"
2. Push all commits to GitHub.
3. Submit the URL to your GitHub repository to the **Scramble** assignment on BrightSpace. 


