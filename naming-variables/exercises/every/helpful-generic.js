/* generic

input - used to keep user input, so that the program could use it in control flow. Returns strings.

acceptableChars - variable that holds assigned acceptableChars of English alphabet to use them in control
flow for comparison with user text.

acceptedChar - flag variable that determines if characters of user text included
in acceptableChars (assigned in variable "acceptableChars").

character - variable that takes every character from user input.
It is done to lower case and compared with the acceptableChars to determine if this character is acceptedChar or not.

outputResult - flag variable, shown in the final alert as true or false.
True - if the user text only contains acceptableChars. False - if user text contains not only acceptableChars.

*/

let input = null;
while (input === null || input === "") {
  input = prompt(
    "enter some text, the program will check if it is only acceptableChars"
  );
}

let acceptableChars = "aeiou";

let outputResult = true;
for (let character of input) {
  let acceptedChar = acceptableChars.includes(character.toLowerCase());
  if (!acceptedChar) {
    outputResult = false;
    break;
  }
}

alert(outputResult);
