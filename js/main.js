/* console.log(document.getElementById("novoItem")); */
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
    console.log(elemento.nome, elemento.quantidade);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    e.target[0].value;

    criarElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
})

function criarElemento(nome, quantidade){
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = quantidade;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade,
    }

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
}