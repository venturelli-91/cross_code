/*
Enunciado: Crie uma função que retorne true se a string for um palíndromo. Desconsidere maiúsculas e espaços.

📥 Entrada:
"Ame a ema"
📤 Saída esperada:
true

*/

function palindromo(string) {
	return (
		string.toLowerCase().split(" ").join("") ===
		string.toLowerCase().split(" ").join("").split("").reverse().join("")
	);
}

console.log(palindromo("Ame a emo"));
