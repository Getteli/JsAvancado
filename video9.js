/**
 * TemplateString é uma forma de se manipular string em Javascript de forma mais natural e facilitada.
 * Vamos ver como funciona
 */

// STRING COMO CONHECEMOS
console.log("string normal:\n");

const i = 2022 - 1996;
const n = "Douglas";

const str = "Quem fala: \n" + "Olá me chamo " + n + ".\nTenho " + i + " Anos de idade";

console.log(str);

// ------------------------------------------------
// TEMPLATE STRING

console.log("\n\nTemplate String:\n");

const idade = 2022 - 1996;
const nome = "Douglas A.";

// Em Template String nós abrimos com crase `` para abrir e fechar, só funciona com crase, nao funciona com aspas simples nem dupla

// para chamar variaveis nós nao precisamos fechar e por virgula ou sinal de concatenação (com +)
// nós podemos fazer DENTRO da string, chamando $ e abrindo chave = ${}
// e dentro das chaves, dentro desse bloco, podemos chamar a variavel e etc.
// um outro detalhe importante é que com templateString podemos simplesmente pular linha, e nao mais usar \n para isso
// podemos tambem chamar conteudo HTML e ele será renderizado na tela.
const templateString = `Quem fala:
Olá me chamo ${nome}.
Tenho ${idade} Anos de idade`;

console.log(templateString);