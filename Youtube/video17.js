/**
 * Try catch é como ja sabemos. Tratamento de erro
 * Um bloco (try) fará o codigo que esperamos, ele vai "tentar" (por isso o nome), e o catch é de capturar
 * Ele vai capturar o erro que ocorreu na tentativa.
 * obs: assim como no promise, temos tambem o finally, ele smp sera executado.
 */

const main = () =>
{
    // codigo de tentativa
    try
    {
        codigo;
    }
    // captura o que possa sair do esperado
    catch (error)
    {
        console.error("ocorreu um erro: veja: ", error);
    }
    finally
    {
        console.info("main foi executado e eu vou aparecer, independente do try ou catch");
    }
};

main();