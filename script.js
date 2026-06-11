// Seleciona os elementos do HTML que vamos usar
const botao = document.getElementById('botao-clique');
const displayNumero = document.getElementById('numero');

// Cria a variável que vai guardar o valor do contador
let contador = 0;

// Adiciona um evento de "escuta" para o clique do botão
botao.addEventListener('click', () => {
    contador++; // Soma +1 ao contador
    displayNumero.textContent = contador; // Atualiza o texto na tela
});