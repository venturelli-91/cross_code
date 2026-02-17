/*
Given two arrays, arr1 = [1, 2, 3] and arr2 = [3, 2, 1], verify if they have the same numbers with the same quantities.
*/

function haveSameFrequency(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	const freq1 = {};
	const freq2 = {};

	for (const num of arr1) {
		freq1[num] = (freq1[num] || 0) + 1;
	}

	for (const num of arr2) {
		freq2[num] = (freq2[num] || 0) + 1;
	}

	for (const key in freq1) {
		if (freq1[key] !== freq2[key]) {
			return false;
		}
	}
	return true;
}

console.log(haveSameFrequency([1, 2, 3], [3, 2, 1]));
