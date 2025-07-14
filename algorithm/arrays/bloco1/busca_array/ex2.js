/*
Descrição:
Dado um array ordenado, implemente uma busca binária para encontrar a posição de um número. 
Se não existir, retorne -1.

Exemplo:
Input: ([1, 2, 3, 4, 5], 4)  
Output: 3
*/

//Resolução 1:

function buscaBinaria(array, number) {
	let inicio = 0;
	let fim = array.length - 1;

	while (inicio <= fim) {
		const meio = Math.floor((inicio + fim) / 2);

		if (array[meio] === number) {
			return meio;
		} else if (array[meio] < number) {
			return (inicio = meio + 1);
		} else {
			return (fim = meio - 1);
		}
	}
	return -1;
}

console.log(buscaBinaria([1, 2, 3, 4, 5], 4));
