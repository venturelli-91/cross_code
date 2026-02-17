/*
Write a function that checks if a string has repeated letters.
Example: "abcde" → false, "aabc" → true
*/

function hasRepeatedLetters(str) {
	return new Set(str).size !== str.length;
}

console.log(hasRepeatedLetters("abcde")); // false
console.log(hasRepeatedLetters("aabc")); // true
