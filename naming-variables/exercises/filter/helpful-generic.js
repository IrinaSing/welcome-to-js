/* generic
input - stores user input for it's futher comparison and transformation.

output - this variable will appear in the final output
as a transformed user input.

character - variable for each character of the user's text,
so that all of them could be compared to acceptableChar one by one.

acceptableChar - fixed variable that stores set of symbols that will be compared to user input via includes.
*/
let input = null;
while (input === null) {
  input = prompt("enter some text, the program will remove all vowels");
}

let output = "";
for (let character of input) {
  let acceptableChar = "aeiou".includes(character.toLowerCase());
  if (!acceptableChar) {
    output = output + character;
  }
}

alert(output);
