/**
 * Destructuring (Desestruturação) - é a forma de desestruturar algo (um objeto, um array ou etc) em partes, variaveis, diferentes.
 * Entao se temos um objeto com 2 propriedades, essa desestruturação fará esse objeto ser separado em 2 variaveis um para cada propriedade, recebendo apenas o seu VALOR.
*/

// Exemplo com array
const numerosString = ["Sete", "vinte", "8"]; // <- um array comum, com valores
const [num1, num2, num3] = numerosString; // <- aqui ocorre o desestructuring, um array do lado esquerdo, tem variaveis vazias mas com [] como se fosse um array. do lado direito o array criado acima. A desestruturação ocorre quando os valores do array do lado direito, vai ser inseridos na ordem, de cada variavel do lado esquerdo. 
// console.log(num1, num2, num3); // <- log para exibir CADA uma das variaveis do lado esquerdo citado a cima.

// podemos fazer declarando as variaveis separadas, mas na desestruturação tem q estar com []
// valor DEFAULT:
let a, b;
// aqui estamos dizendo que, A vai receber o valor padrao 5 caso nao tenha um valor no array numerosString.
[a = 5, b = 4] = numerosString;
// console.log(a);

// Permutação
// nos cursos, no inicio, a pessoa aprende a fazer a permutação de valor, se cria uma variavel temporaria pra armazenar um valor, depois faz a troca. assim:
let d = 5;
let e = 4;
let temp = null;
temp = d;
d = e;
e = temp;
// console.log(d, e);

// Mas com o desestructuring, temos uma forma mais simples, com 1 linha
[d, e] = [e, d]; // <- simples assim.

/**
 * Destructuring com Objetos.
*/
// criamos o objeto de exemplo
const objetoE = {p: 40, q: true};
// e então a desestructuring, a diferença é que usamos conchetes, no array usavamos as chaves.
const {p, q} = objetoE; // <- então mandamos pelo lado direito o objeto.
// OBSERVAÇÃO IMPORTANTE: A VARIAVEL ATRIBUIDA, PRECISA TER O MESMO NOME DA PROPRIEDADE DO OBJETO !!!!!!!!!
console.log(p);
// se quisermos dar um nome diferente, podemos fazer assim:
// const {p: numero, q: binario} = objetoE;
// console.log(binario);

// se for fazer desestructuring de objeto chamando direto na hora, precisa estar entre paresentes, para o ECMA nao achar que é um bloco de codigo, ex:
({var1, var2} = {var1: 9, var2: true});

console.log(var2);

/**
 * Destructuring no parametro.
 * Podemos fazer a destruturação direto no parametro, exemplo com obj:
 */
// fazendo a destruturação e pegando apenas o id do objeto
function userId({id})
{
    return id;
}

const user =
{
    id: 3,
    displayName: 'getteli',
    fullName: {
        first: "Douglas",
        last: "Araujo",
    },
};

console.log(userId(user));