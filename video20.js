/**
 * Arguments - é um objeto, que usamos para usar como array, onde ele vai receber parametros que nao estao definidos na assinatura da funcao
 */

function somarVariosNumeros()
{
    let result = 0;
    // arguments é um objeto, entao qualquer tipo de metodo que se usa objeto, pode ser usado. Como for of.
    // OU podemos converter o arguments em um array. usando o Array.from() e trabalhar como um array.
    for(const num of arguments)
    {
        result += num;
    };

    return result;
}

// ou podemos tbm, criar um array dentro do parametro ao chamar a funcao, com [], e passar um parametro na funcao, q sera um array nativo tbm.
console.log( somarVariosNumeros(1,2,3) );