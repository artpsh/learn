
window.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
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
        alert(newArray);
    }

    xhr.send(null);
}


});

