/**
 * Objeto imutavel - objeto (tanto objeto como array) que nao pode ser mudado, mas ainda sim podemos manipular suas propriedades entre outros.
 * Exemplos de metodos :
 */
    // criamos um obj vazio
    const obj1 = {};
    // adicionamos uma propriedade
    obj1.a = "propriedade";

    // Este metodo da classe Object, previne qualquer extensão que seja feito para o objeto passado, ou seja CRIAR, ADICIONAR EXTENDER O QUE JA EXISTE. nao pode
    Object.preventExtensions(obj1);

    // obs: este metodo ainda permite: deletar e mudar o valor, do que ja existe.

    // depois q ele foi protegido, eu tento mudar
    obj1.b = "novo";

    // console.log(obj1.b); // <- o log é undefined

// ------------------------------------------------------------------------------------------

    // OBS: sobre o freeze, se o objeto alvo, tiver um array dentro, ele nao é afetado pelo freeze, entao falamos que o freeze é um congelamento raso. Para fazer o congelamento profundo precisamos criar uma função *
    // DEEP FREEZE - CONGELAMENTO PROFUNDO tem no mozila doc, é perigoso pos pode passar um objeto q nao deveria ficar congelado, como o window por ex.

    const obj2 = {};
    // adicionamos uma propriedade
    obj2.a = "propriedade";

    // Este metodo da classe Object congela o objeto. Ou seja, nao podemos alterar, deletar nem adicionar. O objeo se torna apenas para leitura.
    Object.freeze(obj2);

    // obs: este metodo ainda permite: deletar e mudar o valor, do que ja existe.

    // depois q ele foi protegido, eu tento mudar
    obj2.a = "mudeeeeii";
    delete obj2.a;
    obj2.b = "novo";

    // console.log(obj2);

// ------------------------------------------------------------------------------------------

    const obj3 = {};
    // adicionamos uma propriedade
    obj3.a = "propriedade";

    // Este metodo da classe Object seal (como se a gente pegasse o objeto e ele fosse selado, pique naruto) impede de adicionar uma nova propriedade e de deletar. Mas ainda é possivel alterar o que ja existe.
    Object.seal(obj3);

    // obs: este metodo ainda permite: deletar e mudar o valor, do que ja existe.

    // depois q ele foi protegido, eu tento mudar
    obj3.a = "mudeeeeii";
    delete obj3.a;
    obj3.b = "novo";

    // console.log(obj3);