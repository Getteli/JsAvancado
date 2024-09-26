/**
 * As varias maneiras de declarar funções
 * Relembre
*/

/**
 * Sobre as funções:
 * - São First-class objects (ou seja, objetos de primeira classe): Pode ser tratada como um dado;
 */

/**
 * Function hoinsting
 * 
 * Quando se declara uma função no modo padrão, de forma explicita, o motor/engine do javascript, na hora da execução
 * Vai colocar a função no topo do script, de forma que você possa chamar a função a partir de qualquer ponto
 * do código, INCLUSIVE antes da função.
 */
function DeclaFunction()
{
    console.log("Modo de declarar uma função, padrao, explicito");
}

// exemplo de chamada:
DeclaFunction();


/**
 * Function express
 * 
 * Como elas são First-class objects, este é um exemplo de como tratar uma função como dado (todas podem ser usadas como dado)
 */
const functExpress = function () 
{
    console.log("Sou um dado!");
}

// chamando como um dado normal
functExpress();

/**
 * O interessante do uso da função como um dado, é que agora podemos utlizar esse meio para jogar uma função
 * como parametro!
 * Exemplo:
 */
function funcParametro(funcao)
{
    funcao();
}

// ai agora chamamos a funcao passando uma funcao como parametro
funcParametro(functExpress); // sem os parenteses, pois estamos passando sem executa-la, sera executado dentro da funcao

/**
 * Arrow function
 * 
 * um recurso mais novo (em 2015/16) é uma forma de declarar uma função mas de forma mais curta bem parecida com a express
 * obs: podemos colocar nome na funcao tambem.
 * obs: ela sem nome tambem pode ser chamada de função anonima
 */
const functionArrow = () =>
{
    console.log("Sou uma arrow function");   
}

// assim é chamada
functionArrow();

/**
 * Anonymous function (função anonima)
 * 
 * Passar uma função como parametro ou usa-la em outra forma SEM NOME, por isso chamada como anonima
 * o 1° parametro do setTimeout por exemplo, é uma função, e neste caso estamos declarando direto na chamada, sem nome
 * ou seja, anonima
 */
setTimeout(() => {
    console.log('Função anonima');
}, 100);

/**
 * Função dentro de objeto
 * 
 * Podemos colocar uma função como uma chamada, um valor de um atributo dentro de um objeto
 */
const obj = {
    falar: function ()
    {
        console.log("falando: funcao dentro de um atributo de um objeto");
    },
    // ou podemos agora, na versão mais nova, simplesmente declarar a funcao
    falarMaisNovo()
    {
        console.log("falando: declarando a função de forma direta");
    }
}

// sua chamada é como um atriburo de um objeto
obj.falar();
obj.falarMaisNovo();