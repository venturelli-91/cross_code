/*
Description:
Given an array, return true if it is a palindrome (reads the same from left to right and vice versa),
otherwise return false.

Example:
Input: [1, 2, 3, 2, 1]  
Output: true
*/

function isPalindrome(array) {
	const reversedArray = array.slice().reverse();
	return JSON.stringify(array) === JSON.stringify(reversedArray);
}

console.log(isPalindrome([1, 2, 3, 2, 1]));
