function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        if (resultado.startsWith('√')) {
            var numero = resultado.substring(1); // Remove o símbolo '√'
            var valorCalculado = Math.sqrt(parseFloat(numero));
            document.getElementById('resultado').innerHTML = valorCalculado;
        } else {
            try {
                document.getElementById('resultado').innerHTML = eval(resultado);
            } catch (error) {
                console.error(error);
                document.getElementById('resultado').innerHTML = "Erro";
            }
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}
﻿