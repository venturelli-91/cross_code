/*
Descrição:
Dado um array, retorne o elemento que aparece mais vezes.

Exemplo:
Input: [2, 3, 2, 4, 3, 2]  
Output: 2

*/

//Resolução 1:

function retornarElemento(array) {
	const contagem = {};
	let maxElemento = array[0];
	let maxContagem = 0;

	for (const numero of array) {
		contagem[numero] = (contagem[numero] || 0) + 1;

		if (contagem[numero] > maxContagem) {
			maxContagem = contagem[numero];
			maxElemento = numero;
		}
	}
	return maxElemento;
}

console.log(retornarElemento([2, 3, 2, 4, 3, 2]));
