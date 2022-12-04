/**
 * Parametros com valores predefinidos
 * é simplesmente vc setar um valor default para o parametro
 */

// ex:
// o parametro a terá o valor 1, se, ao chamar nao passarmos um valor para ele
function name(a = 1){
    // antigamente faziamos uma verificacao dentro da funcao para saber se o parametro foi recebido, com um if, ou terciario, e definindo um valor padrao. agora não precisa mais disso. apenas o variavel = valor, na assinatura.
}

/**
 * obs:
 * A variavel no parametro, só vai usar o valor padrão em 2 casos:
 * - a não inserção de variavel na chamada da função ()
 * - ou declarar undefined literalmente na chamada da função (undefined) 
 * 
 * os outros ("", null, valorQualquer):
 * - ele entende como um valor mesmo, e nao vai recorrer ao valor padrão.
 */

/**
 * obs: podemos por como "valor" padrão a chamada de alguma outra funcao
 * ex: o valor de b, se nao for passado, receberá o valor q vem da funcao metodo()
 */
// function name(b = metodo()) {}