//Objeto: Livro
//Atributos: titulo, autor, ano, editora, genero
//Métodos: alugar, devolver, alugado

class Livro {

    constructor(titulo, autor, ano, editora, genero) {
        // Atributos da classe
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.genero = genero;
    }

    alugar() {
        console.log(`O livro "${this.titulo}" Para alugar.`);
    }

    devolver() {
        console.log(`O livro "${this.titulo}" Foi devolvido.`);
    }

    alugado() {
        console.log(`O livro "${this.titulo}" Está alugado.`);
    }

}

const Livro1 = new Livro("JoJo's Bizarre Adventure", "Hirohiko Araki", 1987, "Shueisha", "Ação");
console.log("Livro 1: ", Livro1);

const Livro2 = new Livro("As Desventuras em serie", "Lemony Snicket", 1999, "HarperCollins", "Aventura");
console.log("Livro 2: ", Livro2);

const Livro3 = new Livro("Sou Sou no Frieren", "Kanehito Yamada", 2020, "Shogakukan", "Fantasia");
console.log("Livro 3: ", Livro3);

const Livro4 = new Livro("O ceifador", "Neal Shusterman", 2017, "HarperCollins", "Ficção Científica");
console.log("Livro 4: ", Livro4);

const Livro5 = new Livro("Capitães da Areia", "Jorge Amado", 1937, "Companhia das Letras", "Romance");
console.log("Livro 5: ", Livro5);

const Livro6 = new Livro("Sakamoto Days", "Yuto Suzuki", 2021, "Shogakukan", "Comédia");
console.log("Livro 6: ", Livro6);

const Livro7 = new Livro("Dandadan", "Yukinobu Tatsu", 2021, "Shueisha", "Ação");
console.log("Livro 7: ", Livro7);

const Livro8 = new Livro("A metamorfose", "Franz Kafka", 1915, "Editora Nova Fronteira", "Ficção");
console.log("Livro 8: ", Livro8);

const Livro9 = new Livro("Assassin's Creed: Brotherhood", "Oliver Bowden", 2010, "Penguin Random House", "Ação");
console.log("Livro 9: ", Livro9);

const Livro10 = new Livro("Project Hail Mary", "Andy Weir", 2021, "Crown Publishing Group", "Ficção Científica");
console.log("Livro 10: ", Livro10);

const Livro11 = new Livro("Jurassic Park", "Michael Crichton", 1990, "Knopf Doubleday Publishing Group", "Ficção Científica");
console.log("Livro 11: ", Livro11);

const Livro12 = new Livro("A Arte da Guerra", "Sun Tzu", 500, "Editora Nova Fronteira", "Estratégia");
console.log("Livro 12: ", Livro12);

const Livro13 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Editora Nova Fronteira", "Fábula");
console.log("Livro 13: ", Livro13);

const Livro14 = new Livro("Assassin's Creed: Unity", "Oliver Bowden", 2014, "Penguin Random House", "Ação");
console.log("Livro 14: ", Livro14);

const Livro15 = new Livro("I have no mouth and I must scream", "Harlan Ellison", 1967, "Ace Books", "Ficção Científica");
console.log("Livro 15: ", Livro15);

console.log("------------------------------------------------------");
console.log("Atributos do Livro 1:");
console.log("Titulo: ", Livro1.titulo);
console.log("Autor: ", Livro1.autor);
console.log("Ano: ", Livro1.ano);
console.log("Editora: ", Livro1.editora);
console.log("Genero: ", Livro1.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 2:");
console.log("Titulo: ", Livro2.titulo);
console.log("Autor: ", Livro2.autor);
console.log("Ano: ", Livro2.ano);
console.log("Editora: ", Livro2.editora);
console.log("Genero: ", Livro2.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 3:");
console.log("Titulo: ", Livro3.titulo);
console.log("Autor: ", Livro3.autor);
console.log("Ano: ", Livro3.ano);
console.log("Editora: ", Livro3.editora);
console.log("Genero: ", Livro3.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 4:");
console.log("Titulo: ", Livro4.titulo);
console.log("Autor: ", Livro4.autor);
console.log("Ano: ", Livro4.ano);
console.log("Editora: ", Livro4.editora);
console.log("Genero: ", Livro4.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 5:");
console.log("Titulo: ", Livro5.titulo);
console.log("Autor: ", Livro5.autor);
console.log("Ano: ", Livro5.ano);
console.log("Editora: ", Livro5.editora);
console.log("Genero: ", Livro5.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 6:");
console.log("Titulo: ", Livro6.titulo);
console.log("Autor: ", Livro6.autor);
console.log("Ano: ", Livro6.ano);
console.log("Editora: ", Livro6.editora);
console.log("Genero: ", Livro6.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 7:");
console.log("Titulo: ", Livro7.titulo);
console.log("Autor: ", Livro7.autor);
console.log("Ano: ", Livro7.ano);
console.log("Editora: ", Livro7.editora);
console.log("Genero: ", Livro7.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 8:");
console.log("Titulo: ", Livro8.titulo);
console.log("Autor: ", Livro8.autor);
console.log("Ano: ", Livro8.ano);
console.log("Editora: ", Livro8.editora);
console.log("Genero: ", Livro8.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 9:");
console.log("Titulo: ", Livro9.titulo);
console.log("Autor: ", Livro9.autor);
console.log("Ano: ", Livro9.ano);
console.log("Editora: ", Livro9.editora);
console.log("Genero: ", Livro9.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 10:");
console.log("Titulo: ", Livro10.titulo);
console.log("Autor: ", Livro10.autor);
console.log("Ano: ", Livro10.ano);
console.log("Editora: ", Livro10.editora);
console.log("Genero: ", Livro10.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 11:");
console.log("Titulo: ", Livro11.titulo);
console.log("Autor: ", Livro11.autor);
console.log("Ano: ", Livro11.ano);
console.log("Editora: ", Livro11.editora);
console.log("Genero: ", Livro11.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 12:");
console.log("Titulo: ", Livro12.titulo);
console.log("Autor: ", Livro12.autor);
console.log("Ano: ", Livro12.ano);
console.log("Editora: ", Livro12.editora);
console.log("Genero: ", Livro12.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 13:");
console.log("Titulo: ", Livro13.titulo);
console.log("Autor: ", Livro13.autor);
console.log("Ano: ", Livro13.ano);
console.log("Editora: ", Livro13.editora);
console.log("Genero: ", Livro13.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 14:");
console.log("Titulo: ", Livro14.titulo);
console.log("Autor: ", Livro14.autor);
console.log("Ano: ", Livro14.ano);
console.log("Editora: ", Livro14.editora);
console.log("Genero: ", Livro14.genero);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Livro 15:");
console.log("Titulo: ", Livro15.titulo);
console.log("Autor: ", Livro15.autor);
console.log("Ano: ", Livro15.ano);
console.log("Editora: ", Livro15.editora);
console.log("Genero: ", Livro15.genero);
console.log("------------------------------------------------------");

Livro1.alugar();

Livro2.devolver();

Livro3.alugar();

Livro4.alugado();

Livro5.alugado();

Livro6.alugar();

Livro7.alugado();

Livro8.devolver();

Livro9.devolver();

Livro10.alugado();

Livro11.alugar();

Livro12.devolver();

Livro13.alugado();

Livro14.alugar();

Livro15.alugar();