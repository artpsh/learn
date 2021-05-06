let input = document.querySelector('.text-input');
let button = document.querySelector('.send-button');
let textArea = document.querySelector('textarea');



button.addEventListener('click', function (evt){
evt.preventDefault();


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dictionary.skyeng.ru/doc/api/external');

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            alert( 'Ошибка: ' + xhr.status);
            return;
        }
    };

xhr.onprogress = function (evt) {
    alert(`Загружено ${evt.loaded} из ${evt.total}`);

}
})