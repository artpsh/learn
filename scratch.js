let message;

message = (login == 'Сотрудник') ? 'Привет' :
 (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
                  '';


onMouseUp="getSelectedText(); alert(txt)"





const coucou=  {
    ' ': [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2, 3, 9],
    o: [4, 7],
    r: [8],
    w: [6]
};

const buildString = m => {
    const result = [];
    for([letter, numbers] of Object.entries(m))
{
    numbers.forEach(i => result[i] = letter);
}
    return result.join('');
}




function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

let ask = (question, yes, no) => confirm('Вы согласны?') ? alert("Вы согласились.") : alert("Вы отменили выполнение.");




/*let form = document.querySelector('.word-form')
let list = document.querySelector('.answer');

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    list.append(newElement);
    input.value='';
}
*/


/*

let parser = new DOMParser();
        let doc = parser.parseFromString(xhr.responseText, "text/html");
        let dateTime = doc.querySelector("translation");
 */

/*utf8Decode(xhr.responseText);
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
            alert(unicodeString);
        }*/

//let jsonResponse = JSON.parse(xhr.responseText); тот же самый эффект от Parser: [object Object]

/*
Пробовал искать нужную мне строку с помощью Parser
let parser = new DOMParser();
        let doc = parser.parseFromString(xhr.responseText, "text/html");
        let dateTime = doc.querySelector("translation");
 */




//xhr.response[2].meanings[0].translation.text

/*
1. xhr.response - это многомерный массив, мне нужно достать из него текст перевода для запрашиваемого слова
2. в xhr.response содержится 15 объектов

 */


/* let arrTranslation = [];
  for (let i = 0; i < xhr.response.length; i++) {
console.log(xhr.response[i].meanings)

  }

  let arrTranslationSecond = [];
  for (let j = 0; j < arrTranslation; j++) {

      arrTranslationSecond.push(arrTranslation[j])*/

/* let inArr = function(val,arr){if(arr===null)return;
      for(let i=0;i<arr.length;i++){if(arr[i]==val)return true;if('object'==typeof arr[i])if(inArr(val,arr[i]))return true}return false};
      console.log(inArr("translation", translation));*/


//ondblclick="getSelectedText(); alert(txt)"