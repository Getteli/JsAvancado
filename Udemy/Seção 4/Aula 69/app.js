/**
 * Parametrização (assinatura) de funções
 */
function params(teste)
{
    console.log("funcao sem parametros");    
    console.log(teste);    
    console.log(arguments[0]);    
    console.log(arguments);    
}
params("valor", 1,2,3,4,5);

/**
 * No JS mesmo se eu nao declarar os parametros na assinatura da função, eu posso passar parametros.
 * POREM ISSO APENAS FUNCIONA quando é uma função declarada (usando a palavra reservada `function` no inicio)
 * assim eu posso usar o `arguments` q é um array que uma function herda.
 * O javascript me permite usar o arguments para pegar qualquer parametro mesmo se nao foi declarado
 * OU se foi declarado tambem.
 */
/**
 * Se voce definir um parametro e nao preencher, ele vai auto-preencher como undefined
 * para evitar isso, de um valor padrao para o parametro
 */
function noValue(par1, par2 = 0) // <- valor padrao
{
    console.log(par1, par2); 
}
noValue("tem");

/**
 * Quando quisermos preencher uma variavel pulando outra, o javascript nao permite deixa-lo sem
 * Para isso, será necessário desestruturar a assinatura da função
 * (basicamente transformar em um objeto)
 */
function noValue2({par1, par2 = 0, par3 = 0})
{
    console.log(par1, par2, par3); 
}
// agora ao chamar, podemos colocar como um objeto nos parametros, passando as {} e colocar os nomes dos parametros
// para dar o valor que quisermos
noValue2({par1:10, par3:"teste"});

// OBS: PODEMOS FAZER COMO ARRAY TAMBEM, NA ASSINATURA E NA CHAMADA. POREM COMO ARRAY NA CHAMADA
// fica assim: noValue2([par1=10, par3="teste"]);

/**
 * Quando queremos declarar alguns parametros e os outros que sejam de tamanho indefinido
 * podemos usa-lo como um resto (rest operator) e se comportará como um array
 */
function conta(operador, acumulador, ...numeros) // <- os 3 pontos indicam q é o resto
{
    console.log(operador, acumulador, numeros);
}
// depois dos 2 parametros declarados, qualquer coisa que vier depois entrará como resto e
// será um valor dentro do parametro numeros
let acu = 0;
conta('+', acu, 1,2,3,4,5);