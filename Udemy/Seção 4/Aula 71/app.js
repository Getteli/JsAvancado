/**
 * Escopo léxico
 * uma função sabe onde ela foi declarado e sabe sobre variaveis/constantes/let/funcoes/metodos ao redor
 * da onde ela está ate o escopo global
 */

const nome = "Douglas";

function falaNome() {
    console.log(nome);
}

falaNome();

/**
 * a ordem de prioridade é sempre do mais perto ao mais longe DA ONDE ELA FOI CRIADA/DECLARADA
 * NÃO onde foi EXECUTADA.
 */

// exemplo de prioridade
const nome2 = "Primeiro";

function falaNome2() {
    console.log(nome2);
}

function usafalaNome2() {
    const nome2 = "Segundo";
    falaNome2();
}

usafalaNome2();

/**
 * Ao executar podemos ver que a funcao falaNome2, escolhe exibir a constante nome2 que foi definida
 * mais perto onde a funcao foi declarada. Enquanto a outra constante nome2 dentro da funcao usaFalaNome2
 * ela ignora
 */