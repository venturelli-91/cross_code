/*
Description:
Given an array, return the element that appears most frequently.

Example:
Input: [2, 3, 2, 4, 3, 2]  
Output: 2
*/

function getMostFrequent(array) {
	const frequency = {};
	let maxElement = array[0];
	let maxCount = 0;

	for (const num of array) {
		frequency[num] = (frequency[num] || 0) + 1;

		if (frequency[num] > maxCount) {
			maxCount = frequency[num];
			maxElement = num;
		}
	}
	return maxElement;
}

console.log(getMostFrequent([2, 3, 2, 4, 3, 2]));
