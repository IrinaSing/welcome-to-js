/* generic
input - text, typed by user that will be
transformed by program.

character - variable that takes each character of user input to compare
with determined set of acceptable characters.

input - variable for text in output in final alert. 
the user input transformed by the program will be displayed.
*/

let input = null;
while (input === null) {
  input = prompt("enter some text, can you guess what the program does?");
}

let output = "";
for (let character of input) {
  if ("aeiou".includes(character)) {
    output = output + character.toUpperCase();
  } else if ("AEIOU".includes(character)) {
    output = output + character.toLowerCase();
  } else {
    output = output + character;
  }
}

alert(output);
