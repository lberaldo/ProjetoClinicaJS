var pacientes = document.querySelectorAll('.paciente'); /* todos pacientes. */

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    event.target.parentNode.classList.add("fadeOut"); /*Pega o alvo do evento, que recebeu o click*/
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);; /*remove o elemento q sofreuu o click.*/
});
/*
target. Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente 
o evento. O próximo passo será remover o elemento após o duplo clique: 
*/