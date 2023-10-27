const DOMSelectors = {
    form: document.querySelector('.form'),
    name: document.querySelector('#name'),
    img: document.querySelector('#img'),
    desc: document.querySelector('#desc'),
    container: document.querySelector('.container')
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


    inject(person)
    clear()
}

function inject(person) {
    DOMSelectors.container.insertAdjacentHTML('afterbegin',`
    <div class="card">
        <h2 id="person-name">${person.name}</h2>
        <img id="person-img" src="${person.img}" alt="${person.name}">
        <p id="person-desc">${person.desc}</p>
        <button class="remove">Remove</button>
    </div>`)


    const personDiv = DOMSelectors.container.querySelector('.card');
    remove(personDiv)
}


function clear() {
    DOMSelectors.name.value = ''
    DOMSelectors.img.value = ''
    DOMSelectors.desc.value = ''
}


function remove(personDiv) {
    const removeButton = personDiv.querySelector('.remove')

    removeButton.addEventListener('click', function (event) {
        personDiv.remove()
    });
}