//The program request a user to input a word for spelling in the future.
//If the user cancels or presses ok without entering anything the pop-up window with request appears again.
// When program gets valid input from user, it asks to confirm the word.
// If it is confirmed, there is a window with spelling appear.
// If input is not confirmed, the program sends a request for a new input.

//declare, init, empty string
// this variable stores data from user input from the prompt.
//It will be compared to null and empty strings (participate in a loop)
//used as a basis for variable "spellIt"
let word = "";

//declare, init, assigned. A boolean flag variable used to determine when the I/O loop is finished.
let didConfirm = false;
//didConfirmed read.
//operation ! turns variable from assigned False to True
//test: while the the word is not confirmed, the loop will run again and again.
while (!didConfirm) {
  //prompt function call to get user input and to assign it to the variable 'word'
  word = prompt("enter a word to spell:");

  //read user input for variable 'word'(if there is any)
  //test: compare úser input to null and empty strings (operation - strict equality). Returns true or false.
  if (word === "" || word === null) {
    //alert (function call), if 'word' was not assigned.
    alert("nope, enter something");
    // program goes back to a While-condition and sends a prompt again
    continue;
  }

  //confirm function call: user asked to confirm the typed word.
  //assigning true or false to 'didConfirm' variable
  didConfirm = confirm(
    //operation + adds the word from user input to the displayed text in function call.
    "do you want to spell this word?\n\n" + '- "' + word + '"'
  );
}
//declared, init, assigned as strings.
//this variable will be constructed out of letters of the word.
//it will be displayed in the final alert
let spellIt = "all spelled out:\n";
//nextLetter declared
//word variable read
for (let nextLetter of word) {
  // operation + adds new letter from the inputted word to spellIt variable every round.
  spellIt = spellIt + "\n- " + nextLetter;
}
//alert function call displays spellIt variable (assigned description + each letter of the word in a separate line).
alert(spellIt);
