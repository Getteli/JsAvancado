/**
 * Vamos ver primeiramente, a diferença de uma declaração para uma expressão de função (que é basicamente uma função anonima (ou seja nao tem nome na criacao da funcao))
 */

// expressão de funcao
// const ExpressaoFuncao = function()
// {
//     console.log("Esta é uma expressão de uma função anonima");
// };

// ExpressaoFuncao(); // <- executa a funcao

// function declaracaoFuncao()
// {
//     console.log("Esta é uma função declarada, clássica");
// }

// declaracaoFuncao(); // <- executa a funcao

// suas diferenças se dão apenas na sua criação.

/**
 * ARROW FUNCTIONS
 * São funções anonimas que podem ser declaradas até mesmo em uma linha, se chama arrow function pois é feita assim. Veja:
*/
// nome pode ser qualquer um e por esta => seta, ele se chama arrow function.
// const arrowFunction = () =>
// {
//     console.log("oi sou uma arrow function");
// };

// arrowFunction(); // <- sua chamada tambem é normal.

// OBS: quando chamamos o this. Ela não chama o escopo de dentro da função. Ou seja, o seu escopo é do local onde foi chamada.
// por exemplo, em ambientes node, o global é o mais externo que se tem de chamada.
// em navegadores esse global seria o window.
// quando chamamos o this em uma arrow function ele aponta para o window/global pois é o escopo da onde ele foi chamada.
// então...

// const arrowFunction = () =>
// {
//     console.log(global);
// };

// arrowFunction(); // <- sua chamada tambem é normal.

// e se quisermos um this dentro, como fazemos ?
// para isso em vez de uma arrow function normal, nós faremos um obj com uma arrow function dentro. exemplo:

// criamos o objeto
const funcoes =
{
    // criamos a função normal
    thislocal: function()
    {
        // entao criamos a arrow function
        const thisLocal = ( () => console.log(this) ); // <- faz a chamada do this (agora local)
        console.log(thisLocal); // <- exibimos aqui para ver
    },
}
funcoes.thislocal();