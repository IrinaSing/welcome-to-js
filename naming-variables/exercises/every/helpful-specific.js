/* specific

userText - used to keep user input, so that the program could use it in control flow. Returns strings.

vowels - variable that holds assigned vowels of English alphabet to use them in control
flow for comparison with user text.

vowel - flag variable that determines if characters of user text included
in vowels (assigned in variable "vowels").

character - variable that takes every character from user input.
It is done to lower case and compared with the vowels to determine if this character is vowel or not.

outputResult - flag variable, shown in the final alert as true or false.
True - if the user text only contains vowels. False - if user text contains not only vowels.

*/
let userText = null;
while (userText === null || userText === "") {
  userText = prompt(
    "enter some text, the program will check if it is only vowels"
  );
}

let vowels = "aeiou";

let outputResult = true;
for (let character of userText) {
  let vowel = vowels.includes(character.toLowerCase());
  if (!vowel) {
    outputResult = false;
    break;
  }
}

alert(outputResult);
