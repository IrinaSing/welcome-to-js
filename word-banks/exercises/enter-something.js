/*
  unused:
  used:  
    isNothing
    something
    input

*/

let something = "";

let isNothing = true;
while (isNothing) {
  // isNothing
  let input = prompt("enter something");

  if (input === null) {
    //input
    alert("canceler");
    continue;
  }

  if (input === "") {
    //input
    alert("nothing!??");
    continue;
  }

  isNothing = false;
  something = input;
}

alert(something);

/* -- error --

*/
