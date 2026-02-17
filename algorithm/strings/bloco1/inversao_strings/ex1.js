/*
Description: Write a function that reverses the characters of a string.

Input:
"developer"

Expected Output:
"repoleved"
*/

function reverseString(str) {
	return Array.from(str).reverse().join("");
}

console.log(reverseString("developer"));
