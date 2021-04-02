/* specific

userInputToCheckForDuplicates - variable that will store user input that will be checked for duplicates.

resultOfDuplicateCheckUp - variable that will assign and store all the characters
out of user input that were collected before the program came across the duplicate.
it's lenghth will be compared to lenght of original input.

characterToCheck - variable that determines that every character of user 
input will be checked one by one until there is a duplicate.

charIsDuplicated - flag variable that returns false until program will not come across duplicated caracter.
When it returns true, the program breaks the checking process.

*/

let userInputToCheckForDuplicates = null;
while (userInputToCheckForDuplicates === null) {
  userInputToCheckForDuplicates = prompt(
    "enter something with no duplicate characters"
  );
}

let resultOfDuplicateCheckUp = "";
for (let characterToCheck of userInputToCheckForDuplicates) {
  let charIsDuplicated = resultOfDuplicateCheckUp.includes(characterToCheck);
  if (charIsDuplicated) {
    break;
  }
  resultOfDuplicateCheckUp = resultOfDuplicateCheckUp + characterToCheck;
}

if (resultOfDuplicateCheckUp.length === userInputToCheckForDuplicates.length) {
  alert("well done!");
} else {
  alert("too bad, try again");
}
