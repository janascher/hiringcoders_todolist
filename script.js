const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e) {
    e.preventDefault() // Para não perder os dados capturados ao atualizar a página
    const listName = newListInput.value // Pegar o valor de input
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) { // Função que cria a lista de cada item digitado na tela
    return {id: Date.now().toString(), name: name}
}

function render() { // Função que vai mostrar os itens na tela
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerHTML = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element) { // Função que limpa o elemento
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
