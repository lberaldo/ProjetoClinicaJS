
var titulo = document.querySelector('.titulo');
titulo.textContent = "Ae caralho! JS";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]; /*Para fazer isso para todos pacientes. */
    console.log(paciente);
    

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso < 0 || peso > 1000) {
        console.log('Peso Invalido');
        pesoEhValido = false;
        tdImc.textContent= "Peso Invalido!";
        /*paciente.style.color = "red";*/
        paciente.classList.add('paciente-invalido');
    }

    if (altura < 0 || altura > 3.00 ) {
        console.log('Altura invalida');
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida";
        /*paciente.style.color = "red";*/
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(); /* Formata em 2 casas decimais.*/
    }else{
        console.log('Fodeu!')
    }
}