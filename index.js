const DOMSelectors = {
    form: document.querySelector('#form'),
    imagPers: document.querySelector('.imagePers'),
    h2s: document.querySelectorAll('h2')
}

DOMSelectors.form.addEventListener('submit', function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach((header) => header.textContent = DOMSelectors.firstname.value)
});