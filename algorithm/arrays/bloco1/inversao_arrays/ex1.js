/*
Description:
Implement a function that reverses an array without using the .reverse() method.

Example:
Input: [1, 2, 3, 4]  
Output: [4, 3, 2, 1]
*/

function reverseArray(array) {
	const reversedArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reversedArray.push(array[i]);
	}
	return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4]));
