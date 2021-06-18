//Задание 1
//Функция поиска и подчеркивания нужного текста
window.onload = function () {
    let body = document.getElementsByTagName('body')[0];
    let arrLi = body.getElementsByTagName('li');
    let txt = '';
    let reg = RegExp('^https?:\/\/(.*)');
    for (const it of arrLi) {
        txt = it.innerHTML;
        if (reg.test(txt)) {
            it.setAttribute('style', 'text-decoration:underline; text-decoration-style: dotted;');
        }
    }
}