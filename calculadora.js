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
            var numero = resultado.substring(1);
            var valorCalculado = Math.sqrt(parseFloat(numero));
            document.getElementById('resultado').innerHTML = valorCalculado;
        } else if (resultado.includes('^')) {
            var partes = resultado.split('^');
            if (partes.length === 2) {
                var base = parseFloat(partes[0]);
                var potencia = parseFloat(partes[1]);
                var valorCalculado = Math.pow(base, potencia);
                document.getElementById('resultado').innerHTML = valorCalculado;
            } else {
                document.getElementById('resultado').innerHTML = "Sintaxe Inválida";
            }
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
function changeColor() {
    var colors = ['#FF5733', '#33FF7A', '#3377FF', '#FF33E9', '#FFE933'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.calculadora').style.backgroundColor = randomColor;
}

﻿