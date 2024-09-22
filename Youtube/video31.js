/**
 * get = pegar
 * set = setar
 * é como ja sabemos, sobre as funcoes pegar e adicionar um valor a uma propriedade de um objeto/classe
 * em javascript é parecido porem, usamos palavras chaves de get e set E esses metodos vao se comportar como propriedade, ate mesmo na chamada desses metodos, pode-se ter o mesmo nome ! e a forma de ser usado determina qual ele vai chamar.
 * quando o ECMA chama, é quase como uma sobrecarga (overload)
 * Vejamos:
 */
const ListaObj =
{
    lista: ["primeiro", "segundo", "terceiro"],
    
    // metodos get e set
    get primeiraString()
    {
        return this.lista.length ? this.lista[0] : null;
    },
    set primeiraString(valor)
    {
        this.lista.unshift(valor); // <- ele adiciona um novo, mas o unshift nao exclui o primeiro, apenas empurra o antigo 1° para o tras...
    },
};

// console.log(ListaObj.primeiraString); // <- chama metodo set
// ListaObj.primeiraString = "Novo 1°"; // <- set um novo valor no 1° item
// console.log(ListaObj.primeiraString); // <- chama novamente o metodo get, para conferir a atribuição do set
// console.log(ListaObj.lista);

// ---------------- DEFINEPROPERTY
// esse metodo da classe objeto, ele como o nome diz, define uma propeidade, e uma propeidade basica tem: nome, metodo get e metodo set.
Object.defineProperty(ListaObj, "prop",
{
    get()
    {
        // neste exemplo estamos retornando pelo this (pegando do escopo do objeto) a propriedade q ja existe. mas podemos mudar e fazer o que desejar.
        return this.lista;
    },
    set(valor)
    {
        this.lista.unshift(valor);
    }
});

// console.log(ListaObj.prop);

// ------------ Proriedade computada
// cria durante a execução, por isso o nome se chama computada, metodos de get/set com o nome que passamos numa string declarada fora do obj.

const string = "nomePropiedade";

const Objeto1 = 
{
    get [string]()
    {
        return "algum valor";
    },
    set [string](novoValor)
    {
        console.log('adicionado: ', novoValor)
    }
}

console.log(Objeto1.nomePropiedade);

/**
 * obs: tambem podemos criar metodos estaticos como no php, e fazer ate no get e set como estatico
 * obs: se quisermos usar alguma propriedade usando um metodo statico, a propriedade tambem precisa estar com static no inicio
 * assim: static #propriedade
 * e os metodos sao:
 * static get()
 * {
 * }
 * e ao chamar, nao precisa instanciar o objeto, apenas
 * Objeto.get
 */