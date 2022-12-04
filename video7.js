/**
 * Herança em javascript, é a partir da ES6.
 * Com a possibilidade de criar objetos que são classes, podemos criar tanto classes quanto o seu conceito de heranças.
 * Para isso Podemos construir como em outras linguagens, classe pai e construtor, filhos e construtor
 * e usar o extends Pai, na classe filha
 * POREM AGORA VEM A DIFERENÇA: nas classes filhas, no construtor, a primeira coisa que deve ser chamada é um metodo chamado SUPER();
 * super(); = metodo que vai "chamar o construtor" da classe pai, ela vai ser a responsável por instanciar digamos assim, a classe pai nos filhos e fazer essa ligação.
 * obs: como o super é o construtor do pai, podemos passar as variaveis q a gente chama no pai. Ou podemos simplesmente chamar a variavel novamente no filho, mas nao é pratico ja q pra isso existe herança.
*/

/**
 * classe pai
 */
class Dev
{
    constructor(nome, idade, principalLinguagem)
    {
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    }

    getNome()
    {
        return this.nome;
    }
}

/**
 * classe FrontEnd - Filho
 */
class FrontEnd extends Dev
{
    constructor(nome, idade, principalLinguagem, frameWork)
    {
        // chama o construtor do pai como o metodo super() e passa as variaveis que o construtor do pai usa para instanciar no objeto this.
        super(nome, idade, principalLinguagem);
        this.frameWork = frameWork;
    }

    saudacao()
    {
        console.log(`Olá! me chamo ${this.nome} e tenho ${this.idade}, eu programo no FrontEnd em ${this.principalLinguagem} e uso o FrameWork ${this.frameWork}`);
    }
}

/**
 * classe BackEnd - Filho
 */
class BackEnd extends Dev
{
    constructor(nome, idade, principalLinguagem, bancoDeDados)
    {
        // chama o construtor do pai como o metodo super() e passa as variaveis que o construtor do pai usa para instanciar no objeto this.
        super(nome, idade, principalLinguagem);
        this.bancoDeDados = bancoDeDados;
    }

    saudacao()
    {
        console.log(`Olá! me chamo ${this.nome} e tenho ${this.idade}, eu programo BackEnd em ${this.principalLinguagem}`);
    }
}


const dev1 = new FrontEnd("Marcelo", 20, "Javascript", "Vue.js");
const dev2 = new BackEnd("Douglas", 26, "C#", "SQLServer");

console.log(dev1.saudacao());
console.log(dev1.getNome());

console.log(dev2.saudacao());