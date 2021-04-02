/* generic
_a -> inputName
This variable is used to keep user's input with the name of the object.

_b -> inputDescription
This variable holds user input with commentaries/description/information about the object mentioned before

_c -> descriptionGiven
Flag variable that changes value if the user typed an appropriate description. It does not change if there is no input of if the input does not include the object name.
??? descriptionNotGiven ????
I don't yet understand how does the while loop with !-condition work
*/
alert(
  "this is a two-player game:\n\n" +
    "- player 1: enters an animal\n" +
    "- player 2: says something cool about it"
);

let inputName = null;
while (inputName === null || inputName === "") {
  inputName = prompt("enter an animal");
}

let inputDescription = "";

let descriptionGiven = false;
while (!descriptionGiven) {
  inputDescription = prompt("tell me something about " + inputName);

  if (inputDescription === "" || inputDescription === null) {
    alert("that is not something");
  } else if (inputDescription.toLowerCase().includes(inputName.toLowerCase())) {
    descriptionGiven = true;
  } else {
    alert("nope, not about " + inputName + ".  try again.");
  }
}

alert(
  "i just learned something cool about " +
    inputName +
    '!\n\n- "' +
    inputDescription +
    '"'
);
