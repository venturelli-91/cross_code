/*
Description: Create a function that returns true if the string is a palindrome. Ignore uppercase and spaces.

Input:
"A man a plan a canal Panama"

Expected Output:
true
*/

function isPalindrome(str) {
	const cleaned = str.toLowerCase().split(" ").join("");
	return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama"));
