// Selecionar todos os botões
var botoes = document.querySelectorAll('.faq-item button');

// Adicionar um evento de clique a cada botão
botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Selecionar a resposta correspondente ao botão clicado
    var resposta = botao.nextElementSibling;
    
    // Alternar a exibição da resposta
    resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';
  });
});