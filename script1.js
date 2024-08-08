// preciso verificar se a idade do aluno é maior que 7 anos

// Para alunos entre 8 e 12 anos: infantil
// Para alunos entre 13 e 17 anos: adolescentes
// Para alunos maiores de 18: adultos

let idadeAluno = 20;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno esta na categoria infantil");
} else if(idadeAluno > 12 && idadeAluno < 18) {
    console.log("Aluno esta na categoria adolescente");
} else if (idadeAluno > 17) {
    console.log("aluno esta na categoria adulta");
} else {
    console.log("aluno nao pode se matricular")
}