/**
 * Callback
 * Quando uma função é executada ao ser retornada de outra função
 */

function random(min = 1000, max = 3000)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) // <- cada uma delas vai executar um parametro chamado callback
{
    setTimeout(() => {
        console.log("F1");
        // se existir um callback executa ele, que é uma função
        if(callback) callback();
    }, random());
}

function f2(callback)
{
    setTimeout(() => {
        console.log("F2");
        if(callback) callback();
    }, random());
}

function f3(callback)
{
    setTimeout(() => {
        console.log("F3");
        if(callback) callback();
    }, random());
}

/**
 * Em uma aplicação online, nós nao temos controle de quanto tempo algo vai ser buscado fora de si (internet, banco  de dados)
 * e etc. Pois depende de coisas externas. Entao quando queremos executar algo de fora e depois executar
 * algo que dependa disso, temos o callback.
 * 
 */
f1(function(){
    f2(function(){
        f3(function(){
            console.log("Olá mundo por último!");
        });
    })
})