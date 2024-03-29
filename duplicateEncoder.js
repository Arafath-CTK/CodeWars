// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let letters = word.toLowerCase().split("");
  let charCount = {};

  for (const char of letters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = letters
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");
  return result;
}

// Test
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
