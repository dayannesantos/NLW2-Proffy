//Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', clonefield)

//Executar uma ação
function clonefield() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        // Pegar o field do momento
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
