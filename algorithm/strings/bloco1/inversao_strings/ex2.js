/*
Description: Given a sentence, reverse each word individually, maintaining the order.

Input:
"Hello World React"

Expected Output:
"olleH dlroW tcaeR"
*/

function reverseWords(str) {
	return str
		.split(" ")
		.map((word) => word.split("").reverse().join(""))
		.join(" ");
}

console.log(reverseWords("Hello World React"));
