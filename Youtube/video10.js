/**
 * Prototype = é uma forma parecida de se trabalhar com herança nas "classes" (como falamos javascript nao tem classe)
 * Isso é possivel (se utilizar de prototype) pois Javascript é uma linguagem Orientada a Prototipo. E não Orientada a objetos
 * Por isso nao existe classe nativa, mas sim uma forma de objeto se utlizando de sintaxe sugar
 * vamos ver mais sobre.
 */

// um objeto normal
const animal = {
    som: "um som de animal",
    tipo: "Animal",
    emitirSom: function()
    {
        console.log(this.som);
    },
}

// um outro objeto, independete
const gato = {
    tipo: "Gato",
    som: "miaau",
}

// definir o prototipo de (objeto que alvo, objeto que vai ser "herdado")
// ou seja pegamos o objeto GATO e definimos que ele É/PERTENCE/HERDA o prototipo ANIMAL
Object.setPrototypeOf(gato, animal);

/**
 * com isto, todo e qualquer atributo, metodo de animal, agora pode ser chamado por gato
 * MAS obs: qualquer coisa que tiver em gato e for igual (msm nome de atributo seja atributo normal ou metodo expresso) ele será sobreescrito. O PAI TEM PRIORIDADE
 * exemplos:
 */
// gato não possui esse metodo, ele foi buscar no prototipo de animal
gato.emitirSom();
// ao buscar o tipo (nome de atributo), ele achou 1° no gato entao nao foi buscar no prototipo do pai.
console.log(gato.tipo);

// outro objeto independete
const gatoComRaiva = {
    tipo: "Gato com Raiva",
    miarForte: function()
    {
        console.log(this.som.toUpperCase());
    }
}
// definimos que o objeto chamado gatoComRaiva vem do prototipo de gato (e como ja fizemos a cima, gato vem de animal)
Object.setPrototypeOf(gatoComRaiva, gato);
// portanto qualquer coisa que buscamos de gatoComRaiva, ele busca primeiro nele, nao achou ? vai no gato, nao achou ? vai em animal.
gatoComRaiva.miarForte();