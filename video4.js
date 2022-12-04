/**
 * For/of é uma forma de manipular um loop vindo de um array ou objeto. uma forma mais simples que um for comum, e se parece bastante com um while, mas em vez dele fazer algo até (e vc ter q explicar), ele simplesmente esta fazendo esse loop enquanto existir conteudo ou index no objeto ou array.
 */
// sua sintaxe é
// for (let (ou const) pequeno of objetoOuArray)
// {}

// um exemplo de um array
const listaDeEstados = ["RJ", "SP", "MG"];

// podemos declarar essa variavel let do lado de fora, mas é mais simples e comodo dentro do for, ja q ele é usado apenas aqui
for (let estado of listaDeEstados)
{
    console.log(estado + " é um estado Brasileiro");
}

// um exemplo que podemos fazer percorrendo uma cadeia de string (já que o computador interpreta uma string como um array de cada letra)

const nome = "Douglas Araujo Silva";

for (let letra of nome)
{
    // estamos exibindo cada letra do nome, chamando a funcao (interna de uma string) para deixar a letra maiuscula
    console.log(letra.toUpperCase());
}