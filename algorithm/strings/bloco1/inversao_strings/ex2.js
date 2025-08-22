/*
Enunciado: Dada uma frase, inverta cada palavra individualmente, mantendo a ordem.

📥 Entrada:
"Olá mundo React"

📤 Saída esperada:
"álO odnum tcaeR"
*/

function reverseWords(str) {
	return str
		.split(" ")
		.map((word) => word.split("").reverse().join(""))
		.join(" ");
}

console.log(reverseWords("Olá mundo React"));
