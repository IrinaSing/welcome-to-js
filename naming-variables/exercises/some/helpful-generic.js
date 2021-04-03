/* sgeneric
input - variable that stores user input for further check up according to symbolsToFindInTheInput.

symbolsToFindInTheInput - variable with fixed value that stores list of symbols for further comparison with user input.

output - flag variable that has value false if there is no symbolsToFindInTheInput in the input.
True - if there is at least one of symbolsToFindInTheInput in the input. When the first symbol found, it will cause the program break.
The log of this variabe will be displayed in the final alert representing the results of check up.

char - variable that means checking every character of user input (until it will come across the symbol to find)

charToLowerCase - variable that takes content of variable char and transforms it to lower case.
*/

let input = null;
while (input === null) {
  input = prompt(
    "enter some text, the program will check if it contains any symbolsToFindInTheInput"
  );
}

let symbolsToFindInTheInput = "aeiou";

let output = false;
for (let char of input) {
  let charToLowerCase = char.toLowerCase();
  if (symbolsToFindInTheInput.includes(charToLowerCase)) {
    output = true;
    break;
  }
}

alert(output);
