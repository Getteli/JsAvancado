/**
 * Asyn e Await
 * Antes de mais nada, vamos aos significados
 * async = Assincronismo, ou seja, falta de sincronismo
 * await = vem do ingles de esperar
 * A linguagem javascript ELA É sincrona, ou seja as coisas sao feitas "ao msm tempo" (como é meio q impossivel, ele faz aquele event loop que conversamos no video 13. onde ele "scaneia" o codigo novamente se tiver algo pendente)
 * Quando queremos que algo seja feito e o codigo ESPERE ele terminar. nós usamos o await para informar ao javascript que ele deve esperar.
 * Porem isso só pode funcionar se estiver dentor de um async.
 * Por que ? o Async informa ao javascript que aquele bloco ele nao é sincrono, "ó o resto é como vc ja sabe, mas isso aqui nao é sincrono, nao mexe".
 * Entao o dentro desse bloco, quando vamos chamar as funcoes, metodos, promise ou que for (que possa esperar)
 * nós adicionamos o nome await antes.
 * Vamos ver:
 */
// exemplo de 4 promise com timeout para teste
const cincoMil = () => new Promise((resolve, reject) => { setTimeout(() => { resolve("promise cincoMil resolvida") }, 5000); });
const mil = () => new Promise((resolve, reject) => { setTimeout(() => { resolve("promise mil resolvida") }, 1000); });
const quinhentos = () => new Promise((resolve, reject) => { setTimeout(() => { resolve("promise quinhentos resolvida") }, 500); });
const cem = () => new Promise((resolve, reject) => { setTimeout(() => { resolve("promise cem resolvida") }, 100); });

// metodo que sera feito async, nao sincronizado.
// obs: veja que adicionamos o nome async antes da funcao expressa (depois de declarar a constante)
const resolvedoraDePromisesAsync = async () =>
{
    // e entao, dentro desse bloco podemos chamar metodo que devem esperar.
    // novamente, adicionamos o nome await antes de chamar a funcao.
    const resultado1 = await cincoMil();
    console.log("faz isso aqui..."); // <- esse e os outros consoles sao para ver, que o javascript vai executar a promise a cima, e vai esperar para prosseguir, ou seja vai fazer por 5 segundos o de cima. Quando terminar ele vem para o console.log, e assim sucessivamente.
    const resultado2 = await mil();
    console.log("faz isso aqui22...");
    console.log("faz isso aqui222...");
    const resultado3 = await quinhentos();
    console.log("faz isso aqui43242...");
    const resultado4 = await cem();
    console.log("...");

    console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`);
};

// chama o metodo que sera async
resolvedoraDePromisesAsync();