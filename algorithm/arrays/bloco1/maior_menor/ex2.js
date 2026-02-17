/*
Description:
Given an array of integers, return the maximum difference between any two elements,
where the larger element comes after the smaller element (greater index).

Rules:
The difference is calculated as arr[j] - arr[i] with j > i.
If not possible, return 0.

Example:
Input: [7, 1, 5, 3, 6, 4]  
Output: 5 // (6 - 1)
*/

function maxProfit(array) {
	let maxDiff = 0;
	let minValue = array[0];

	for (let i = 1; i < array.length; i++) {
		maxDiff = Math.max(maxDiff, array[i] - minValue);
		minValue = Math.min(minValue, array[i]);
	}

	return maxDiff;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
