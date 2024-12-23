/**
 * POO
 * Criando classe
 */
class Pessoa {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    falar()
    {
        console.log("Falando \n");
    }
}

const p = new Pessoa("Duuglas", "araujo");
p.falar();