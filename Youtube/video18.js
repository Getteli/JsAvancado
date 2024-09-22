/**
 * Try catch pode ser trabalhdo em niveis, ou seja um try dentro de outro. E assim podendo dividir o que precisa ser tratado por partes
 * alem de poder retornar o erro para niveis a cima.
 */

// Exemplo, essa funcao tem um try
const funcao1 = () =>
{
    console.log('sou a funcao 1\n');
    try {
        // se simplesmenter der erro, no try aqui, e nao tiver retornando o throw para o nivel a cima, ele vai tratar aqui, e vai exibir tanto o erro aqui, quanto o erro no nivel a cima (sem passar o desse para lá)
        // ou seja, seram 2 erros na tela.  
        codigo;
    } catch (error) {
        console.log(error);
        // essas sao as 3 formas de se lançar um erro: as 3 funcionam
        throw 'ops';
        throw('ops');
        throw new Error('ops');
    }
};

// e essa outra funcao recebe a funcao1 dentro do seu try
const main = () =>
{
    // codigo de tentativa
    try
    {
        funcao1(); // se der erro la em cima, e for tratado lá, ele ira para o catch abaixo
    }
    // captura o que possa sair do esperado
    catch (error)
    {
        console.error("\nocorreu um erro: veja: ", error);
    }
    finally
    {
        console.info("\nmain foi executado e eu vou aparecer, independente do try ou catch");
    }
};

main();