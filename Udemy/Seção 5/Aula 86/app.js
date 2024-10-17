/**
 * Reduce
 * Serve para reduzir o array a um unico elemento
 * uma funcao para arrays para reduzir e tambem as msm coisas do map e filter usando o reduce (mas nao é o ideal)
 * a diferença em sua funcao é que ele possui um primeiro parametro especifico, q serve para acumular
 * e depois a funcao, do callback, podemos dar um valor inicial para esse acumulador (opcional)
 */
// exemplo 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// obs: precisa usar como function, a arrow nao vai funcionar pois PRECISAMOS SEMPRE
// RETORNAR UM VALOR PARA O PROXIMO ACUMULADOR
const total = numeros.reduce(function(acumulate, value, i){
    // o total dos valores de numeros
    acumulate += value;
    return acumulate;
});
console.log(total);

// podes retornar um array (ja q é um unico elemento se for parar pra pensar)
const somente_par = numeros.reduce(function(ac, valor, i){
    if(valor % 2 === 0) ac.push(valor);
    return ac;
}, []); // <- iniciei como um array vazio

console.log(somente_par);

// fazer igual o map

const dobro = numeros.reduce(function(ac, valor, i){
    ac.push(valor * 2);
    return ac;
}, []); // <- iniciei como um array vazio

console.log(dobro);