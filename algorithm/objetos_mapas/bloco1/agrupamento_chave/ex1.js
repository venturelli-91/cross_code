/*
Given the array ["ana", "bruno", "bia", "amanda"], group the names by their first letter.

Expected output example:

{
  a: ["ana", "amanda"],
  b: ["bruno", "bia"]
}
*/

function groupByFirstLetter(names) {
	return names.reduce((acc, name) => {
		const letter = name[0];
		if (!acc[letter]) {
			acc[letter] = [];
		}
		acc[letter].push(name);
		return acc;
	}, {});
}

console.log(groupByFirstLetter(["ana", "bruno", "bia", "amanda"]));
