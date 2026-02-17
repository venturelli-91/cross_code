/*
Description:
Given an array of numbers and a target, find the indices of two numbers whose sum equals the target.

Rules:
Return the first valid pair found.
Do not use the same index twice.

Example:
Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1]
*/

function twoSum(nums, target) {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map[complement] !== undefined) {
			return [map[complement], i];
		}
		map[nums[i]] = i;
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
