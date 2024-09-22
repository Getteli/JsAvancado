/**
 * Rest parameters, é parecido com o Arguments
 * A diferença:
 * - Arguments: Objeto que se parece com array.
 * - Rest Parameters: Junta os parametros que estao sendo passados em um Array.
 */

// exemplo anterior
function somarVariosNumerosV1()
{
    let result = 0;
    for(const num of arguments)
    {
        result += num;
    };
    return result;
}

// Rest Parameters
// OBS: Sobre o Rest Parameters: só pode existir um por parametro de função, E PRECISA SER O ULTIMO. pode ter junto parametros normais, no inicio, sem problema.
function somarVariosNumerosV2(...args)
{
    return args.reduce((soma, vatual) => soma += vatual);
}

console.log( somarVariosNumerosV2(1,2,3) );