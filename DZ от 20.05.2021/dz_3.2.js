//Задание 2
let productCheck = [{
        name: 'хлеб',
        count: 2,
        price: 10.50
    },
    {
        name: 'молоко',
        count: 1,
        price: 22.30
    },
    {
        name: 'рыба',
        count: 3,
        price: 150.80
    },
    {
        name: 'масло',
        count: 2,
        price: 35.60
    },
    {
        name: 'пиво',
        count: 6,
        price: 25.50
    },
    {
        name: 'сырок',
        count: 1,
        price: 250.40
    },
    {
        name: 'мясо',
        count: 2,
        price: 120.90
    },
];

//Распечатка чека на экран:
function printCheck(array) {
    console.log(`\t\tМагазин "ДОБРЫНЯ"\nВремя покупки - ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`);
    console.log('-------------------------------');
    console.log('Список товаров:')
    console.log('-------------------------------');
    let sum = 0;
    for (const it of array) {
        console.log(`${it.name}\t----\t${(it.price).toFixed(2)}\n кол-во (${it.count}) --\t${(it.count*it.price).toFixed(2)}`)
        sum += it.count * it.price;
    }
    console.log('-------------------------------');
    console.log(`Всего сумма\t---\t${sum.toFixed(2)}`);
    console.log(`\t\tНДС\t---\t${(sum/6).toFixed(2)}`);
    console.log('-------------------------------');
    console.log('\t\tОПЛАЧЕНО!!!!\n\tСПАСИБО ЗА ПОКУПКУ!');
}

printCheck(productCheck);

//Подсчет общей суммы покупки:
function totalAmount(array) {
    let sum = 0;
    for (const it of array) {
        sum += it.count * it.price;
    }
    console.log(`Общая сумма покупки составит - ${sum.toFixed(2)} грн.`);
}

totalAmount(productCheck);

//Получение самой дорогой покупки в чеке:
function maxProductCheck(array) {
    let arr = new Array();
    for (const it of array) {
        arr.push({
            name: it.name,
            count: it.count,
            summa: it.price * it.count
        });
    }
    arr.sort((a, b) => {
        if (a.summa < b.summa) return 1;
        if (a.summa > b.summa) return -1;
        return 0;
    });
    console.log(`Самая дорогая покупка в чеке:
    \tНаименование  - ${arr[0].name}
    \tКолличество   - ${arr[0].count}
    \tСумма по чеку - ${arr[0].summa.toFixed(2)}`);
}

maxProductCheck(productCheck);

//Подсчет средней стоимости одного товара в чеке:
function avgProductCheck(array) {
    let sum = 0;
    let cnt = 0;
    for (const it of array) {
        sum += it.price * it.count;
        cnt += it.count;
    }
    console.log(`Средняя стоимость одного товара в чеке составит - ${(sum/cnt).toFixed(2)} грн. за ед.,`);
}

avgProductCheck(productCheck);