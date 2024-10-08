/**
 * Funções recursivas
 * Funções que se chamam elas mesmas
 */
function recursiva(max)
{
    if(max >= 10)
        return;
    
    console.log(max);
    recursiva(max+1);
}

recursiva(1);