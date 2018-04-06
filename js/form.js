var botaoAdicionar = document.querySelector("#adicionar-paciente");
    
    botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); /*Impede a página de recarregar ao enviar o formulario. */

    var form = document.querySelector("#form-adiciona"); /*Pega o conteudo do form.*/
   
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    var mensagensErro = document.querySelector("#mensagens-erro"); /*limpa as mensagens anteriores.*/
    mensagensErro.innerHTML = "";

    if (erros.length >0) {
        exibeMensagensDeErro(erros)
        return; /* Return vazio pra sair da função e nao adicionar caso esteja peso invalido.  */ 
    }

    var tabela = document.querySelector("#tabela-pacientes"); /*Pega todo conteudo da table para colocar a 
    tabela TR criada anteriormente, dentro da table.*/

    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteDoFormulario(form){
    /*Cria um objeto paciente, pois as caracteristicas são unicas. */
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value) /*Calcula o IMC usando a função calcula imc. */
    }
    return paciente;
}

function montaTr(paciente) {
    /*cria uma tr paciente */
    var pacienteTr = document.createElement("tr"); /*Cria uma tag html TR, e salva dentro de uma variavel */
    
    /*Cria uma classe pra tag criada anteriormente*/
    pacienteTr.classList.add('paciente');
    
    /*Cria tabelas TDS baseado na função montatd.*/
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    /*Adiciona as Tds dentro da TR */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = []; /*Cria um array de erros.*/

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco"); /*Adiciona uma mensagem no array. */
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; /*Limpa o UL.*/

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

    /*Extraindo os valores do input de dentro do form enviado
    var nome = form.nome.value; 
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    Pega o conteudo dos inputs, dentro do form.*/
