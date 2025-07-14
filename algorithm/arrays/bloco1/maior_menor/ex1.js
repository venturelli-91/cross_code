/*
Descrição:
Dado um array de números inteiros, retorne o segundo maior valor único presente no array.

Regras:
O array terá pelo menos dois números distintos.
Desconsidere valores repetidos ao buscar o segundo maior.

Exemplo:
Input: [10, 5, 9, 10, 3]  
Output: 9

*/

/* Resolução 1: 

function segundoMaior(array) {
    const numerosUnicos = [...new Set(array)];
    numerosUnicos.sort((a, b) => b - a);
    return numerosUnicos[1];
}
*/
