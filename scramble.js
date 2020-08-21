/**********************************************
 * STARTER CODE
 **********************************************/
/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]
  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }
  if (typeof src === 'string') {
    return copy.join('')
  }
  return copy
}
/**
 * help()
 * Displays the game instructions.
 * @Return: String
 */
function help () {
  return `Welcome to Scramble. 
The game where you unscramble letters to make words.
Once you start the game, you will be given a scrambled word.
If you correctly guess the word, you will receive a point.
If you guess incorrectly you will receive a strike.
You can also pass on a word. 
To start a new game use start().
To make guess use guess('word').
To skip a word use pass().
To show these instructions again use help().`
}
// Displays the instructions when the page loads.
console.log(help())
/**********************************************
 * YOUR CODE BELOW
 **********************************************/
/*
- array of words
- minimum 10 words
*/
//array
let words = ['college', 'beg', 'fridge', 'chair', 'pen', 'locker', 'phone', 'computer', 'school', 'sofa', 'mobile', 'mug', 'door', 'snow', 'white']
//object
/*
- game of object (Holds state of the game)
  1. status
  2. random list of words (shuffle)
  3. current word
  4. current scramble word (shuffle)
  5. number of strikes (0)
  6. number of points
  7. maximum number of strikes (3)
  8. number of passes used (0)
  9. maximum number of passes (3)
  */
let game = {
  status: false,
  wordList: [],
  strikes: 0,
  points: 0,
  maxStrikes: 3,
  passes: 0,
  maxPasses: 3,
  currentWord: undefined,
  currentScrambledWord: undefined
}
/*
-start()
1. Reset all the game properties
   (game.properties reset)
2. scramble array of words
3. new current word
4. scramble new current word shuffle
5. display word to player
*/
function start () {
  game.passes = 0
  game.points = 0
  game.strikes = 0
  game.maxStrikes = 3
  game.maxPasses = 3
  game.status = true
  game.wordList = shuffle(words)
  game.currentWord = game.wordList[0]
  game.currentScrambledWord = shuffle(game.currentWord)
  return `Guess Word: ${game.currentScrambledWord}`
}
/*
-guess()
--  check game is active
==* (guess correct)
  --- (=== to strict compare)  (input.toLowerCase())
      case should not matter (eg. . ."dog","DOG")
  --- ads point
  --- remove guessed word from game
==* (guess incorrect)
  --- adds strick
  ---display same word again
*/
function guess (word) {
  if (game.status) {
    if (word.toUpperCase() === game.currentWord.toUpperCase()) {
      game.points--
      game.wordList.shift()//(make an condition for scramble word)
      if (game.wordList.length >= 1) {
        game.currentWord = game.wordList[0]
        game.currentScrambledWord = shuffle(game.currentWord)
        return `Yeah! Your guess was correct.
        Guess Word: ${game.currentScrambledWord}`
      } else {  //(else condition for start a new game )
        game.status = false
        return `Yeah! You finished the game. Your score is ${game.points}. You used ${game.passes} passes. You can start a new game with start().`
      }
    } else {
      game.strikes++//(out of strikes condition)
      if (game.strikes > game.maxStrikes) {
        game.status = false
        return `You just used your last chance. Now game is over. Your score is ${game.points}.You used ${game.passes} passes. You can start a new game with start().`
      }
      return `Hmm! That was a wrong one.
        Guess Word: ${game.currentScrambledWord}`
    }
  } else {
    return `You have to start the game.`
  }
}
// -pass()
//     ---check if game is active
//     ---(check player has passes)
//     ---(i have passes)vary
//       == passes +++/--- (change number of passes
//       accordingly)
//       == remove word from game (object) array of words
//       == new word
//       == no points for passes

//       ---(i do not have passes)
//      --Display massage to user
// */
function pass () {
  if (game.status) {//(an condition for passes only for 3 times)
    if (game.passes < game.maxPasses) {
      game.passes++
      game.wordList.shift()
      game.currentWord = game.wordList[0]
      game.currentScrambledWord = shuffle(game.currentWord)
      return `You skipped previous word.
        Guess Word: ${game.currentScrambledWord}`
    } else {
      return `You do not have enough passes.`
    }
  } else {
    return `You have to  start the game.`
  }
}
/*
 ---- when does game end
   -- strikes == 3(out of strikes)
   --guessed all words
   -- you won. . ./
   --and score

   you can start game again using start()
*/