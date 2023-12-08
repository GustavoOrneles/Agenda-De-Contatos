const agendaForm = document.getElementById('agendaForm');

const contatos = []


agendaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarContato();
    linha();
});




function adicionarContato() {
     var nome = document.getElementById("nomeInput").value;
     var telefone = document.getElementById("telefoneInput").value;

     var novoContato = {
        nome: nome,
        telefone: telefone
    };

  
    contatos.push(novoContato);


    document.getElementById("nomeInput").value = "";
    document.getElementById("telefoneInput").value = "";

    let novaLinha = document.createElement('div');
    novaLinha.innerHTML = `<p> Nome: ${nome}</p><p> Telefone: ${telefone}</p> <hr>`;
    linhasContatos.appendChild(novaLinha);


    console.log(contatos);
}

