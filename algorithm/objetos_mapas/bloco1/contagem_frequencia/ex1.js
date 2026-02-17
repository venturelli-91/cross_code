/*
Given the string "banana", create an object that shows how many times each letter appears.

Expected output example:

{ b: 1, a: 3, n: 2 }
*/

function countLetterFrequency(str) {
	const frequency = {};
	for (const letter of str) {
		frequency[letter] = (frequency[letter] || 0) + 1;
	}
	return frequency;
}

console.log(countLetterFrequency("banana"));
