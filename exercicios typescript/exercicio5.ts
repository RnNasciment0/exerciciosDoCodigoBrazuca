class Animal {
    nome: string;
    som: string;

    constructor(nome: string, som: string) {
        this.nome = nome;
        this.som = som;
    }

    emitirSom(): string {
        return `${this.nome} faz ${this.som}`;
    }
}

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, som: string, raca: string) {
        super(nome, som);
        this.raca = raca;
    }

    latirForte(): string {
        return `${this.nome} da raça ${this.raca} faz ${this.som.toUpperCase()}!`;
    }
}

const rex = new Cachorro("Rex", "au au", "Labrador");
console.log(rex.emitirSom());
console.log(`Raça: ${rex.raca}`);
console.log(rex.latirForte());