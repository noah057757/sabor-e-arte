let carrinho = [];

const botoes = document.querySelectorAll(".prato button");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const prato = botao.closest(".prato");

        const nome = prato.querySelector("h3").textContent;
        const preco = parseFloat(
            prato.querySelector("strong").textContent
                .replace("R$", "")
                .replace(",", ".")
                .trim()
        );

        adicionarAoCarrinho(nome, preco);
    });
});

function adicionarAoCarrinho(nome, preco) {
    const item = carrinho.find(p => p.nome === nome);

    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({
            nome,
            preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

function alterarQuantidade(nome, valor) {
    const item = carrinho.find(p => p.nome === nome);

    if (!item) return;

    item.quantidade += valor;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(p => p.nome !== nome);
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");

    if (!lista || !total) return;

    lista.innerHTML = "";

    let valorTotal = 0;

    carrinho.forEach(item => {
        valorTotal += item.preco * item.quantidade;

        lista.innerHTML += `
            <div class="item-carrinho">
                <strong>${item.nome}</strong><br>
                R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}<br>

                <button onclick="alterarQuantidade('${item.nome}', -1)">➖</button>
                ${item.quantidade}
                <button onclick="alterarQuantidade('${item.nome}', 1)">➕</button>
            </div>
            <hr>
        `;
    });

    total.textContent =
        "Total: R$ " + valorTotal.toFixed(2).replace(".", ",");
}