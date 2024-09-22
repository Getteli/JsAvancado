/** 
 * try catch aninhado, é como o niveis, no 18. Porem a diferença é q nao é separado um em cada canto, mas sim um dentro d o outro fisicamente. Não é legivel, fica de dificil entendimento e tratamento e não é indicado, mas é possivel.
*/

const main = () =>
{
    // try pai
    try
    {
        // try filho
        try
        {
            // try neto
            try
            {
                // try bisneto
                try
                {
                    throw('Oiii moçu... deu erro');
                }
                catch (error)
                {
                    throw error;
                }
            }
            catch (error)
            {
                console.log(error);
                throw 'ops2';
            }
        }
        catch (error)
        {
            console.log(error);
            throw 'ops';
        }
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