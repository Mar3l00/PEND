const livro1 = document.querySelector("#livro1");
const livro2 = document.querySelector("#livro2");
const livro3 = document.querySelector("#livro3");
const alugar = document.querySelector("#alugar");
const estante = document.querySelector("#estante");
const confirmacao = document.querySelector("#confirmacao");

livro1.addEventListener("dragstart", function (event){
    event.dataTransfer.setData("text", event.target.id);
});

livro2.addEventListener("dragstart", function (event){
    event.dataTransfer.setData("text", event.target.id);
});

livro3.addEventListener("dragstart", function (event){
    event.dataTransfer.setData("text", event.target.id);
});

estante.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Solte aqui para devolver o livro a estante");
});

estante.addEventListener("drop", function (event){
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    estante.appendChild(elemento);
});

alugar.addEventListener("dragover", function (event){
    event.preventDefault();
    console.log("Solte aqui para alugar esse livro");
});

alugar.addEventListener("drop", function (event){
    confirmacao.style.opacity = "1";
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    alugar.appendChild(elemento);
});