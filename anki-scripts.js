let input = document.querySelector('.text-input');
let sendButton = document.querySelector('.send-button');
let textArea = document.querySelector('textarea');


function getXMLHttpRequest(selectionWord) {
    let searchText = input.value
    let xhr = new XMLHttpRequest();
    let url = new URL('https://dictionary.skyeng.ru/api/public/v1/words/search?search=');
    xhr.open('GET', url + selectionWord);
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

            if (responseArray[i].text === searchText) {
                for (let j in responseArray[i].meanings) {
                    for (let u in responseArray[i].meanings[j].translation) {

                        newArray.push(responseArray[i].meanings[j].translation[u]);
                    }
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
    textArea.innerHTML = "";

}


sendButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    let selectionWord = input.value;
    getXMLHttpRequest(selectionWord);
})


window.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    let textString = window.getSelection().toString();

    if (textString !== '') {

        input.value = textString.replace(/\s+/g, '');;
        let selectionWord = input.value;
        getXMLHttpRequest(selectionWord);
    }

});

