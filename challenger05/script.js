//alteration from buttons colors
function alterarCor(button) {
   var buttons = document.getElementsByClassName("button");
   for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] === button) {
         buttons[i].classList.add("clicked");
      } else {
         buttons[i].classList.remove("clicked");
      }
   }
}

//submit button
var submit = document.getElementById('submit');
var modal = document.querySelector("dialog");

submit.addEventListener('click', function (event) {
   event.preventDefault(); // Impede o envio padrão do formulário
   modal.showModal();
});

// Rating buttons
const ratingButtons = document.querySelectorAll('.button');
const selectedRatingElement = document.getElementById('selectedRating');

ratingButtons.forEach(button => {
   button.addEventListener('click', () => {
      const rating = button.textContent;
      selectedRatingElement.textContent = rating;
   });
});
