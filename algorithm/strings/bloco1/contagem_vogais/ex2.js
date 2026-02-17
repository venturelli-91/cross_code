/*
Description: Create an object with the count of each character in the string.

Input:
"banana"

Expected Output:
{ b: 1, a: 3, n: 2 }
*/

function countCharacters(str) {
	const count = {};
	for (let char of str) {
		if (count[char]) {
			count[char]++;
		} else {
			count[char] = 1;
		}
	}
	return count;
}

console.log(countCharacters("banana")); // { b: 1, a: 3, n: 2 }
