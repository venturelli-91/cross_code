/*
Given the array ["one", "two", "three", "four", "five"], group the words by number of letters.

Expected output example:

{
  3: ["one", "two"],
  4: ["four", "five"],
  5: ["three"]
}
*/

function groupByLength(words) {
	return words.reduce((acc, word) => {
		const length = word.length;
		if (!acc[length]) {
			acc[length] = [];
		}
		acc[length].push(word);
		return acc;
	}, {});
}

console.log(groupByLength(["one", "two", "three", "four", "five"]));
