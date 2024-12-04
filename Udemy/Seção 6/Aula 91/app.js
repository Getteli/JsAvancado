/**
 * Sobre getters e settes
 * (get = pegar, set = armazenar)
 */
function produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;
    // privando o estoque
    let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque',{
        // informa que o atributo continua sendo exibido
        enumerable: true,
        // se pode apagar a CHAVE, alterar o nome da chave entre outras configurações
        configurable: false,
        get: function(){
            return estoquePrivado;
        },
        set: function(val)
        {
            if(typeof val != 'number')
            {
                console.log('o valor nao é permitido, precisa ser um numero inteiro');
                return;
            }
            estoquePrivado = val;
        },
    });
}

const p1 = new produto("jaqueta", 100);

console.log(p1.estoque.get());