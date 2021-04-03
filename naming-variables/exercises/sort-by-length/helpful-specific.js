/* specific
shortString, mediumString, longString - variables that will return "short",
"medium" or "long" depending on the lenght of the user's input'.

userIsNotDoneYet - flag variable that is true by default.
While it is true, user gets prompts and can enter strings.
It returns false if user pressed cancel.

userInputToCheckLenght - variable keeps user input to check it's lenght.


*/

alert(
  "enter many strings, they will be sorted by length.\n\n" +
    'when you are done entering strings you can "cancel" or "escape"'
);

let shortString = "short:";
let mediumString = "medium:";
let longString = "long:";

let userIsNotDoneYet = true;
while (userIsNotDoneYet) {
  let userInputToCheckLenght = prompt("enter something");

  if (userInputToCheckLenght === null) {
    userIsNotDoneYet = false;
  } else if (userInputToCheckLenght.length < 5) {
    shortString = shortString + '\n- "' + userInputToCheckLenght + '"';
    alert("short");
  } else if (userInputToCheckLenght.length < 10) {
    mediumString = mediumString + '\n- "' + userInputToCheckLenght + '"';
    alert("medium");
  } else {
    longString = longString + '\n- "' + userInputToCheckLenght + '"';
    alert("long");
  }
}

alert(shortString + "\n\n" + mediumString + "\n\n" + longString);
