/**
 * Closures - são funções criadas dentro de outras funções, que podem acessar variaveis, e outros metodos de fora, e introduzir no contexto dentro da funcao menor.
 * Vamos ao exemplo:
 */

// exemplo 1
function init()
{
    const nome = "uma string";

    // closure
    function mostrarNome()
    {
        console.log(nome);
    }

    mostrarNome();
}
// init();

// exemplo 2
// pode ser tbm:
function init2()
{
    const nome = "uma string DOIS";

    // closure
    return function mostrarNome()
    {
        console.log(nome);
    }
}
// init2();

// exemplo 3
// ou tambem
function init3()
{
    const nome = "uma string TREES";

    // closure
    function mostrarNome()
    {
        console.log(nome);
    }

    return mostrarNome;
}
// como eu estou "copiando" uma funcao para a variavel, entao vc chama a variavel como uma funcao tbm, ja q é uma referencia
// let guardainit3 = init3();
// guardainit3();

// exemplo 4
function init4(nome)
{
    // closure
    return function mostrarNome(p)
    {
        if (!nome)
        {
            return p;
        }
        return nome;
    }
}
/**
 * OBSERVAÇÃO. Vejam que interessante. Com o closure existindo dentro da função, nós podemos fazer 2 chamadas de funções em 1 só.
 * Ao chamar uma função, nós usamos os parenteses depois do nome dela. assim nomeFuncao() <- chamada
 * Com o closure, nós podemos usar outro parentese para chamar a funcao de dentro (closure), ficando assim nomeFuncao()() <- o 2° é para o closure
 */
console.log( init4("Douglas")("Capitão") );