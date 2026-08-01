let carrinho = [];

const botoes = document.querySelectorAll(".prato button");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        const prato = botao.parentElement;

        const nome = prato.querySelector("h3").innerText;
        const precoTexto = prato.querySelector("strong").innerText;

        const preco = Number(
            precoTexto.replace("R$", "")
            .replace(",", ".")
            .trim()
        );

        adicionarProduto(nome, preco);
    });
});


function adicionarProduto(nome, preco) {

    const produtoExistente = carrinho.find(
        produto => produto.nome === nome
    );

    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

function atualizarCarrinho() {

    const lista = document.querySelector("#lista-carrinho");
    const total = document.querySelector("#total");

    if (!lista) return;

    lista.innerHTML = "";

    let valorTotal = 0;

    carrinho.forEach(produto => {

        const item = document.createElement("div");

        item.innerHTML = `
            <p>
            ${produto.nome}
            <br>

            R$ ${(produto.preco * produto.quantidade)
            .toFixed(2)
            .replace(".", ",")}

            <br>

            <button onclick="diminuirProduto('${produto.nome}')">
            ➖
            </button>

            ${produto.quantidade}

            <button onclick="aumentarProduto('${produto.nome}')">
            ➕
            </button>

            <button onclick="removerProduto('${produto.nome}')">
            ❌
            </button>

            </p>
            <hr>
        `;

        lista.appendChild(item);

        valorTotal += produto.preco * produto.quantidade;
    });


    total.innerHTML =
    `Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
}


function aumentarProduto(nome) {

    const produto = carrinho.find(
        produto => produto.nome === nome
    );

    if (produto) {
        produto.quantidade++;
    }

    atualizarCarrinho();
}


function diminuirProduto(nome) {

    const produto = carrinho.find(
        produto => produto.nome === nome
    );

    if (produto && produto.quantidade > 1) {
        produto.quantidade--;
    } else {
        removerProduto(nome);
    }

    atualizarCarrinho();
}
}


function removerProduto(nome) {

    carrinho = carrinho.filter(
        produto => produto.nome !== nome
    );

    atualizarCarrinho();
}


function atualizarCarrinho() {

    const lista = document.querySelector("#lista-carrinho");
    const total = document.querySelector("#total");

    if (!lista) return;

    lista.innerHTML = "";

    let valorTotal = 0;

    carrinho.forEach(produto => {

        const item = document.createElement("div");

        item.innerHTML = `
            <p>
            ${produto.nome} 
            x${produto.quantidade}
            <br>
            R$ ${(produto.preco * produto.quantidade)
            .toFixed(2)
            .replace(".", ",")}
            
            <button onclick="removerProduto('${produto.nome}')">
            ❌
            </button>
            </p>
        `;

        lista.appendChild(item);

        valorTotal += produto.preco * produto.quantidade;
    });


    total.innerHTML =
    `Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
    const numero = "5549999793684";
}