/* generic

input - variable that will store user input for further operations.

resultOfCheckUp - variable that will assign and store all the characters
out of user input that were collected before the program came across a character with undesirable condition.
it's lenghth will be compared to lenght of the original input.

character - variable that determines that every character of user 
input will be checked one by one until one of them matches undesirable condition.

charIsNotAcceptable - flag variable that returns false until program will not come across duplicated caracter.
When it returns true, the program breaks the checking process.

*/

let input = null;
while (input === null) {
  input = prompt("enter something with no duplicate characters");
}

let resultOfCheckUp = "";
for (let character of input) {
  let charIsDuplicated = resultOfCheckUp.includes(character);
  if (charIsDuplicated) {
    break;
  }
  resultOfCheckUp = resultOfCheckUp + character;
}

if (resultOfCheckUp.length === input.length) {
  alert("well done!");
} else {
  alert("too bad, try again");
}
