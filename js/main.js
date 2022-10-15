const form = document.getElementById('novoItem')
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    criaElemento(nome, quantidade)
    nome = ''
    quantidade = ''
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
}
