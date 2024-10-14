/**
 * Filter array
 * para filtrar um array.
 * O array possui metodos padroes, um deles é o filter, ele recebe uma função de callback onde 
 * vc pode iterar e retornar itens do seu array (msm quantidade ou menos, nunca adicao). Ele sempre retorna um booleano
 * True significa que o item q vc iterou naquele momento será armazenado no novo array.
 * obs: o filter nao altera o elemento, apenas filtra
 */
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// exemplo: os parametros desse callback sao fixos: (valor, indice_atual, array_completo)
const maior_10 = numeros.filter((value) => value >= 10);

console.log(maior_10);

const pessoas = [
    {nome: "Douglas", idade: 28},
    {nome: "Fernando", idade: 45},
    {nome: "Chiquinha", idade: 13},
    {nome: "Vanessa", idade: 34},
];

const pessoa_nome_grande = pessoas.filter((obj) => obj.nome.length > 7);

console.log(pessoa_nome_grande);