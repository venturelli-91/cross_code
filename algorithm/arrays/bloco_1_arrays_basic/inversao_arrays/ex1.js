/*
Descrição:
Implemente uma função que inverte um array sem utilizar o método .reverse().

Exemplo:
Input: [1, 2, 3, 4]  
Output: [4, 3, 2, 1]

*/

/* Resolução 1:

function reverseArray(array) {
	const reversedArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reversedArray.push(array[i]);
	}
	return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4]));
*/
