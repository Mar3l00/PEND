 class Aluno {

    constructor(nome, idade, curso, matricula) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
}

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação!`);
    }

    
}

class Turma {

    constructor() {
        this.alunos = [];
    }

    adiionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirNaTela(){

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";
        
        this.alunos.forEach(aluno => {

            resultado.innerHTML += `
            <div>
                <p>Nome: ${aluno.nome}</p>
                <p>Idade: ${aluno.idade}</p>
                <p>Curso: ${aluno.curso}</p>
                <p>Matrícula: ${aluno.matricula}</p>
            </div>
        `;
    });

}
}

const aluno1 = new Aluno("João", 20, "Engenharia", "12345");

aluno1.estudar();

const aluno2 = new Aluno("Maria", 22, "Medicina", "67890");

aluno2.apresentar();

// aluno2.exibirNaTela();

console.log("------------------------------------------------------");
console.log("Atributos do Aluno 1:");
console.log("Nome: ", aluno1.nome);
console.log("Idade: ", aluno1.idade);
console.log("Curso: ", aluno1.curso);
console.log("Matrícula: ", aluno1.matricula);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Aluno 2:");
console.log("Nome: ", aluno2.nome);
console.log("Idade: ", aluno2.idade);
console.log("Curso: ", aluno2.curso);
console.log("Matrícula: ", aluno2.matricula);
console.log("------------------------------------------------------");

 const turma = new Turma();
 const nome = document.querySelector("#nome");
 const idade = document.querySelector("#idade");
 const curso = document.querySelector("#curso");
 const matricula = document.querySelector("#matrícula");
 const botaoCadastrar = document.querySelector("#botaoCadastrar");


 botaoCadastrar.addEventListener("click", function() {

     const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

     alunos.push(aluno);
     console.log(alunos);

     turma.adiionarAluno(aluno);
     turma.exibirNaTela();

 });