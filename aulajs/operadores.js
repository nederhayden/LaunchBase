/* ==============================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual a do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

================================================================= */

/* ==============================================================
    OPERADORES LÓGICO

    && "E"      As duas condições devem ser verdadeiras
                para que a condição final seja verdadeira.
    || "OU"     Uma das condições deve ser verdadeira
                para que a condição final seja verdadeira.
    ! "NÃO"     Nega uma condição.

================================================================= */

// DESAFIO 1

const idade = 16

// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se nao, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear Entrada.')
} else {
    console.log('Deixar Entrar.')
}



/* ==============================================================
    OPERADORES DE ARITMÉTICOS

    *   Muliplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

================================================================= */

