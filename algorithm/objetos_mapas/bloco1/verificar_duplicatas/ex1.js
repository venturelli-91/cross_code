/*
Given an array of strings ["grape", "banana", "apple", "grape"], return true if there is any duplicate, otherwise false.
*/

function hasDuplicate(array) {
	return new Set(array).size !== array.length;
}

console.log(hasDuplicate(["grape", "banana", "apple", "grape"]));
