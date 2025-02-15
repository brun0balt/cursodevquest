// Passo 1 - Pegar o elemento do botão aqui no JS
const changeSquareColor = document.getElementById("btn-change-color");

// Passo 2 - Pegar o elemento do quadrado azul aqui no JS
const blueSquare = document.querySelector(".blue");

// Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul
changeSquareColor.addEventListener("click", changeColor);

// Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
function changeColor() {
  blueSquare.classList.remove("blue");
  blueSquare.classList.add("yellow");
}