let input = document.querySelector('.input')
let botonAgregar = document.querySelector('.botonAgregar')
let container = document.querySelector('.container')

class item {
    constructor(input) {
        this.input = input
        this.crearDiv()
    }
    crearDiv() {
        let inputItem = document.createElement('input')
        inputItem.disabled = 'true'
        inputItem.classList.add('itemImput')
        inputItem.value = this.input
        let nuevoDiv = document.createElement('div')
        nuevoDiv.classList.add('item')
        let botonEditar = document.createElement('button')
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add('botonEditar')
        let botonRemover = document.createElement('button')
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add('botonRemover')
        nuevoDiv.appendChild(inputItem)
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)
        container.appendChild(nuevoDiv)
        botonEditar.addEventListener('click', () => {
            let i = botonEditar.querySelector('i')
            inputItem.disabled = !inputItem.disabled
            i.classList.toggle('fa-lock')
            i.classList.toggle('fa-lock-open')
        })
        botonRemover.addEventListener('click', () => {
            container.removeChild(nuevoDiv)
        })
    }
}
function chequearInput(input) {
    if (input.value) {
        new item(input.value)
        input.value = ''
    }
    return input
}
botonAgregar.addEventListener('click', () => {
    chequearInput(input)
})