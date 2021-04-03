/* generic
shortString, mediumString, longString - variables that will return "short",
"medium" or "long" depending on the lenght of the input.

userDidNotCancel - flag variable that is true by default.
While it is true, user gets prompts and can enter strings.
It returns false if user pressed cancel.

input - variable keeps user input to check it's lenght.


*/

alert(
  "enter many strings, they will be sorted by length.\n\n" +
    'when you are done entering strings you can "cancel" or "escape"'
);

let shortString = "short:";
let mediumString = "medium:";
let longString = "long:";

let userDidNotCancel = true;
while (userDidNotCancel) {
  let input = prompt("enter something");

  if (input === null) {
    userDidNotCancel = false;
  } else if (input.length < 5) {
    shortString = shortString + '\n- "' + input + '"';
    alert("short");
  } else if (input.length < 10) {
    mediumString = mediumString + '\n- "' + input + '"';
    alert("medium");
  } else {
    longString = longString + '\n- "' + input + '"';
    alert("long");
  }
}

alert(shortString + "\n\n" + mediumString + "\n\n" + longString);
