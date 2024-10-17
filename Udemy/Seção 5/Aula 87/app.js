/**
 * Reduce + map + filter
 * vamos fazer um exemplo juntando os 3 em um exercicio
 */
// retornar a soma do dobro de todos os pares
const numeros = [50, 10, 1, 5, 3, 7, 8, 11, 12, 35, 30, 80, 4];

// usando apenas o reduce
const ex = numeros.reduce(function (ac, v, i)
{
    if(v % 2 === 0) ac += v * 2;
    return ac;
}, 0);

console.log(ex);

// usando os 3 concatenando
const ex2  = numeros.filter((v) => v % 2 === 0)
.map((v) => v * 2)
.reduce((ac, v) => ac += v);

console.log(ex2);