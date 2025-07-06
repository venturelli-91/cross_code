/*
Descrição:
Dado um array, retorne true se ele for um palíndromo (lê-se igual da esquerda para direita e vice-versa), 
caso contrário, false.

Exemplo:
Input: [1, 2, 3, 2, 1]  
Output: true

*/

// Resolução 1:

function isPalindrome(array) {
	const reversedArray = array.slice().reverse();
	return JSON.stringify(array) === JSON.stringify(reversedArray);
}

console.log(isPalindrome([1, 2, 3, 2, 1]));
