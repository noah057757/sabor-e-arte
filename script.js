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

        atualizarCarrinho();

        alert(nome + " foi adicionado ao carrinho!");

    });

});


function atualizarCarrinho(){

    const areaCarrinho = document.querySelector("#carrinho");

    let lista = "<h2>🛒 Seu Carrinho</h2>";

    if(carrinho.length === 0){

        lista += "<p>Nenhum item adicionado ainda.</p>";

    } else {

        lista += "<ul>";

        carrinho.forEach((item)=>{

            lista += `<li>${item.nome} - ${item.preco}</li>`;

        });

        lista += "</ul>";

    }


    areaCarrinho.innerHTML = lista;

}