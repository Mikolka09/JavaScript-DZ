//Задание 1
let arrSrc = ['index.html', 'https://google.com', 'https://itstep.org', 'https://mystat.itstep.org', '/images/cat.jpg', '/local/path'];

//Создание списка ссылок
    let body = document.getElementsByTagName('body')[0];
    let div = document.createElement('div');
    div.style.width = '25%';
    div.style.backgroundColor = 'burlywood';
    div.style.marginTop = '50px';
    div.style.marginLeft = '50px';
    let ul = document.createElement('ul');
    ul.setAttribute('type', 'circle');
    ul.style.fontSize = '36pt';
    ul.style.marginLeft = '20px';
    ul.style.paddingTop = '10px';
    ul.style.paddingBottom = '10px';
    let li;
    for (const it of arrSrc) {
        li = document.createElement('li');
        li.style.color = 'blue';
        li.appendChild(document.createTextNode(it));
        ul.appendChild(li);
    }
    div.appendChild(ul);
    body.appendChild(div);
    let arrLi = document.body.getElementsByTagName(li);
    alert(arrLi[0]);
