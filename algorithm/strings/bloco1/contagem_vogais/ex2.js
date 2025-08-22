/*
Enunciado: Crie um objeto com a contagem de cada caractere da string.

📥 Entrada:
"banana"

📤 Saída esperada:
{ b: 1, a: 3, n: 2 }

*/

function contarCaracteres(str) {
	const contagem = {};
	for (let char of str) {
		if (contagem[char]) {
			contagem[char]++;
		} else {
			contagem[char] = 1;
		}
	}
	return contagem;
}

console.log(contarCaracteres("banana")); // { b: 1, a: 3, n: 2 }
