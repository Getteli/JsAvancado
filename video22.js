/**
 * Spread Operator é um: Operadores que separa de elementos (array, objeto ou etc.)
 * Ou seja: é como o ...args, porem ao contrario, em vez de parametros ser passado para o args, a gente passa um args para parametros
 * ele separa os valores e adicionar NA ORDEM em que os parametros estao na assinatura;
 * exemplo:
*/

// uma variavel, um array com valores inteiros
const parametros = [1, 2, 3];

// essa funcao recebe 3 numeros
function somarSeparando(num1, num2, num3)
{
    return num1 + num2 + num3;    
}

// podemos chamar a funcao, e passar como um ...args, a variavel do array. entao fica ...parametros
// console.log(somarSeparando(...parametros));

/**
 * O spread Operator pode ser usado de outras formas tambem.
 * podemos usar para juntar arrays, exemplo:
*/
// arrays que queremos juntar
listaum = [0, 1, 2];
listadois = [3, 4, 5];

// array que vai guardar todos os arrays
// antigamento, precisariamos usar o metodo concat do array, e se tivesse mais teriamos q ir juntando ou fazer um loop e etc.
// com o Spread, podemos simplesmente passar como ...args sendo um array, um ao lado do outro e ele vai juntar tudo como array no total.
listatotal = [...listaum, ...listadois];

// console.log(listatotal);

/**
 * Spread Operator em um objeto.
*/

// objeto com 3 atributos
const obj = {a: 1, b: 2, c:3};

const objCopy = {...obj};  // passa o objeto para outro, criando uma copia LIMPA. obs: poderia simplesmente passar outros objs como na junção dos arrays, ...obj1, ...obj2
const objAtrib = obj; // passa atribuindo o objeto para o outro. Ou seja, estou fazendo apenas uma referencia, como um ponteiro, Se eu manipular este, manipulo a origem tambem.

objAtrib.a = "m";

console.log(obj);
console.log(objCopy);
console.log(objAtrib);