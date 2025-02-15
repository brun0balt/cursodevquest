const itensPerguntasERspostas = document.querySelectorAll(".item");

itensPerguntasERspostas.forEach(function(item){
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");


        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }

        item.classList.add("ativo"); 
    });
});