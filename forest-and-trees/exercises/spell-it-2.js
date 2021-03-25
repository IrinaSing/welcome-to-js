let userInput = "";

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt("enter a word to spell:");

  //there is a difference from spell-it-2
  //When "if" conditions does not return "true", the program goes further to "else" conditions
  //instead of skipping the rest of the loop body and going back to check the condition
  if (userInput === "" || userInput === null) {
    alert("nope, enter something");
  } else {
    userConfirmed = confirm(
      "do you want to spell this word?\n\n" + '- "' + userInput + '"'
    );
  }
}

let spelledOut = "all spelled out:\n";
for (let nextLetter of userInput) {
  spelledOut = spelledOut + "\n- " + nextLetter;
}

alert(spelledOut);
