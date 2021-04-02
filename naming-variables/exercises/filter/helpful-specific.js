/* specific
textToFilter - stores user input for it's futher comparison and transformation.

textWithoutVowels - this variable will appear in the final output
as a transformed user input (vowels will be removed).

character - variable for each character of the user's text,
so that all of them could be compared to vowels one by one.

vowels - fixed variable that stores set of symbols that will be compared to user input via includes.
*/

let textToFilter = null;
while (textToFilter === null) {
  textToFilter = prompt("enter some text, the program will remove all vowels");
}

let textWithoutVowels = "";
for (let character of textToFilter) {
  let vowels = "aeiou".includes(character.toLowerCase());
  if (!vowels) {
    textWithoutVowels = textWithoutVowels + character;
  }
}

alert(textWithoutVowels);
