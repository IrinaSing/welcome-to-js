let input = "";
//global variable

//The loop opens here. While condition defined as true by default for the whole scope in breces.
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
  let nextLetter = input[i];
  oneByOne = oneByOne + "\n- " + nextLetter;
}

alert(oneByOne);
