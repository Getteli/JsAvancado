/**
 * CALLBACK 
 * é uma função que é passada a outra função como um argumento.
 * então é invocado dentro dela (a função a qual ela foi passada), e é executada, para completar algo, retornar algo.
 */
// arrow function
// const saudacao = (nome) => console.log("Olá "+ nome);

// agora a outra função
// obs: o nome callback aqui é apenas o nome do parametro, ele esta recebendo a funcao
// const processaEntradaUsuario = (callback) =>
// {
//     const nome = "Douglas"; // <- pode ser uma entrada de dado aqui
//     // entao chamamos a funcao q agora é callback (o parametro) e executamos para ela retornar
//     return callback(nome);
// }
// chamamos a função e estamos passando a função como um parametro
// processaEntradaUsuario(saudacao);

// um exemplo diario
// funcao expressa, o "e" é o parametro
// const callback = e => alert('aconteceu um evento: ' + e.type);
// quando usamos o eventListener nos navegadores, e passamos a funcao que será executada, neste caso é interessante nortarmos que, o this do eventListener, esta sendo passado implicitamente para a função como callback
// window.addEventListener('click', callback);


// Mais um exemplo
// uma conta simples
// funcao expressa que faz a soma de 2 variaveis
const somar = (x,y) => x + y;
// o metodo que vai receber os parametros e fazer o callback do metodo de soma ou etc
const calcular = (x,y,computar) => computar(x,y);
// chamamos o calculoar, passamos os 2 parametros e o metodo que desejamos que seja feito (pode ser soma, subtrair e etc)
// entao guardamos o valor
let resultado = calcular(20, 30, somar);
console.log(resultado);

// percebemos então que, o callback ele existe em diversos lugares do javascript, deste sempre, apenas nao sabiamos do nome.
// exemplo disso são as FUNÇÃO DE PRIMEIRA CLASSE, como as map, reduce, push...
// Funções que recebem como parametro outras funções ou sendo retornada como funções
// exemplo:
// um array com valores inteiro
const arr = [1, 2, 3, 4, 5];

// vamos adicionar em um novo array, o resultado do array antigo
// o array será mapeado (vms passar em cada um dos elementos), e pra cada elemento vms somar a ele msm
const newArr = arr.map(x => x + x);

console.log(newArr);