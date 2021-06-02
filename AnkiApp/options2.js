const body = {
    "action": "addNote",
    "version": 6,
    "params": {
        "note": {
            "deckName": "MyDeck",
            "modelName": "Basic",
            "fields": {
                "Front": "Hello",
                "Back": ""
            },
            "options": {
                "allowDuplicate": false,
                "duplicateScope": "deck",
                "duplicateScopeOptions": {
                    "deckName": "Default",
                    "checkChildren": false
                }
            }
        }
    }
};




window.addEventListener('click', function () {
    let textString = window.getSelection().toString();

    if (textString !== '') {

        let selectionWord = textString.replace(/\s+/g, '');
        getXMLHttpRequest(selectionWord);
    }


    function getXMLHttpRequest(selectionWord) {
        let searchText = textString;
        let xhr = new XMLHttpRequest();
        let url = new URL('https://dictionary.skyeng.ru/api/public/v1/words/search?search=');
        xhr.open('GET', url + selectionWord);
        xhr.responseType = 'json';

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
            sendNoteInAnki('POST', requestUrl, body)
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }

        xhr.send(null);
    }


});



let requestUrl = 'http://127.0.0.1:8765';

function sendNoteInAnki(method, url, body) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}



