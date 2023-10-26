const DOMSelectors = {
    form: document.querySelector('.form'),
    name: document.querySelector('#name'),
    img: document.querySelector('#img'),
    desc: document.querySelector('#desc')
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
    // remove()
}

function inject(person) {
    const personDiv = document.createElement('div');
    personDiv.innerHTML = `
    <div class="card">
        <h2 id="person-name">${person.name}</h2>
        <img id="person-img" src="${person.img}" alt="${person.name}">
        <p id="person-desc">${person.desc}</p>
        <button id="remove">Remove</button>
    </div>
    `;
        
    const removeButton = personDiv.querySelector('#remove')
    document.body.appendChild(personDiv)

    
    removeButton.addEventListener('click', function (event) {
        personDiv.remove()
    });
}

function clear() {
    DOMSelectors.name.value = ''
    DOMSelectors.img.value = ''
    DOMSelectors.desc.value = ''
}

/* function remove() {
    HTMLSelectors.remove.addEventListener('click', function (event) {
        HTMLSelectors.card.remove()
    })
} */