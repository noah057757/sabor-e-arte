let carrinho = [];

const botoes = document.querySelectorAll(".prato button");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const prato = botao.parentElement;

        const nome = prato.querySelector("h3").innerText;
        const precoTexto = prato.querySelector("strong").innerText;

        const preco = Number(
            precoTexto.replace("R$", "").replace(",", ".").trim()
        );


        const itemExistente = carrinho.find(
            item => item.nome === nome
        );


        if(itemExistente){

            itemExistente.quantidade++;

        } else {

            carrinho.push({
                nome: nome,
                preco: preco,
                quantidade: 1
            });

        }


        atualizarCarrinho();

    });

});


function atualizarCarrinho(){

    const lista = document.querySelector("#listaCarrinho");
    const total = document.querySelector("#total");


    if(carrinho.length === 0){

        lista.innerHTML = "<p>Nenhum item adicionado ainda.</p>";
        total.innerHTML = "Total: R$ 0,00";
        return;

    }


    let html = "<ul>";
    let valorTotal = 0;


    carrinho.forEach((item, index)=>{

        valorTotal += item.preco * item.quantidade;


        html += `
        <li>
        ${item.nome}
        <br>
        Quantidade: ${item.quantidade}
        <br>
        R$ ${(item.preco * item.quantidade).toFixed(2)}
        <button onclick="removerItem(${index})">
        ❌ Remover
        </button>
        </li>
        `;

    });


    html += "</ul>";


    lista.innerHTML = html;

    total.innerHTML =
    "Total: R$ " + valorTotal.toFixed(2).replace(".", ",");

}



function removerItem(index){

    carrinho.splice(index, 1);

    atualizarCarrinho();

}



document.querySelector("#finalizar").addEventListener("click", ()=>{

    if(carrinho.length === 0){

        alert("Seu carrinho está vazio!");

    } else {

        alert("Pedido enviado! Obrigado por comprar no Sabor e Arte 🍽️");

    }

});

}