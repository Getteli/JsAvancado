/**
 * o callback era usado antigamente também de uma forma como o promise.
 * Hoje com o promise fica mais facil de manipular, legivel e tratavel.
 * E uma forma interessante. Nós podemos usar then encadeado. Um then apos o outro. vejamos:
 */

const Promesa = new Promise((resolve, reject) =>
{
    if (true == 1)
    {
        resolve({
            status: 202,
            msg: "tudo ok",
        });
    }
    else
    {
        reject({
            status: 404,
            msg: "fudeu",
        });
    }
});

Promesa.then((res) =>
{
    return {status: res.status};
}).then((res) =>
{
    if (res.status == 202)
    {
        console.log("boa garoto");
    }
})
.catch((err) =>
{
    console.log("IIIR... ",err);
});