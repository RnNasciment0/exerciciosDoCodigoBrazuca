let nome: string = "Alice";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["Leitura", "Esportes", "Música", "Cozinhar", "Viajar"];
let endereco: { 
    cidade: string; 
    estado: string; 
    rua: string; 
    numero: number; 
    cep: string 
} = { 
    cidade: "São Paulo",
    estado: "SP",
    rua: "Rua das Flores",
    numero: 123,
    cep: "01000-000"
};

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - ${endereco.estado}, CEP: ${endereco.cep}`);