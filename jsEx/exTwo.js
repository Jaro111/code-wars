// Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between
// and including them and return it. If the two numbers are equal return a or b.

// function getSum(a, b) {
//   let myArray = [];
//   let sumOfArray = 0;
//   //
//   if (a === b) {
//     return a;
//   } else if (a > b) {
//     for (let i = b; i <= a; i++) {
//       myArray.push(i);
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       myArray.push(i);
//     }
//   }
//   console.log(myArray);
//   for (let i = 0; i < myArray.length; i++) {
//     sumOfArray += myArray[i];
//   }
//   return sumOfArray;
// }

// ------------------------------------------------------------

// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// function arrayDiff(a, b) {
//   let finalArray = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       finalArray.push(a[i]);
//     }
//   }
//   return finalArray;
// }

// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
// and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word. For simplicity,
// you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith,
// but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  //   let myString = "How can mirrors be real if our eyes aren't real";
  arrayString = this.split(" ");
  let arrayWord = "";
  let arrayCapitalized = [];
  for (let i = 0; i < arrayString.length; i++) {
    for (let j = 0; j < arrayString[i].length; j++) {
      if (j === 0) {
        arrayWord += arrayString[i][j].toUpperCase();
      } else {
        arrayWord += arrayString[i][j];
      }
    }
    arrayCapitalized.push(arrayWord);
    arrayWord = "";
  }
  finalString = arrayCapitalized.join(" ");
  return finalString;
};

const bla = "How can mirrors be real if our eyes aren't real";
console.log(bla.toJadenCase());
