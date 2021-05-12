let input = document.querySelector('.text-input');
let sendButton = document.querySelector('.send-button');
let textArea = document.querySelector('textarea');


sendButton.addEventListener('click', function (evt) {

    evt.preventDefault();


    let xhr = new XMLHttpRequest();
    let url = new URL('https://dictionary.skyeng.ru/api/public/v1/words/search?search=');
    xhr.open('GET', url + input.value);
    xhr.responseType = 'json';
    console.log(JSON.parse('{"id":"1", "ids":[1,2,3]}').ids[2]);

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Ошибка: ' + xhr.status);
            return;
        }
        let responseArray = xhr.response;
        let newArray = [];


        for (let i in responseArray) {
            for (let j in responseArray[i].meanings) {
                for (let u in responseArray[i].meanings[j].translation) {
                    newArray.push(responseArray[i].meanings[j].translation[u]);
                }
            }
        }

        let cleanArray = [];

        for (let k of newArray)
            k && cleanArray.push(k);

        newArray = cleanArray;
        delete cleanArray;
        textArea.append(newArray);
    }

    xhr.send(null);
    input.value = "";


})


