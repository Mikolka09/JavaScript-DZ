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

//Задание 3
class newsFeed extends news {
    constructor(arrNews) {
        super(header, text, tegs, date);
        this.arrNews = arrNews;
    }

    getCount() {
        document.write('Колличество новостей - ' + this.arrNews.length);
    }

    printAll() {
        for (const it of this.arrNews) {
            it.print();
        }
    }

    addNews() {
        let header = prompt('Введите заголовок новостей:');
        let date = prompt('Введите дату публикации (dd.mm.yyyy):');
        let text = prompt('Введите текст новостей:');
        let tegs = prompt('Введите теги через пробел (тег начинается со знака - #):').split(' ');
        let newsLetter = new news(header, text, tegs, date);
        this.arrNews.push(newsLetter);
        alert('Новая новость добавленна!');
        for (const it of this.arrNews) {
            it.print();
        }
    }

    deleteNews() {
        let i = 1;
        document.write('Список заголовков новостей:<br>');
        for (const it of arrNews) {
            document.write(`${i++}. ${it.header}<br>`);
        }
        let index = prompt('Укажите номер новости по загаловку для удаления:');
        if (index - 1 <= arrNews.length) {
            arrNews.splice(index - 1, 1);
            alert('Новость удалена!');
        } else alert('Индекс указан не верно!');
        for (const it of this.arrNews) {
            it.print();
        }

    }

    sortNews() {
        arrNews.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        })
        for (const it of this.arrNews) {
            it.print();
        }
    }

    findNews() {
        let teg = prompt("Введите ТЕГ по котрому искать новость (тег начинается со знака - #):");
        let arr = [];
        for (const it of arrNews) {
            for (let i=0; i<it.tegs.length; i++) {
                if(it.tegs[i] == teg) arr.push(it);
            }
        }
        for (const it of arr) {
            it.print();
        }
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
let header1 = 'Что такое Lorem Ipsum?';
let date1 = '22.05.2021';
let text1 = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" ' +
    'для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, ' +
    'используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул ' +
    'в электронный дизайн.';
let tegs1 = ['#lorem', '#ipsum', '#text', '#текст', '#good'];
let newsLetter1 = new news(header1, text1, tegs1, date1);
let header2 = 'Откуда он появился?';
let date2 = '26.05.2021';
let text2 = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в ' +
    'один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа ' +
    'Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической ' +
    'латинской литературе.';
let tegs2 = ['#lorem', '#ipsum', '#text', '#текст'];
let newsLetter2 = new news(header2, text2, tegs2, date2);
let arrNews = [newsLetter, newsLetter1, newsLetter2];
let newsF = new newsFeed(arrNews);
//newsF.getCount();
//newsF.addNews();
//newsF.printAll();
//newsF.deleteNews();
//newsF.sortNews();
newsF.findNews();