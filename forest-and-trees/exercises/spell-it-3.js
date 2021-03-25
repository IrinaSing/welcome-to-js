let input = "";
//global variable

//The loop opens here.
//The condition of a loop is always true, so the loop runs for infinite times (until the memory is full.
//firstly we test variable "input"
//and only then variable userConfirmed appears in the next step of the loop.
while (true) {
  input = prompt("enter a word to spell:");
  //if - condition when
  if (input === "" || input === null) {
    alert("nope, enter something");
    //brings back to the conditions of the loop
    continue;
  }

  //in this version it is a local variable declared and accessible within function.
  //declared, initialized, assigned
  let userConfirmed = confirm(
    "do you want to spell this word?\n\n" + '- "' + input + '"'
  );
  if (userConfirmed) {
    break;
  }
}

let oneByOne = "all spelled out:\n";
for (let i = 0; i < input.length; i = i + 1) {
  //loop for (initialization; condition; finalExpression)
  //used to check characters one by one in the scope (within variable "input")
  //check characters until their ammoint = lenght of the input.
  let nextLetter = input[i];
  oneByOne = oneByOne + "\n- " + nextLetter;
}

alert(oneByOne);
