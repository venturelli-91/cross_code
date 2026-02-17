/*
Description:
Given an array of integers, determine if there is at least one continuous subarray whose sum is zero.

Rules:
Return true if it exists, false otherwise.

Example:
Input: [1, 2, -3, 3]  
Output: true
*/

function hasZeroSum(array) {
	const prefixSums = new Set([0]);
	let sum = 0;

	for (const num of array) {
		sum += num;
		if (prefixSums.has(sum)) {
			return true;
		}
		prefixSums.add(sum);
	}
	return false;
}

console.log(hasZeroSum([1, 2, -3, 3]));
