let input = document.querySelector('.text-input');
let button = document.querySelector('.send-button');
let textArea = document.querySelector('textarea');


button.addEventListener('click', function (evt) {
    evt.preventDefault();


    let xhr = new XMLHttpRequest();
    let url = new URL('https://dictionary.skyeng.ru/api/public/v1/words/search?search=');
    xhr.open('GET', url + input.value);
    //xhr.responseType = 'json'; Если включить эту строку, то ответ будет приходить таким: [object Object],[object Object]...


    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Ошибка: ' + xhr.status);
            return;
        }
        //let jsonResponse = JSON.parse(xhr.responseText); тот же самый эффект от Parser: [object Object]
        alert(jsonResponse);
    };
    xhr.send(null);
    input.value = "";

})

/* Этим кодом я пробовал менять кодировку:
utf8Decode(xhr.responseText);
        function utf8Decode(utf8String) {
            if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
            // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
            const unicodeString = utf8String.replace(
                /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
                function(c) {  // (note parentheses for precedence)
                    var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
                    return String.fromCharCode(cc); }
            ).replace(
                /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
                function(c) {  // (note parentheses for precedence)
                    var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
                    alert (String.fromCharCode(cc)); }
            );
            alert(unicodeString);*/


/*
Пробовал искать нужную мне строку с помощью Parser
let parser = new DOMParser();
        let doc = parser.parseFromString(xhr.responseText, "text/html");
        let dateTime = doc.querySelector("translation");
 */