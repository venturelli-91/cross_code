/*
Description: Find the length of the longest substring without repeating characters.

Input:
"abcabcbb"

Expected Output:
3 // "abc"
*/

function longestSubstring(str) {
	const charIndex = {};
	let maxLength = 0;
	let left = 0;

	for (let right = 0; right < str.length; right++) {
		if (charIndex[str[right]] >= left) {
			left = charIndex[str[right]] + 1;
		}
		charIndex[str[right]] = right;
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
}

console.log(longestSubstring("abcabcbb"));
