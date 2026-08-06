// classe
class Carro {

    //Metodo
    constructor(marca, modelo, ano, cor) {
        
        // Atributos da classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    //Ação
    ligar() {
        console.log(`${this.modelo} Está ligado.`);
    }

    //Ação
    acelerar() {
        console.log(`${this.modelo} acelerou.`);
    }

    //Ação
    frear() {
        console.log(`${this.modelo} freiou.`);
    }

    
}

const carro1 = new Carro("Wolksvagem", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "Cinza");
console.log("Carro 3: ", carro3);

console.log("------------------------------------------------------");
console.log("Atributos do Carro 1:");
console.log("Marca: ", carro1.marca);
console.log("Modelo: ", carro1.modelo);
console.log("Ano: ", carro1.ano);
console.log("Cor: ", carro1.cor);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Carro 2:");
console.log("Marca: ", carro2.marca);
console.log("Modelo: ", carro2.modelo);
console.log("Ano: ", carro2.ano);
console.log("Cor: ", carro2.cor);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("Atributos do Carro 3:");
console.log("Marca: ", carro3.marca);
console.log("Modelo: ", carro3.modelo);
console.log("Ano: ", carro3.ano);
console.log("Cor: ", carro3.cor);
console.log("------------------------------------------------------");

//Metodos
carro1.frear();

carro2.ligar();

carro3.acelerar();