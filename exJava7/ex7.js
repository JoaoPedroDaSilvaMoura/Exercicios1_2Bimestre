function verificarImpar() {
    var numero = parseInt(document.getElementById('numero').value);

    if (numero % 2 !== 0) {
        document.getElementById('resultado').innerText = numero + " é ímpar.";
    } else {
        document.getElementById('resultado').innerText = numero + " não é ímpar.";
    }
}
