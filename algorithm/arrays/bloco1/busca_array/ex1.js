/*
Description:
Implement a function that returns the index of the first occurrence of an element in an array.
If the element does not exist, return -1.

Example:
Input: ([3, 5, 7, 5], 5)  
Output: 1
*/

function searchIndex(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}

console.log(searchIndex([3, 0, 7, 1], 5));
