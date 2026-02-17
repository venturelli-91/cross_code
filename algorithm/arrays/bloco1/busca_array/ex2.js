/*
Description:
Given a sorted array, implement binary search to find the position of a number.
If it does not exist, return -1.

Example:
Input: ([1, 2, 3, 4, 5], 4)  
Output: 3
*/

function binarySearch(array, number) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);

		if (array[mid] === number) {
			return mid;
		} else if (array[mid] < number) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
