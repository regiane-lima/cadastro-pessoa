document.addEventListener('DOMContentLoaded', function() {
    const btnAdicionar = document.getElementById('btnAdicionar');
    const tabelaDados = document.getElementById('tabelaDados');
   


    btnAdicionar.addEventListener('click', function(event) {
        event.preventDefault();

        const tipo = document.getElementById('tipoCasa').value;
        const cep = document.getElementById('cep').value;
        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const logradouro = document.getElementById('logradouro').value;
        const numero = document.getElementById('numero').value;
        const bairro = document.getElementById('bairro').value;
        const complemento = document.getElementById('complemento').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${tipo}</td>
            <td>${cep}</td>
            <td>${estado}</td>
            <td>${cidade}</td>
            <td>${logradouro}</td>
            <td>${numero}</td>
            <td>${bairro}</td>
            <td>${complemento}</td>
        `;

        tabelaDados.appendChild(newRow);
    });
});


document.getElementById("btnSalvar").addEventListener("click", salvarInformacoes);
function salvarInformacoes() {
    var status = document.querySelector('input[name="status"]:checked');
    var informacoes = {
        status: status ? status.value : "",
        codigoCadastro: document.getElementById("codigoCadastro").value,
        tipoCadastro: document.getElementById("tipoCadastro").value,
        tipoPessoa: document.getElementById("tipoPessoa").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        nome: document.getElementById("nome").value,
        inscricaoEstadual: document.getElementById("inscricaoEstadual").value,
        cpf: document.getElementById("cpf").value,
        // ... outros campos de entrada
    };

    console.log("Informações Salvas:", informacoes);
}
