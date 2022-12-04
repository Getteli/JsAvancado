/**
 * Como nós usamos classes em javascript ?
 * primeiro a verdade é que... NÃO EXISTE CLASSE EM JAVASCRIPT. O que temos é algo implementado na nova versão 6 do ECMAScript, um abstração de objetos de javascript de forma que se comporte e pareça com classe.
 * Então podemos utilizar, pórem é um objeto de javascript.
 */
// sua chamada é igual ao de outras liguagens classicas. Ex:
// classe de pessoa
class Carro
{
    // no ECMA6, temos agora a forma de fazer propriedades privadas, ela é declarada assim, sem ser com let ou const ou var. apenas com o #, como sabemos de POO
    #propriedadePrivada = "valor"; // <- ao chamar, chamamos tambem com o #


    // ela tambem tem a possiblidade de metodo constructor
    constructor(nome, ano)
    {
        // atribuindo os atributos ao carro
        this.nome = nome;
        this.ano = ano;
    }
}

// instanciando essa classe de carro
const carro1 = new Carro("Peugeot",2008);
const carro2 = new Carro("Audi", 2004);
const carro3 = new Carro("Mazda", 2020);

// vamos exibir e manipular
console.log(carro1, carro2);
console.log(carro3.nome);

// podemos adicionar metodos e etc, e manipular.