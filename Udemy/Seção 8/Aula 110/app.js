/**
 * Promisses (Promessas)
 * Async / await
 */
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
}

async function executar()
{
    const fase1 = await esperaAi("fase1", rand(1,3));
    console.log(fase1);
    const fase2 = await esperaAi("fase2", rand(1,3));
    console.log(fase2);
    const fase3 = await esperaAi("fase3", rand(1,3));
    console.log(fase3);
}

executar();