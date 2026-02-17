/*
Description:
Return the first element that appears duplicated in an array. If there are no duplicates, return -1.

Example:
Input: [2, 5, 1, 2, 3, 5]  
Output: 2
*/

function findFirstDuplicate(array) {
	const seen = new Set();
	for (const num of array) {
		if (seen.has(num)) {
			return num;
		}
		seen.add(num);
	}
	return -1;
}

console.log(findFirstDuplicate([2, 5, 1, 2, 3, 5]));
