// this program requires from a user to input some text to check if it has vowels.
// Afterwards the program will send notification with result as true or false.

let _a = null;
while (_a === null) {
  _a = prompt(
    "enter some text, the program will check if it contains any vowels"
  );
}

let _b = "aeiou";

let _c = false;
for (let _d of _a) {
  let _e = _d.toLowerCase();
  if (_b.includes(_e)) {
    _c = true;
    break;
  }
}

alert(_c);
