/*
Description: Verify if the string is a palindrome, ignoring punctuation, spaces, and uppercase letters.

Input:
"A man, a plan, a canal - Panama!"

Expected Output:
true
*/

function isPalindromeClean(str) {
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindromeClean("A man, a plan, a canal - Panama!"));
