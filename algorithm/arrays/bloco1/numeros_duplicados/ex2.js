/*
Description:
Given an array, return a new array without duplicate elements, maintaining the original order.

Example:
Input: [1, 2, 2, 3, 1]  
Output: [1, 2, 3]
*/

function removeDuplicates(array) {
	return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));
