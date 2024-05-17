function identificarProduto() {
    var codigo = document.getElementById('codigo').value;
    var produto;

    if (codigo === '001') {
        produto = 'parafuso';
    } else if (codigo === '002') {
        produto = 'porca';
    } else if (codigo === '003') {
        produto = 'prego';
    } else {
        produto = 'diversos';
    }

    document.getElementById('resultado').innerText = "O produto correspondente ao código " + codigo + " é: " + produto;
}
