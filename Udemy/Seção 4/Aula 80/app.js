/**
 * Funções geradoras
 * lazy avaliation. É uma forma de uma função retornar um valor ou algo, diferente, um de cada vez
 * automaticamente, ou seja uma avaliação preguiçosa
 */
function* geradora1()
{
    // a palavra para fazer o retorno de uma function geradora é o 
    // yield
    // diferente do return, o yield fará o papel do lazy, onde poderemos chamar mais de 1 vez
    // e cada vez, vai retornar o valor diferente. Seguindo uma ordem de chamada!
    yield 'primeiro valor';
    yield 'segundo valor';
    yield 'terceiro valor';
}

function* geradora2()
{
    yield '1 valor';
    yield '2 valor';
    yield '3 valor';
}

const g1 = geradora1();
// para fazer a função gerador me retornar o valor, precisamos utilizar um metodo interno da function*
// q é usar o metodo next()
// assim ele retorna o valor do yield, e cada vez q chamamos ele chamara o valor do proximo e do proximo yield...
// obs: ele retorna um array
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next());
// ele nao sabe no ultimo q terminou, apenas se executar mais uma vez, ele recebe no atributo
// done, como true sabendo q terminou.
console.log(g1.next());

// podemos tambem iterar sobre a funcao
// dessa forma, iterando, ele sabe quando termina e nao exibe o undefined
const g2 = geradora2();
for( let valor of g2)
{
    console.log(valor)
}

// podemos fazer um while infinito dentro do gerador, sem limitação
/**
 * exemplo
 * function* generator3()
 * {
 * while(true)
 *   yield i++;
 * }
 */
// podemos fazer um gerador chamar outro, ou seja delegando a tarefa dele para outro gerador
/**
 * function* generator4()
 * {
 *  yield 1;
 *  yield 2;
 *  yield 3;
 * }
 * // delega
 * function* generator5()
 * {
 *  yield* generator4();
 *  yield 4;
 *  yield 5;
 * }
 */
// podemos retornar qualquer coisa, inclusive uma function anonima dentro do yield. assim o seu value
// será uma function