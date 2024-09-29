globalThis.globalVar = "Variável global!";

/**
 * IIFE -> Immediately Invoked Function Expression
 * é uma forma de criar uma função para ser invocada (chamada) automaticamente na hora, sem tocar o
 * escopo global
 */
// exemplo de chamada de iife
// colocamos a funcao entre parenteses (na mesma ideia do php de instanciar e depois ja pegar fora)
// criamos a funcao anonima dentro
// e depois de fechar o parenteses, abrimos e fechamos para chamar a funcao;
(function(){
    var localVar = "Variável local do IIFE!";
    console.log("IIFE");
    console.log(globalThis.globalVar);
    console.log(localVar);
})();

// console.log(localVar); // da erro: localVar is not defined

// No entanto, isso não significa que o IIFE não pode acessar variáveis e métodos globais. 
// Na verdade, ele pode acessar o escopo global, mas as variáveis e funções definidas
// dentro do IIFE não são acessíveis fora dele. Aqui está um exemplo para ilustrar.
// Como exemplificado a cima.