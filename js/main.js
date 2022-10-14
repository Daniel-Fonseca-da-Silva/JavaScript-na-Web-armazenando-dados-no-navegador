const form = document.getElementById('novoItem')
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    evento.target[0].value
    evento.target[1].value
    console.log(evento)
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
})
