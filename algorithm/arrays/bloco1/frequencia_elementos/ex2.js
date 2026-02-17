/*
Description:
Return an object containing the frequency of each array element.

Example:
Input: [1, 2, 2, 3, 3, 3]  
Output: {1: 1, 2: 2, 3: 3}
*/

function calculateFrequency(array) {
	const frequency = {};

	for (const num of array) {
		frequency[num] = (frequency[num] || 0) + 1;
	}
	return frequency;
}

console.log(calculateFrequency([1, 2, 2, 3, 3, 3]));
