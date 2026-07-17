// Gustavo Importados Paraguai

console.log("Gustavo Importados Paraguai carregado!");


// Animação simples ao rolar a página

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const posicao = card.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if(posicao < alturaTela - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


// Inicialização dos cards

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

});
