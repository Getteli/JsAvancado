/**
 * Splice
 * Metodo para manipular arrays
 */

// Com o splice podemos manipular arrays pelos seus indices para remover
// exemplo        0          1        2       3
const nomes = ['Fulano', 'Cicrano', 'Omã', 'Scobar'];

// para remover podemos usar o splice e podemos no msm metodo ja adicionar (no msm lugar do indice passado, empurrando o item atual para frente caso nao o remova)
// nomes.splice(indice, qtd_remover, elemento1, elemento2, elemento3,...);
// o 1° parametro é para saber a partir de onde começamos
// o 2° parametro é para indicar quantos vamos remover a partir do 1°
nomes.splice(2,2); // <- estou falando que a partir do indice 2 eu quero remover 2 elementos (como nosso array possui 4 indices, eu vou remover o 2 (ele msm) + o próximo)
console.log(nomes);

// obs: o retorno do splice é um array, podemos armazenar em uma var os itens removidos.

/**
 * parametro negativo
 * serve para voce começar a conta do final para o inicio, (mas nao começa do 0 e sim do -1)
 */
// exemplo          -4        -3       -2      -1
const nomes_n = ['Fulano', 'Cicrano', 'Omã', 'Scobar'];