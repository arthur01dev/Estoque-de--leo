document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();
});

function carregarProdutos() {
  // Fazer uma requisição para o backend para obter a lista de produtos
  const produtos = [
    { id: 1, nome: "Óleo 10W40", descricao: "Óleo sintético", quantidade: 20 },
    {
      id: 2,
      nome: "Filtro de Óleo",
      descricao: "Filtro compatível com diversos modelos",
      quantidade: 15,
    },
  ];

  const tabelaProdutos = document.querySelector("#produtos__lista");
 tabelaProdutos.innerHTML = "";

  produtos.forEach((produto) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
       <td>${produto.nome}</td>
       <td>${produto.descricao}</td>
       <td>${produto.quantidade}</td>
       <td>
                <button onclick="registrarSaida(${produto.id})">Registrar Saída</button>
                <button onclick="registrarEntrada(${produto.id})">Registrar Entrada</button>
        </td>
       `;
    tabelaProdutos.appendChild(linha);
  });
}

// function que abre modal pra add o produto
const btnAddProduto = document.querySelector('#btn__add_produto');
btnAddProduto.addEventListener('click', () => {
    document.querySelector('#modal__cadastro').style.display = 'block';
})

// function que fecha modal pra add o produto
const btnCloseModal = document.querySelector('.close');
btnCloseModal.addEventListener('click', fecharModalCadastro);

function fecharModalCadastro() {
    document.getElementById('modal__cadastro').style.display = 'none';
}


function cadastrarProduto() {
    // Lógica para cadastrar o produto
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const precoCompra = document.getElementById('preco_compra').value;
    const precoVenda = document.getElementById('preco_venda').value;

    console.log(`Cadastrando produto: ${nome}, ${descricao}, ${precoCompra}, ${precoVenda}`);
    fecharModalCadastro();
    // Você pode enviar esses dados para o backend para salvar no banco de dados
}

function registrarEntrada(id) {
    console.log(`Registrando entrada para o produto ID ${id}`);
    // Aqui você pode fazer uma requisição para o backend para registrar a entrada
}

function registrarSaida(id) {
    console.log(`Registrando saída para o produto ID ${id}`);
    // Aqui você pode fazer uma requisição para o backend para registrar a saída
}