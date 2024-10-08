/**
 * Constructor Function
 * Funções contrutoras (semelhante a factory function)
 */
// Por convenção a constructor utiliza por padrao uma forma de iniciar o seu objeto/classe
// com letra maiuscula.
// exemplo: 
// Factory: criaPessoa
// Constructor: CriaPessoa (ou simplesmente Pessoa)
// obs: na constructor é uma ideia muito mais de classe como a conhecemos com POO, começando com new e etc

function Pessoa(name,lastName)
{
    // podemos usar const/let para fazer atributos privados

    // usando o this seria nossos atributos publicos
    this.name = name;
    this.lastName = lastName;

    this.fullName = () => {
        return this.name + ' ' + this.lastName;
    }
}

const people = new Pessoa("Douglas","Araujo");

console.log(people.fullName());