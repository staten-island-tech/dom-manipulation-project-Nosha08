const DOMSelectors = {
    form: document.querySelector('.form'),
    name: document.querySelector('#name'),
    img: document.querySelector('#img'),
    desc: document.querySelector('#desc')
}

const HTMLSelectors = {
    container: document.querySelector('.container'),
    HTMLname: document.querySelector('#person-name'),
    HTMLimg: document.querySelector('#person-img'),
    HTMLdesc: document.querySelector('#person-desc'),
    remove: document.querySelector('#remove')
}

DOMSelectors.form.addEventListener('submit', function (event) {
    event.preventDefault()
    create()
})

function create() {
    const person = {
        name: DOMSelectors.name.value,
        img: DOMSelectors.img.value,
        desc: DOMSelectors.desc.value
    }

    const newElement = document.createElement('div')
    newElement.appendChild(person)

    inject(person)
    clear()
    remove()
}

function inject(person) {
    HTMLSelectors.HTMLname.innerHTML = person.name
    HTMLSelectors.HTMLimg.innerHTML = person.img
    HTMLSelectors.HTMLdesc.innerHTML = person.desc
}

function clear() {
    DOMSelectors.name.value = ''
    DOMSelectors.img.value = ''
    DOMSelectors.desc.value = ''
}

function remove() {
    HTMLSelectors.remove.addEventListener('click', function (event) {
        HTMLSelectors.container.remove()
    })
}