function encontrarMenor() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var valor3 = parseFloat(document.getElementById('valor3').value);
    var valor4 = parseFloat(document.getElementById('valor4').value);

    var menor = valor1;

    if (valor2 < menor) {
        menor = valor2;
    }

    if (valor3 < menor) {
        menor = valor3;
    }

    if (valor4 < menor) {
        menor = valor4;
    }

    document.getElementById('resultado').innerText = "O menor valor é: " + menor;
}
