/**
 * ForEach
 * Foreach diferente do for, esta apenas disponivel em arrays
 */
const exemplo = [1, 3, 67, {nome: "douglas"}, "Ola mundo"];

// foreach apenas itera sobre o array, voce pode fazer o que quiser dentro dele
// tambem possui o proprio array como 3° elemento
exemplo.forEach((element, i) => {
    console.log(element);
    console.log(i);
});