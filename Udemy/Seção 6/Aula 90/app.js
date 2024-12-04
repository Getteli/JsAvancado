/**
 * Metodos padrão do object
 *          um                          varios
 * Object.defineProperty() e Object.defineProperties()
 * Metodos usados para travar privar
 */

function produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;
    // privando o estoque
    Object.defineProperty(this,'estoque',{
        // o valor que deseja guardar
        value: estoque,
        // informa que o atributo continua sendo exibido
        enumerable: true,
        // se o VALOR pode ser editado
        writable: false,
        // se pode apagar a CHAVE, alterar o nome da chave entre outras configurações
        configurable: false,
    });

    // privando varios
    Object.defineProperties(this,{
        nome: {
            // o valor que deseja guardar
            value: nome,
            // informa que o atributo continua sendo exibido
            enumerable: true,
            // se o VALOR pode ser editado
            writable: false,
            // se pode apagar a CHAVE, alterar o nome da chave entre outras configurações
            configurable: false,
        },
        // e por ai vai...
    });
}

const p1 = new produto("jaqueta", 100, 200);

console.log(p1.nome);