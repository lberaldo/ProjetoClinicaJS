var campoFiltro = document.querySelector('#filtrar-tabela');


    campoFiltro.addEventListener("input", function() {  /*Pega o evento de digitar.*/
        this.value;
        var pacientes = document.querySelectorAll(".paciente");

        if (campoFiltro.value.length >0){
            for (var i = 0; i<pacientes.length; i++){
                var paciente = pacientes[i];
                var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(this.value, "i"); /*Pra filtrar via letras digitada*/
                if (!expressao.test(nome)) { /*Se tiver uma letra e ela nao for = ao nome
                    ele oculta*/
                    paciente.classList.add("invisivel");   
            
                } else { /*Se tiver uma letra, e ela for igual a nome, ele exibe*/
                    paciente.classList.remove("invisivel");
                }
            }
        }else { /*Remove o invisivel da classe se nao tiver nada digitado.*/
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                paciente.classList.remove("invisivel");
            }
        }
    });