/**
 * Revisão do básico em Arrays
 */
// podemos deletar um item do array sem alterar o indice usando o delete
const nomes = ['douglas', 'alessandra', 'leticia'];
delete nomes[1]; // deletando a alessandra
console.log(nomes);
// quando usamos o rest (...) podemos usar para "espalhar" os valores do array em um novo

// para saber a qtd de itens no array: length (é um atributo nao metodo, portanto sem "()")

// o metodo pop() nao só exclui o ultimo item, como podemos colocar esse valor em uma variavel

// assim teremos o valor fora do array e ainda existente na variavel

// shift() remove o item do inicio

// adicionar um elemento ao final do array: push("valor")

// adicionar ao inicio do array, unshift("valor") - o problema é q ele vai reordenar os indices

// slice(1,3) - metodo para dividir o array, escolhemos o indice inicial (incluso) e o final (menos ele)

// o slice(1,-1) tambem pode ser usado para remover, usando no ultimo parametro a qtd a ser subtraida e o 
// inicio onde devemos retirar (do indice)

// converter uma string para array. pega a variavel e chamada um metodo. ex:
// variavel.split(" ") - separa a string por espaço vazio (pode ser qlq coisa)

// metodo join(" ") - junta um array separando os valores com espaço vazio (pode ser qlq coisa), em uma
// string