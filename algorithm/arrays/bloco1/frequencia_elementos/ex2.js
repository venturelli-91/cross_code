/*
Descrição:
Retorne um objeto (mapa) que contenha a frequência de cada elemento do array.

Exemplo:
Input: [1, 2, 2, 3, 3, 3]  
Output: {1: 1, 2: 2, 3: 3}
*/

//Resolução 1:

function calcularFrequencia(array) {
	const frequencia = {};

	for (const numero of array) {
		frequencia[numero] = (frequencia[numero] || 0) + 1;
	}
	return frequencia;
}

console.log(calcularFrequencia([1, 2, 2, 3, 3, 3]));
