let body = document.querySelector("body")
let tenis = document.querySelector(".nike-verde")


function mudarVisual(cor, img){
    tenis.classList.add("troca-efeito")

    body.style.background = cor

    
    // contador de tempo
    setTimeout(() => {
        tenis.src = img
        tenis.classList.remove("troca-efeito")
    }, 400);

   
    // 1000 milisegundos = 1 segundo

    // PROJETO FINALIZADO 100% DEDICADO.
}
