/* --- Declare the variables to store user data ---*/

//declared, init
//type: most-resent holder, as far as it forces the user to rewrite the value until it fits program criteria.
let userInput = "";

//instead of isValid (false) in this version we use the opposite isTooShort (true) variable
//decared, init
//assigned as boolean, but later it will be re-assigned as fixed-value variable.
let isTooShort = true;
// read the variable, test the value of the variable for true or false

/* --- gather user input --- */

while (isTooShort) {
  // assigned variable userInput
  // prompt (function call): user asked to enter smth longer than 5 characters
  userInput = prompt("enter anything longer than 5 characters");

  /* --- Did the user cancel? */

  //read
  //test: program checks if user input equal to null
  if (userInput === null) {
    // alert (function call): if user cancelled, s/he will be notified about impossibility to do so.
    alert("there is no escape");
    // the program skips the following lines of code and come back to the loop condition and prompt.
    continue;
  }

  /* --- Does the input fit the program criteria?*/

  // assignment updated, now it is not a flag anymore. It is a fixed-value
  isTooShort = userInput.length <= 5;
  // read
  // test: program checks if the user input <= 5
  if (isTooShort) {
    // alert (function call): if user input is < or = 5, the user will be notified that it is not acceptable for the program.
    alert("too short");
  }
}

/* ----- generate and alert the final output ----- */

// alert (function call): user will see combination of information: user input, info about it's lenght and additional words.
alert('"' + userInput + '" is ' + userInput.length + " characters long");
