// nós devemos parar de usar var e começar a usar apenas LET E CONST
/**
 * o VAR ele é uma declaração que faz o conteudo da sua variavel ficar exposto fora da função ou bloco onde se foi declarado. exemplo:
*/
if (true)
{
    var exposta = "Eu estou exposta";
    let naoExposta = "Nao consegue me acessar fora";
}
// console.log(exposta, naoExposta);
// ao tentar executar o log acima, verá que dará erro. O próprio JS ja diz, o naoExposta ou não é encontrado, ou informa que: ele foi declaro mas seu valor não pode ser lido.
console.log(exposta);
// agora se executar este outro log, ele funciona, mas apenas o VAR é exposto e conseguimos acessar fora do bloco (risco de segurança)

// agora vamos entender o por que:
/**
 * CONST = CONSTANTE
 * portanto, nao pode ser mudado, é um valor constante.
 * mas lembre-se manipular é diferente de alterar. Então por exemplos
 */
const variavel = "sou uma constante";
console.log(variavel);
// variavel = "posso mudar?"; // <- ele dará erro por tentar fazer isso
// console.log(variavel); 
// pois como falamos, uma constante nao pode mudar.
// mas caso queira manipular por exemplo: um objeto armazenado em constante, ou um array (adicionar, remover e etc)
// então pode. pois tecnicamente vc nao esta alterando o seu conteudo, mas manipulando.

/**
 * LET se parece com variável, mas ela se mantém apenas naquele bloco, sem ficar exposta, ótimo para segurança
 */
let variavel_let = "sou uma let";
console.log(variavel_let);
variavel_let = "posso alterar sem problemas";
console.log(variavel_let);
// como podemos ver, alteramos sem problemas o seu conteudo. Pois ela se comporta como uma variavel mas com segurança
/**
 * Se quisermos uma variavel que possa ser usada fora do bloco ?
 * podemos usar var (apenas nao é aconselhavel), mas se o conteudo dela não for importante que nao possa ser vazado, não tem problema.
 * Ou podemos usar variaveis GLOBAIS
 */