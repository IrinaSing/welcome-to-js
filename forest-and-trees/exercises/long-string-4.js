let phrase = "";
//opposite isTooShort = true (long-string-2) in this version of the program there is longEnough = false variable
let longEnough = false;

while (!longEnough) {
  phrase = prompt("enter anything longer than 5 characters");
  //this control flow is different from other programs
  // 3 paths within the loop

  // user input compared to null
  // if user cancelled, the input is strictly equal to null
  if (phrase === null) {
    // than the user sees the alert that cancel is not possible here
    // longEnough is still false in this case, so loop goes to the condition While
    // it will loop until user inputs smth
    alert("there is no escape");

    //program only start to perform this part if the previous condition returns false
    //the next test related to the lenght of the input - if it's <= 5 or not
  } else if (phrase.length <= 5) {
    //if this variable returns true, lenght does not fit program's request. User will get an alert notification.
    // after that the program goes back to the While condition of the loop and the loop runs again.
    alert("too short");
    // When both previous conditions returns false, the last path is performed.
  } else {
    // variable assigned to true and that breaks the loop (how??)
    longEnough = true;
  }
}

alert('"' + phrase + '" is ' + phrase.length + " characters long");
