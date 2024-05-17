function calcularMedias() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
  
    // Calcular média aritmética
    var mediaAritmetica = (num1 + num2 + num3) / 3;
  
    // Calcular média ponderada
    var mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);
  
    // Calcular soma das médias
    var somaDasMedias = mediaAritmetica + mediaPonderada;
  
    // Exibir resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultados:</h3>" +
      "<p>Média Aritmética: " + mediaAritmetica.toFixed(2) + "</p>" +
      "<p>Média Ponderada: " + mediaPonderada.toFixed(2) + "</p>" +
      "<p>Soma das Médias: " + somaDasMedias.toFixed(2) + "</p>";
  }