/**
 * Neste exemplo, no video 11, nós pegamos as classes que criamos no video 7 e transformamos em objetos (no caso ja era, mas deixamos mais objeto sem a sintaxe sugar de que parece uma classe)
 * E definimos a "herança" como vimos no video 10 com prototype
*/

const Dev = function(nome, idade, principalLinguagem)
{
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.getNome = function()
    {
        return this.nome;
    };
}

const FrontEnd = function(nome, idade, principalLinguagem, frameWork)
{
    // definimos um nova constante dentro do objeto, e chamamos o objeto Dev
    const NewDev = new Dev(nome, idade, principalLinguagem);
    NewDev.frameWork = frameWork;
    this.saudacao = function()
    {
        console.log(`Olá! me chamo ${this.nome} e tenho ${this.idade}, eu programo no FrontEnd em ${this.principalLinguagem} e uso o FrameWork ${this.frameWork}`);
    }
    // usando o Object para setar o prototype
    Object.setPrototypeOf(this, NewDev);
}

const devfront = new FrontEnd("Pedro", 35, "Javascript", "Vue.js");

console.log(devfront.saudacao());