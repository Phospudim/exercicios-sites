var botoes = document.querySelectorAll('.faq-item button');

botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    var resposta = botao.parentElement.nextElementSibling;
    resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';
  });
});
