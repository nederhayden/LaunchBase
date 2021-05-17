// criando uma funcao

const classA = [
    {
        name: 'Neder',
        grade: 4.9
    },

    {
        name: 'Murillo',
        grade: 10
    }
]

const classB = [
    {
        name: 'Abreu',
        grade: 9.8
    },

    {
        name: 'Jamerson',
        grade: 9.7
    }
]

function calculateAverage(students) {
    let sum = 0;
    // criando estrutura de repeticao
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
    // Se a average for maior 5, parabenizar
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

sendMessage(average1, 'Turma A')
sendMessage(average2, 'Turma B')

// marcar student como flunked se a grade for menor que 5 e enviar uma mensagem

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked!`)
    }
}

function studentflunked(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

studentflunked(classA)