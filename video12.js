/**
 * Uma promise é um tipo de função do javascript que retorna 2 tipos de resultados (ou deu tudo certo = resolve OU deu tudo errado = reject)
 * e depois podemos verificar esse resultado e "capturar" tanto o que foi resolvido, quanto o erro. Um tratamento de resultados.
 * É como fazer uma promessa, e essa promessa será cumprida independente do resultado.
 */
// aqui criamos a promisse e guardamos na constante
const umaPromessa = new Promise((resolve, reject) =>
{
    let soma = 1 + 3;
    if (soma === 4)
    {
        resolve("tudo certo");
    }
    else
    {
        reject("deu ruim");
    }
});

console.log("esperando promise...");

/**
 * Agora para pegarmos esse resultado, nós chamamos a constante e usamos 3 tipos de funções uma chamando a outra:
 * then().catch().finally()
 * then() = Quando o resultado é o esperado (pelo menos do seu retorno ser um 202 ou 200 (quando online por ex))
 * catch() = Quando o resultado é "inesperado" (entre aspas ja q esperamos por isso o tratamos), é quando ocorre o erro
 * finally() = Independente do resultado (Se for then ou catch) ele será executado, como uma forma de "fechar" essa promise
 */
umaPromessa.then((result) =>
{
    console.log(`O valor deu: ${result}`);
}).catch((err) =>
{
    console.error(`Ops, ocorreu um erro: ${err}`);
}).finally(() =>
{
    console.log("independente do resultado, se for then OU catch, eu vou cair aqui.");
});

// obs: a linguagem javascript é "lida" constantemente enquanto houver codigos asyncronos ou outros tipos.
// promise é um desses tipos. O que significa que, o código vai rodar inteiro, capturar o resultado pela constante da promise, mas só vai entrar no resultado no 2° loop, CASO TENHA OUTRO CODIGO APOS a chamada da promise. Se tiver pelo menos 1 console.log depois, ele vai exibir 1° e no segundo loop vai entrar no resultado da promise.