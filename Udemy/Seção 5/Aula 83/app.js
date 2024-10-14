/**
 * Concatenando arrays
 * quando se cria um array ele possui metodos implicitos. Um desses é o concat(array)
 */
const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7];
// usando o metodo concat
const a3 = a1.concat(a2);
console.log(a3);

// usando o rest podemos espalhar os arrays em um array e ainda pode adicionar valores avulso
const a4 = [...a1, 'mais um' ,...a2];
console.log(a4);