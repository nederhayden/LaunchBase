// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média.


const aluno01 = 'Neder'
const notaAluno01 = 9.8

const aluno02 = 'Murillo'
const notaAluno02 = 10

const media = (notaAluno01 + notaAluno02) / 2

// Se a media for maior 5, parabenizar
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    console.log(`A média é menor que 5.`)
}