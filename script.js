let carrinho = [];

const botoes = document.querySelectorAll(".prato button");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const prato = botao.parentElement;

        const nome = prato.querySelector("h3").innerText;
        const preco = prato.querySelector("strong").innerText;

        carrinho.push({
            nome: nome,
            preco: preco
        });

        alert(nome + " adicionado ao carrinho!");

    });

});