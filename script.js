// Formulário
let produtos = [];

// Função para exibir o formulário de cadastro
function mostrarFormulario() {
    document.getElementById('formularioProduto').style.display = 'block';
}

// Função para atualizar a tabela de listagem
function atualizarTabela() {
    const tbody = document.querySelector('#tabelaDeProdutos tbody');
    tbody.innerHTML = ''; // Limpa a tabela

    // Ordena os produtos pelo valor
    produtos.sort((a,b) => a.valor - b.valor);


    // Popula a tabela com os produtos
    produtos.forEach(produto => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${produto.nome}</td> <td>R$ ${produto.valor.toFixed(2)}</td>`;
        tbody.appendChild(row);
    })
}

//Função para cadastrar produto
document.getElementById('formProduto').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const disponivel = document.getElementById('disponivel').value;

    // Adiciona o novo produto à lista
    produtos.push({nome, valor, disponivel});

    // Atualiza a tabela
    atualizarTabela();

    // Limpa o formulário
    document.getElementById('formProduto').reset();

    // Esconde o formulário após cadastrar
    document.getElementById('formularioProduto').style.display = 'none';
})