// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const myWord = word.toLowerCase();
  let newString = "";
  console.log(myWord);
  let count = 0;
  for (let i = 0; i < myWord.length; i++) {
    for (let j = 0; j < myWord.length; j++) {
      if (myWord[i] === myWord[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      newString += "(";
    } else {
      newString += ")";
    }
    count = 0;
  }
  return newString;
}

console.log(duplicateEncode("Success"));
