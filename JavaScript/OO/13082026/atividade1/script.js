class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

    AplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoComDesconto;
    }



}

class Prateleira {

    constructor() {
        this.produtos = [];
    }

    adicionaraPrateleira(produto) {
        this.produtos.push(produto);
    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, posicao) => {

            resultado.innerHTML += `
            <div>
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.AplicarDesconto()}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}</p>
                <button onclick="prateleira.excluirProduto(${posicao})">Excluir</button>
            </div>

        `;
        });
    }
    excluirProduto(posicao) {
        this.produtos.splice(posicao, 1);
        this.exibir();
    }
};

const prateleira = new Prateleira();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

botaoCadastrar.addEventListener("click", () => {

    const produto = new Produto(nome.value, parseFloat(preco.value), categoria.value, parseFloat(desconto.value));

    prateleira.adicionaraPrateleira(produto);
    prateleira.exibir();
});