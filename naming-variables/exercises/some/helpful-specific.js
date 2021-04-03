/* specific
userInputToCheckForVowels - variable that stores user input for further check up for vowels.

vowels - variable with fixed value that stores list of vowels for further comparison to user input.

vowelsFound - flag variable that has value false if there is no vowels in the input.
True - if there are vowels in the input. When the first vowel found, it will cause the program break.
This log of this variabe will be displayed in the final alert representing the results of check up.

char - variable that means checking every character of user input (until it will come across the vowel)

charToLowerCase - variable that takes content of variable char and transforms it to lower case.
*/

let userInputToCheckForVowels = null;
while (userInputToCheckForVowels === null) {
  userInputToCheckForVowels = prompt(
    "enter some text, the program will check if it contains any vowels"
  );
}

let vowels = "aeiou";

let vowelsFound = false;
for (let char of userInputToCheckForVowels) {
  let charToLowerCase = char.toLowerCase();
  if (vowels.includes(charToLowerCase)) {
    vowelsFound = true;
    break;
  }
}

alert(vowelsFound);
