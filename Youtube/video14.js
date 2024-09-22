/**
 * Vamos entender a diferença entre os metodos All e o Race do objeto Promise
 */

// 1° vamos ter 3 prmises, simples
const Promise1 = new Promise((resolve, reject) => {resolve("promise 1 resolvida. ")});
const Promise2 = new Promise((resolve, reject) => {resolve("promise 2 rejeitada. ")});
const Promise3 = new Promise((resolve, reject) => {resolve("promise 3 resolvida. ")});

/**
 * ALL -
 * O Promise.all() serve quando queremos pegar uma LISTA de promises e ver o resultado de cada uma.
 * Em vez de pegarmos cada uma das promises, usamos o all, quase como fazer um forEach em um array por ex.
 * Ele segue igualmente uma promise normal, apenas a forma de chamar é diferente.
 * nós adicionamos cada um dos objs (ou constantes no caso) como um array [] o resto é igual, o seu resultado sera feito em loop.
 */
// OBS: se ocorrer um catch, o loop é parado
Promise.all([Promise1, Promise2, Promise3]).then((messages) =>
{
    console.log(messages);
}).catch((messages) =>
{
    console.error("ops: ", messages);
});

/**
 * RACE -
 * A Promise.race() é um pouco parecido, a forma de se chamar é igual, porem como o nome diz, é uma corrida
 * Isso significa que ele vai exibir o 1° resultado que for resolvido
 * No nosso exemplo estao em ordem e de facil resolução, mas se cada uma fosse um acesso a um servidor, ou com timeout, ou resolução de qualquer outra coisa
 * Ele vai exibir o 1° que terminar. Pode-se testar adicionando um timeout nas promises de exemplo a cima.
 */
Promise.race([Promise1, Promise2, Promise3]).then((message) =>
{
    console.log(message);
}).catch((message) =>
{
    console.error("ops: ", message);
});