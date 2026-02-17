/*
Description: Count the number of vowels (a, e, i, o, u — uppercase or lowercase) in a string.

Input:
"Programming is incredible!"

Expected Output: 9

Note: Consider accented vowels as normal vowels.
*/

function countVowels(str) {
	const vowels = "aáãeéiíoóuúAEIOU";
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			count++;
		}
	}

	return count;
}

console.log(countVowels("Programming is incredible!"));
