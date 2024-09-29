/**
 * Factory Function
 * Uma factory function em JavaScript é uma função que cria e retorna um novo objeto.
 */
function createPeople(name, lastName, p)
{
    return {
        name, // aqui só chamamos o parametro direto pois ela terá o mesmo nome do atributo
        lastName,
        peso: p, // aqui dei o exemplo de parametro com um nome (p) e atributo com outro nome (peso), entao atribuimos o parametro ao atributo
        fala: function (assunto)
        {
            // o uso de this, é quando queremos chamar algo referente a algo daquele escopo em que estamos
            return `${this.name} está falando sobre ${assunto}.`;
        },
        // podemos transformar uma funcao como atributo, usando o getter
        get imc(){
            return `${this.peso} falta a altura e tem o imc`;
        },
        // para setar um valor a um atributo, via function, chamamos o setter
        set nomeCompleto(nome){
            let nomes = nome.split(' ');

            this.name = nomes[0];
            this.lastName = nomes[1];
        },
    };
}

const p1 = createPeople("Douglas", "Araujo", 90);

console.log(p1);
// altera via metodo set
p1.nomeCompleto = "Fulana Silva";
console.log(p1.name);
console.log(p1.peso);
console.log(p1.imc);
console.log(p1.fala("Video games"));