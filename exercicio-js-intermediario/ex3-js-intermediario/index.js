// Passo 1 - Pegar o elemento do quadrado azul aqui no JS.
const square = document.querySelector(".square");

// Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.
square.addEventListener('click', () => {
		// Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul.
    const hasBlueClass = square.classList.contains('blue');

		// Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
    if (hasBlueClass) {
        square.classList.remove("azul");
    } else {
				// Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
        square.classList.add("azul");
    }
});