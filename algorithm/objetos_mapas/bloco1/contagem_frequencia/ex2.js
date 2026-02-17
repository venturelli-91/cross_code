/*
Given an array [1, 2, 2, 3, 3, 3], count the frequency of each number and return as an object.

Expected output example:

{ 1: 1, 2: 2, 3: 3 }
*/

function countNumberFrequency(array) {
	return array.reduce((freq, num) => {
		freq[num] = (freq[num] || 0) + 1;
		return freq;
	}, {});
}

console.log(countNumberFrequency([1, 2, 2, 3, 3, 3]));
