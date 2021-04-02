/* specific
_a -> animal
This variable is used to keep user's input with the name of the animal (according to the prompt text). User knows that not any word required, but animal name.

_b -> animalInfo
This variable holds user input with commentaries/description/information about the animal mentioned before

_c -> animalInfoGiven
Flag variable that changes value if the user typed an appropriate description for the animal mentioned before. It does not change if there is no description input or if the input does not include the animal name.
??? descriptionNotGiven ????
I don't yet understand how does the while loop with !-condition work
*/

alert(
  "this is a two-player game:\n\n" +
    "- player 1: enters an animal\n" +
    "- player 2: says something cool about it"
);

let animal = null;
while (animal === null || animal === "") {
  animal = prompt("enter an animal");
}

let animalInfo = "";

let animalInfoGiven = false;
while (!animalInfoGiven) {
  animalInfo = prompt("tell me something about " + animal);

  if (animalInfo === "" || animalInfo === null) {
    alert("that is not something");
  } else if (animalInfo.toLowerCase().includes(animal.toLowerCase())) {
    animalInfoGiven = true;
  } else {
    alert("nope, not about " + animal + ".  try again.");
  }
}

alert(
  "i just learned something cool about " +
    animal +
    '!\n\n- "' +
    animalInfo +
    '"'
);
