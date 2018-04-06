
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

    var pesoEhValido = validaPeso(peso); 
    /*Salva os valores da função na variavel peso é valido como true ou false.
    Mas, ele so vai cair no if abaixo, se for invalido, Então colocamos ! pra caso seja false
    entrar no IF.
    */
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso Invalido');
        pesoEhValido = false;
        tdImc.textContent= "Peso Invalido!";
        /*paciente.style.color = "red";*/
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValida) {
        console.log('Altura invalida');
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida";
        /*paciente.style.color = "red";*/
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; /* Formata em 2 casas decimais.*/
    }else{
        console.log('Fodeu!')
    }

    function validaPeso(peso){
        if (peso >= 0 && peso < 1000) {
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura){
        if (altura >= 0 && altura < 3.00) {
            return true;
        }else{
            return false;
        }
    }
    function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura *altura);
        return imc.toFixed(2);
    }
}
