const carrinho = [];
const areaCarrinho = document.getElementById("carrinho");

function atualizarCarrinho() {

    let html = "<h2>🛒 Carrinho</h2>";

    if (carrinho.length === 0) {
        html += "<p>Seu carrinho está vazio.</p>";
        areaCarrinho.innerHTML = html;
        return;
    }

    let total = 0;

    carrinho.forEach((item, indice) => {

        total += item.preco;

        html += `
        <p>
        ${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerItem(${indice})">❌</button>
        </p>
        `;

    });

    html += `<h3>Total: R$ ${total.toFixed(2)}</h3>`;

    areaCarrinho.innerHTML = html;

}

function removerItem(indice){

    carrinho.splice(indice,1);

    atualizarCarrinho();

}

document.querySelectorAll(".prato").forEach(prato=>{

    const botao = prato.querySelector("button");

    botao.addEventListener("click",()=>{

        const nome = prato.querySelector("h3").innerText;

        const precoTexto = prato.querySelector("strong").innerText;

        const preco = Number(
            precoTexto
            .replace("R$","")
            .replace(",",".")
            .trim()
        );

        carrinho.push({
            nome,
            preco
        });

        atualizarCarrinho();

    });

});

atualizarCarrinho();