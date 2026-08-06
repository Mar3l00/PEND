class Produto {
    constructor(nome, preco, estoque) {
        // Atributos da classe
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
        console.log(`O produto "${this.nome}" foi vendido.`);
    }

    repor() {
        console.log(`O produto "${this.nome}" está com um estoque de ${this.estoque} e precisa ser reposto.`);
    }

    alterarPreco() {
        console.log(`O preço do produto "${this.nome}" foi alterado para R$${this.preco}.`);
    }

}

const produto1 = new Produto("Camiseta", 49.90, 10);
console.log("Produto 1: ", produto1);

const produto2 = new Produto("Calça Jeans", 99.90, 5);
console.log("Produto 2: ", produto2);

const produto3 = new Produto("Tênis", 149.90, 3);
console.log("Produto 3: ", produto3);

const produto4 = new Produto("Jaqueta", 199.90, 2);
console.log("Produto 4: ", produto4);

const produto5 = new Produto("Boné", 29.90, 15);
console.log("Produto 5: ", produto5);

console.log("------------------------------------------------------");
console.log("Atributos do Produto 1:");
console.log("Nome: ", produto1.nome);
console.log("Preço: ", produto1.preco);
console.log("Estoque: ", produto1.estoque);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Produto 2:");
console.log("Nome: ", produto2.nome);
console.log("Preço: ", produto2.preco);
console.log("Estoque: ", produto2.estoque);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Produto 3:");
console.log("Nome: ", produto3.nome);
console.log("Preço: ", produto3.preco);
console.log("Estoque: ", produto3.estoque);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Produto 4:");
console.log("Nome: ", produto4.nome);
console.log("Preço: ", produto4.preco);
console.log("Estoque: ", produto4.estoque);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Produto 5:");
console.log("Nome: ", produto5.nome);
console.log("Preço: ", produto5.preco);
console.log("Estoque: ", produto5.estoque);
console.log("------------------------------------------------------");

produto1.vender();

produto2.repor();

produto3.alterarPreco();

produto4.repor();

produto5.repor();