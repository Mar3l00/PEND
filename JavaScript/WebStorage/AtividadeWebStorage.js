class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

    AplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100);

    }



}

class Prateleira {

    constructor() {
        this.produtos = [];
        this.carregar();
    }

    adicionaraPrateleira(produto) {
        produto.AplicarDesconto();
        this.produtos.push(produto);
        this.salvar();
    }

    salvar() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }

    carregar() {
        const dados = localStorage.getItem("produtos");

        if (dados) {
            const produtosSalvos = JSON.parse(dados);
            this.produtos = produtosSalvos;
        }
    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, posicao) => {

            resultado.innerHTML += `
            <div>
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}</p>
                <button onclick="prateleira.excluirProduto(${posicao})">Excluir</button>
            </div>

        `;
        });
    };
    excluirProduto(posicao) {
        this.produtos.splice(posicao, 1);
        this.salvar();
        this.exibir();
    }
};


const prateleira = new Prateleira();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", () => {
    const produto = new Produto(
        nome.value,
        parseFloat(preco.value),
        categoria.value,
        parseFloat(desconto.value)
    );

    prateleira.adicionaraPrateleira(produto);
    prateleira.exibir();


    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});

prateleira.exibir();