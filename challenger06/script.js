var botoes = document.querySelectorAll('.faq-item button');
var arrows = document.querySelectorAll('.icon-container');

botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    var resposta = botao.parentElement.nextElementSibling;
    var arrow = botao.querySelector('.icon-container');

    resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';

    if (botao.classList.contains('pressed')) {
      arrow.style.transform = 'rotate(0deg)'; 
    } else {
      arrow.style.transform = 'rotate(-180deg)';
    }

    botao.classList.toggle('pressed');
  });
});
