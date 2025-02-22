/* 
    Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

    Objetivo do exercício: Ao preencher alguma informação nos inputs, deve ser verificado se estão vazios ou não. 
													 Caso tiver algum valor, será adicionada a borda verde. Se não tiver, é removida a borda.

        Passo 1 - Pegar todos os inputs que tenham a mesma classe.

        Passo 2 - Dar um jeito de percorrer cada input.

        Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
				Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

				Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

				Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
*/

const images = document.querySelectorAll(".slide");
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

let currentImage = 0;

forwardArrow.addEventListener("click", function () {
  if (currentImage === images.lenght - 1) {
    return;
  }

  hideOpenImage();

  currentImage++;

  images[currentImage].classList.add("show");

  showOrHideArrows();
});

function hideOpenImage() {
  const openImage = document.querySelector(".show");
  openImage.classList.remove("show");
}

function showOrHideArrows() {
  const notTheFirstImage = currentImage !== 0;
  if (notTheFirstImage) {
    backArrow.classList.remove("opacity");
  } else {
    backArrow.classList.add("opacity");
  }
}

const lastImage = currentImage !== 0 && currentImage === images.lenght - 1;
if (lastImage) {
  forwardArrow.classList.remove("opacity");
} else {
  forwardArrow.classList.add("opacity");
}
