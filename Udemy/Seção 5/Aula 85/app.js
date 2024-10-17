/**
 * map array
 * diferente do filter que só filtra, o map vai mapear para ADICIONAR algo! (e cria um novo array se quiser)
 * voce pode alterar o proprio array tambem ao adicionar algo, msm enviando a uma nova variavel, pois ao usar o map vc estsa fazendo uma referencia
 */
// exemplo dobrar os valores array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const dobro = numeros.map((v) => v * 2);

console.log(numeros); // se mantem
console.log(dobro); // array novo com valores alterados

// retorna a string do nome da pessoa
const pessoa = [
    {name: 'Pessoa', idade: 30},
    {name: 'Jurandir', idade: 35},
    {name: 'Fernando', idade: 34},
    {name: 'Jucelino', idade: 13},
]

// const nomes = pessoa.map(pessoa => pessoa.name);
pessoa.map((pessoa, i) => (pessoa.id = i));

console.log(pessoa);