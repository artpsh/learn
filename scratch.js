let form = document.querySelector('.word-form')
let list = document.querySelector('.answer');

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    list.append(newElement);
    input.value='';
}
