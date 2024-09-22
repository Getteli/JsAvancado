/**
 * Em portugues IIFE siginfica Expressão de Função Imediatamente Invocada
 * ou seja: voce cria (invoca), naquele momento (imediatamente), uma expressão de função (como visto tbm no video 2)
 * traduzindo em ação:
 * vc cria uma função anonima entre parenteses e add os parenteses de chamada () logo em seguida, entao ela é criada e executada naquele momento
 */

// exemplo de sintaxe
// (function (){
//     console.log("IIFE");
// })();

// uma obs interessante, quando criamos esse IIFE, estamos falando que o que estiver dentro desse bloco não fará parte, não será chamado, não pode ser acessado, de fora do IIFE, então ele não "sujará" o resto do código.
// obs2: A função ela nao esta sendo "interpretada" quando é criada (entre os parenteses), mas quando é chamada (nos paresenteses de chamada no final ())
// mas podemos recuperar o valor dela, se colocarmos o IIFE sendo chamado de uma const/let por ex. (usando o return dentro dela)
