/*
Enunciado: Conte o número de vogais (a, e, i, o, u — maiúsculas ou minúsculas) em uma string.

📥 Entrada:
"Programação é incrível!"

📤 Saída esperada: 9

Obs: Considere as vogais acentuadas como vogais normais.

*/

function contarVogais(str) {
	const vogais = "aáãeéiíoóuúAEIOU";
	let contador = 0;

	for (let i = 0; i < str.length; i++) {
		if (vogais.includes(str[i])) {
			contador++;
		}
	}

	return contador;
}

console.log(contarVogais("Programação é incrível!"));
