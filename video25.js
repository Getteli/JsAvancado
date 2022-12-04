/**
 * Como ja vimos ao estudar algoritmo, metodo Recursivo.
 * Recursiva = uma função que chama ela mesma.
 * ex:
 */

let num = 5;

function soma(i)
{
    if(i == 1) return 1; // <- SEMPRE faça uma regra de parada. para evitar loop
    return i + soma(i - 1);
}

console.log(soma(num));