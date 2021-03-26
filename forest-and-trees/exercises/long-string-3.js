/* --- What does program do ---*/

//The program asks a user to input something longer than 5 characters.
// If user cancels, the program sends alert, that it is not possible and then sends a prompt with input request again.
// If input is 0-5, the program sends notification, that it is too short input.
// Once input is longer than 5 characters, the program sends notification with the input and amount of characters.

/* --- Declare the variables to store user data ---*/

//declare, init
//This variable will store user input and it will be used in equality operations within the control flow.
let anything = "";

/* --- Gathering user input ---*/

// Beginning of the while-loop.
//test: if isValid truthy
// read isValid: the value is inversed to true to be used within a loop. To run a while loop the condition must be truthy.
// when the condition (!isValid) true, the loop exits
// test:
while (true) {
  //var anything assigned with user's input
  // prompt: user sees a message requires input longer than 5 char
  anything = prompt("enter anything longer than 5 characters");
  // read to be compared with null.
  // test: if the user did not input anything, but cancelled instead.
  // operation: the strict equality between input and null. It is true if the user cancelled.

  /* --- Did the user cancel? ---*/

  if (anything === null) {
    //alert: if the user cancelled, he or she gets the alert that there is no escape
    alert("there is no escape");
    // the program skips the following lines of code and goes back to the loop condition, sends prompt.
    continue;
  }

  /* --- Does the input fit the program criteria?*/

  // read, so the program could compare input lenght to 5
  // test: if the user's input long enough.
  // operation: lenght of user input compared to 5 characters.
  if (anything.length <= 5) {
    //if user input is shorter, than 5, or 5, then it does not fit program's criteria.
    // alert: user gets notification that it is too short
    alert("too short");
    // the program skips the following lines of code and goes back to the loop condition sends prompt.
    continue;
  }
  // the program breaks the loop here while input fits program's criteria
  break;
}

/* ----- Generate and alert the final output ----- */

//variable read to be displayed with additional data in the finel alert.
// alert: users sees a window with the input and ammount of characters in the input.
// operation: text for display constructed of user input, calculated amount of characters and additional words in strings.
alert('"' + anything + '" is ' + anything.length + " characters long");
