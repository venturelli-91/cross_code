/*
Enunciado: Escreva uma função que inverta os caracteres de uma string.

📥 Entrada:
"developer"

📤 Saída esperada:
"repoleved"
 */

function inverterString(str) {
	return Array.from(str).reverse().join("");
}
console.log(inverterString("developer"));
