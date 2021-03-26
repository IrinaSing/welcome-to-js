//The program asks a user to input something longer than 5 characters.
// If user cancels, the program sends alert, that it is not possible and then sends a prompt with input request again.
// If input is 0-5, the program sends notification, that it is too short input.
// Once input is longer than 5 characters, the program sends notification with the input and amount of characters.

//declare, init
//This variable will store user input and it will be used in equality operations within the loop.
let userInput = "";

// declared, init, assigned as false. Flag variable that depend on whether user input fits program criteria or not.
// By default it is false, there is no user input from the start.
let isValid = false;
// Beginning of the while-loop.
// read isValid: the value is inversed to true to be used within a loop. To run a while loop the condition must be truthy.
while (!isValid) {
  //user gets pop-up request and has to enter something that fits mentioned criteria.
  userInput = prompt("enter anything longer than 5 characters");

  //user input read and compared to null
  if (userInput === null) {
    // if strict equality is true, user sees awarning that there is no escape
    alert("there is no escape");
    //the program skip the following lines of code and come back to the loop condition and prompt.
    continue;
  }
  // the program checks the user input lenght
  if (userInput.length <= 5) {
    //if the input lenght is 5 characters or less, then user sees awarning about it
    alert("too short");
    // the program goes back to the loop condition to send a prompt again to the user.
    continue;
  }
  //once user input fits criteria, the variable value is updated to true.
  isValid = true;
}

//the last piece of code: the program sends alert showind user's input and counted ammount of characters in it
alert('"' + userInput + '" is ' + userInput.length + " characters long");
