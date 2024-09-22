/**
 * Currying - É a forma de se trabalhar com mais de uma chamada de função para receber varios parametros.
 * Foi como usamos no video 27. 
 * - Com o closure, nós podemos usar outro parentese para chamar a funcao de dentro (closure), ficando assim nomeFuncao()() <- o 2° é para o closure
 * Para Usar currying, precisamos saber sobre Closure E Escopo. vamos relembrar:
 */
// Escopo é como o contexto ou quando usamos o this dentro de uma funcao ou codigo. tem o escopo Global por exemplo, ou escopo local. Por ex:

/**
 * var i = 0 // escopo global
 * function f()
 * {
 *  var x = 5; // escopo local.
 * }
 * ou seja: a variavel i pode ser acessada em qualquer parte do codigo, enquanto a variavel X só pode dentro da função f (lembre sobre let, var e const.)
 */

// Closure - Como vimos no 27
// function ChamaNome(nome)
// {
//     // closure
//     return function mostrarNome(p)
//     {
//         if (!nome)
//         {
//             return p;
//         }
//         return nome;
//     }
// }
// let resultado = ChamaNome()("cap");

// console.log(resultado);

// Exemplo de currying

let resultado;

function ehMaior(a)
{
    let result = false;
    return function ehMaiorInterno(b) {
        if (!b) {
            return result;
        }
        result = a > b;
        a = b;
        // o que faz com que seja currying e nao apenas um closure, é o return com o nome da funcao, como um recursivo.
        // isso faz com que ele pegue os parametros que estao na pilha e vao fazendo um novo b (ja q o a é o antigo b, como passamos na linha 47)
        // então primeiro ela usa a = 2 e b 5;
        // depois passamos b para a, e a fica = 5;
        // e entao com o return ehMaiorInterno, ele pega da pilha o proximo, e passa para o lado, se tornando o b
        // entao a = 5 e b = 1
        return ehMaiorInterno;
    }    
}

// a chamada de funcao depois da 1° (), se for maior do que a quantidade que existe realmente (ou seja, tem a funcao e 1 closure, entao usamos 2 apenas no mesmo instante), ela entrará como se fosse uma pilha, esperando para ser usada
resultado = ehMaior(2)(5)(1)(6)(); // <- obs: sempre adicione o vazio para determinar a parada, seguindo a regra declarada, como no recursivo.

console.log(resultado);