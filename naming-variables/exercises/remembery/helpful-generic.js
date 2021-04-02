/* generic

I don't see how these variables can be more generic in this program.

firstPhraseInput, secondPhraseInput, thirdPhraseInput - variables-holders
assigned by user with three phrases via prompts.

randomNumberOfThePhraseToRecall - variable that is assigned as a result of operation
with randomizer. User will see prompt to remember and input again 1, 2 or 3 phrase.

correctAnswer - variable with correct answer will be assigned in dependance
of number that was randomly chosen by the program. Strings

guessInput - variable for remembery guess (answer) asigned via prompt by user.
*/

alert(
  "Remembery, the game of remembering.\n\n" +
    "You will be prompted to enter 3 phrases.\n" +
    "next you will be prompted to remember one of them\n\n" +
    "if you enter it exactly, you win!"
);

let firstPhraseInput = prompt("enter your first secret phrase:");
let secondPhraseInput = prompt("enter your second secret phrase:");
let thirdPhraseInput = prompt("enter your third secret phrase:");

alert("all saved! get ready to remember");

let randomNumberOfThePhraseToRecall = Math.round(Math.random() * 2) + 1;

let correctAnswer = "";
if (randomNumberOfThePhraseToRecall === 1) {
  correctAnswer = firstPhraseInput;
} else if (randomNumberOfThePhraseToRecall === 2) {
  correctAnswer = secondPhraseInput;
} else if (randomNumberOfThePhraseToRecall === 3) {
  correctAnswer = thirdPhraseInput;
}

let guessInput = prompt(
  "enter phrase number " + randomNumberOfThePhraseToRecall
);

if (guessInput === correctAnswer) {
  alert(
    "correct! phrase " +
      randomNumberOfThePhraseToRecall +
      ' was "' +
      correctAnswer +
      '"'
  );
} else {
  alert("nope :(");
}
