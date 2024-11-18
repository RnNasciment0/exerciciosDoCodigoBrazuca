interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
    categoria?: string;
}

function filtrarDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.disponivel);
}

function filtrarPorCategoria(produtos: Produto[], categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}

const produtos: Produto[] = [
    { nome: "Teclado", preco: 100, disponivel: true, categoria: "Periféricos" },
    { nome: "Mouse", preco: 50, disponivel: false, categoria: "Periféricos" },
    { nome: "Monitor", preco: 300, disponivel: true, categoria: "Monitores" },
    { nome: "Cadeira", preco: 200, disponivel: true, categoria: "Móveis" },
];

console.log(filtrarDisponiveis(produtos));
console.log(filtrarPorCategoria(produtos, "Periféricos"));