/**
 * mais alguns exemplos de recursão
 */

function contagemRegressiva(numero)
{
    if (numero == 0)
    {
        return console.log("Feliz ano novo!!");
    }

    console.log(numero);

    setTimeout(() => {
        return contagemRegressiva(numero - 1);
    }, 1000);
}

contagemRegressiva(10);