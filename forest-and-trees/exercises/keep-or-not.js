// The program asks a user to input a phrase.
// It will send requests until the user input something.
// When there is input, the program asks if user wants to use this phrase for check up.
// If yes, then program sends requests about each letter, and user decide whether to keep a letter or to replace it (or remove it).
// In the end, the program shows the result with corrections made by user.

// Declare, init: this variable will keep user input
// It will be compared with null, empty strings within a while loop.
// Information from this variable will be transformed by other variable and used in the final alert.
let input = "";

//declared, init, assigned: flag variable, returns boolean. Used as condition for the loop.
let userConfirmed = false;
/*--The following loop is related to 1)input and 2)user's decision to keep or discard it.--*/
// While-loop start.
//! reverses "userConfirmed" assignment from false to true.
while (!userConfirmed) {
  //"input" assignment via prompt. User have to enter the phrase.
  input = prompt("enter a phrase, you'll get a chance to fix your mistakes");

  // if-statement with strict equality operators that compare user input to null and empty  strings.
  if (input === "" || input === null) {
    // if user does not enter anything, but press ok or cancel, there will be pop-up alert:
    alert("nope, enter something");
    // than the program will skip the rest of the code and go back to the condition of the loop.
    continue;
  }

  // This line will execute only if user entered smth.
  // variable userConfirm will be assigned by user, when s/he clicks ok
  // in case user cancel the input (userConfirmed = false), the program will start the loop again.
  userConfirmed = confirm(
    "do you want to use this phrase?\n\n" + '- "' + input + '"'
  );
}

// this chunk of the code can only perform after user's confirmation of the input.
// declare, init variable with empty strings. This variable will be shown in the final alert.
let newPhrase = "";
// for-of loop used to check every character of user input.
for (let character of input) {
  // declared, init, assigned. Flag variable keepIt returns booleans.
  // this variable assignment will be used as many times, as many characyert are in the user input.
  let keepIt = confirm(input + '\n\n- do you want to keep "' + character + '"');
  // if user decides to keep the character, it will be assigned to newPhrase variable.
  if (keepIt) {
    newPhrase = newPhrase + character;
    // If user decides to discards the character the following code performs
  } else {
    // declared, init, assigned as null (why not empty strings?)
    let replacement = null;
    // New while loop inside a loop
    // As user has chosen to discard the character, there is an opportunity to replace it. It is not allowed to cancel, but it is ok to replace with emply strings = to delete the character.
    while (replacement === null) {
      // prompt call. user input will assign replacement variable.
      replacement = prompt('enter a replacement for "' + character + '"');
    }
    // continue to build resulting output. In this chunk newPhrase will also include replacemnt instead of discarded character.
    newPhrase = newPhrase + replacement;
  }
}
// Final message with new phrase to the user that includes string predetermined text, transformed user input.
alert('here is your new phrase:\n\n"' + newPhrase + '"');
