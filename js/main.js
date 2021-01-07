let resultado = document.getElementById('resultadoPantalla');
let addNum = document.getElementById('resultadoPantalla').value;


window.onload = function () {

    resultado.value = '';
}

function numeracion(val) {
    resultado.value += val;
}

function limpiar() {
    resultado.value = '';
}

function mostrarResultado() {
    document.getElementById('resultadoPantalla').value = eval(document.getElementById('resultadoPantalla').value);
}
