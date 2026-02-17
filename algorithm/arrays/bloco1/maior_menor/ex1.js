/*
Description:
Given an array of integers, return the second largest unique value present in the array.

Rules:
The array will have at least two distinct numbers.
Disregard repeated values when searching for the second largest.

Example:
Input: [10, 5, 9, 10, 3]  
Output: 9
*/

function secondLargest(array) {
	const uniqueNumbers = [...new Set(array)];
	uniqueNumbers.sort((a, b) => b - a);
	return uniqueNumbers[1];
}

console.log(secondLargest([10, 5, 9, 10, 3]));
