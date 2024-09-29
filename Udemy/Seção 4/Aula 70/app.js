/**
 * Aula sobre retornos (de funcoes)
 * O retorno é sobe formas de retornar, que nem sempre uma função retorna algo
 * e sobre o uso de um retorno dentro de uma funcao que esta dentro de outra função (retornar
 * um retorno de outro retorno e sucessivamente)
 * Como uma função recursiva.
 * Podemos retornar tambem uma função como return dentro de uma função
 * Podemos retornar: valores primitivos, variaveis, funções, objetos, array, valores, string, nada, void, undefined e tudo mais
 **/
// exemplo:
function Criarmultiplicador(multiplicador)
{
    // perceba q eu estou retornando essa função anonima
    return function(n)
    {
        return n * multiplicador;
    }
}

const duplicar = Criarmultiplicador(2);
const resultado = duplicar(10);
console.log(resultado);
// ou seja, eu retornei a funcao q vai me dar o resultado, chamando a funcao anterior (externa) em que
// ja prepara com qual o multiplicador que eu quero (no caso duplicar, 2x)
// quando eu chamo essa constante duplicar (q recebeu uma funcao e é uma funcao agora)
// e passo o parametro para ela, ela executa a funcao anonima q foi retornada