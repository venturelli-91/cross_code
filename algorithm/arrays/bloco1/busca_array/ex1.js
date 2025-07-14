/*
Descrição:
Implemente uma função que retorna o índice da primeira ocorrência de um elemento que se repete em um array. 
Caso o elemento não exista, retorne -1.

Exemplo
Input: ([3, 5, 7, 5], 5)  
Output: 1
*/

//Resolução 1:

function searchIndex(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}
console.log(searchIndex([3, 0, 7, 1], 5));
