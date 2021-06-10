//Задание 2
class news {
    constructor(header, text, tegs, date) {
        this.header = header;
        this.text = text;
        this.tegs = tegs;
        this.date = date;
    }

    print() {
        let body = document.getElementsByTagName('body')[0];
        let div = document.createElement('div');
        let head = document.createElement('h1');
        let pD = document.createElement('p');
        let pT = document.createElement('p');
        let pTg = document.createElement('p');
        div.setAttribute('style', 'width:50%; font-family:arial; margin-left: 20px');
        head.appendChild(document.createTextNode(this.header));
        div.appendChild(head);
        let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        let dt = new Date(this.date.replace(pattern, '$3-$2-$1'));
        let diff = (Math.abs(Date.now() - dt.getTime()) / (1000 * 60 * 60 * 24)).toFixed(0);
        if (diff < 1) {
            pD.appendChild(document.createTextNode('today'));
        } else if (diff < 7) {
            pD.appendChild(document.createTextNode(`${diff} days ago`));
        } else {
            let data = dt.getDate() + '/' + ((dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1)) +
                '/' + dt.getFullYear();
            pD.appendChild(document.createTextNode(`${data}`));
        }
        div.appendChild(pD);
        pT.appendChild(document.createTextNode(this.text));
        pT.setAttribute('style', 'text-align:justify');
        div.appendChild(pT);
        let strTeg = '';
        for (const it of this.tegs) {
            strTeg += ` ${it}`;
        }
        pTg.appendChild(document.createTextNode(strTeg));
        div.appendChild(pTg);
        body.appendChild(div);
    }
}

let header = 'Почему он используется?';
let date = '28.05.2021';
let text = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. ' +
    'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, ' +
    'а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации ' +
    '"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML ' +
    'используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, ' +
    'как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.';
let tegs = ['#lorem', '#ipsum', '#text', '#текст'];
let newsLetter = new news(header, text, tegs, date);
newsLetter.print();