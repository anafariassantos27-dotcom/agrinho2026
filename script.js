function verificarResposta(correta) {
    const resultadoTexto = document.getElementById("resultado");

    if (correta) {
        resultadoTexto.innerText = "🎉 Excelente! Planear as compras evita o desperdício, poupa dinheiro e ajuda a salvar o planeta.";
        resultadoTexto.style.color = "#2e7d32"; // Verde para acerto
    } else {
        resultadoTexto.innerText = "❌ Tente outra vez! Dica: comprar por impulso ou sem planeamento costuma resultar em comida estragada no lixo.";
        resultadoTexto.style.color = "#c62828"; // Vermelho para erro
    }
}