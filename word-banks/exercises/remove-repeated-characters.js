/*
  unused:
  used:
    character
    phrase    
    replace
    includes

*/

let phrase = "";
while (phrase === "" || phrase === null) {
  phrase = prompt("enter some text");
}

let repeated = "";
let notRepeated = "";

for (let character of phrase) {
  if (repeated.includes(character)) {
    continue;
  }
  if (notRepeated.includes(character)) {
    notRepeated = notRepeated.replace(character, "");
    repeated = repeated + character;
  } else {
    notRepeated = notRepeated + character;
  }
}

alert(
  '"' + phrase + '"\nrepeated: ' + repeated + "\nnot repeated: " + notRepeated
);

/* -- errors --

*/
