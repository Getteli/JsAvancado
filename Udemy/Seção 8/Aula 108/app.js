/**
 * Promisses (Promessas)
 * Para voce enviar coisas ao back e manter uma ordem de execução de coisas
 * que se precisa executar na ordem.
 * -- código assincrono --
 */

// sem tratamento
function rand(min, max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, temp)
{
    // com promisse     // se ok, se nao
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, temp);
    });

    // antes
    // setTimeout(() => {
    //     console.log(msg);
    // }, temp);
}

// antes
esperaAi("Executando 1", rand(1, 3)).then((res) =>
{
    console.log(res);
    return esperaAi("Executando 2", rand(1, 3));
}).then((res) =>
{
    console.log(res);
    return esperaAi("Executando 3", rand(1, 3)); 
}).then((res) =>
{
    console.log(res);
});