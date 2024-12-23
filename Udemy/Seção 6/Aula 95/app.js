/**
 * Herança
 */

// venda de produtos -> metodos = aumento e desconto
// camiseta = cor
// caneca   = material

// metodo padrao para produto
function Produto(name, preco){
    this.name = name;
    this.preco = preco;
}

Produto.prototype.aumento = (quantia) => { this.preco += quantia};
Produto.prototype.desconto = (quantia) => { this.preco -= quantia};

// construtora para camiseta
function Camiseta(name, preco, cor)
{
    Produto.call(this, name, preco);    
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

let camiseta = new Camiseta("Polo", 100, "preta");

console.log("camiseta");