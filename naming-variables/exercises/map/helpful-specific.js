/* specific

textForVowelsCapitalization - text, typed by user that will be
transformed via capitalization of all the vowels.

vowelOrNot - variable that takes each character of user input to compare
with set of vowels (to determine if the characted has to be capitalized)

outputWithCapitalizedVowels - variable for text in output in final alert. 
the user input with capitalized vowels will be displayed.
*/
let textForVowelsCapitalization = null;
while (textForVowelsCapitalization === null) {
  textForVowelsCapitalization = prompt(
    "enter some text, can you guess what the program does?"
  );
}

let outputWithCapitalizedVowels = "";
for (let vowelOrNot of textForVowelsCapitalization) {
  if ("aeiou".includes(vowelOrNot)) {
    outputWithCapitalizedVowels =
      outputWithCapitalizedVowels + vowelOrNot.toUpperCase();
  } else if ("AEIOU".includes(vowelOrNot)) {
    outputWithCapitalizedVowels =
      outputWithCapitalizedVowels + vowelOrNot.toLowerCase();
  } else {
    outputWithCapitalizedVowels = outputWithCapitalizedVowels + vowelOrNot;
  }
}

alert(outputWithCapitalizedVowels);
