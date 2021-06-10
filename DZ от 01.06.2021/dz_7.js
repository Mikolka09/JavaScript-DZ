//Задание 1: Факториал заданного числа
function fact(n, callback) {
    let res = 1;
    let fc = () => {
        res *= n;
        n--;
        if (n == 1) {
            clearTimeout(timer);
            callback(res);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

fact(10, res => console.log(`Факториал "10" равен: ${res}`));

//Задание 2: Вывод чисел в прямом и обратном порядке
let start = prompt('Введите число начала диапазона!');
let end = prompt('Введите число конца диапазона!');

function foutStraight(a, b, callbackSt) {
    let res = [];
    let ft = () => {
        if (a < b) {
            res.push(a);
            a++;
            if (a == b) {
                res.push(a);
                clearTimeout(timer);
                callbackSt(res);
                return;
            }
            timer = setTimeout(ft);
        } else if (a > b) {
            res.push(b);
            b++;
            if (b == a) {
                res.push(b);
                clearTimeout(timer);
                callbackSt(res);
                return;
            }
            timer = setTimeout(ft);
        } else alert(`Вывод в ПРЯМОМ порядке чисел в диапазоне от ${(+start<+end) ? start: end} до ${(+start<+end) ? end: start}:  ` + a);

    }
    let timer = setTimeout(ft);
}

function foutBack(a, b, callbackBc) {
    let res = [];
    let ft = () => {
        if (a < b) {
            res.push(b);
            b--;
            if (b == a) {
                res.push(b);
                clearTimeout(timer);
                callbackBc(res);
                return;
            }
            timer = setTimeout(ft);
        } else if (a > b) {
            res.push(a);
            a--;
            if (a == b) {
                res.push(a);
                clearTimeout(timer);
                callbackBc(res);
                return;
            }
            timer = setTimeout(ft);
        } else alert(`Вывод в ОБРАТНОМ порядке чисел в диапазоне от ${(+start<+end) ? start: end} до ${(+start<+end) ? end: start}:  ` + a);

    }
    let timer = setTimeout(ft);
}

foutStraight(+start, +end, (res) => {
    let str = '';
    for (const it of res) str += it + ' ';
    alert(`Вывод в ПРЯМОМ порядке чисел в диапазоне от ${(+start<+end) ? start: end} до ${(+start<+end) ? end: start}:  ` + str)
});
foutBack(+start, +end, (res) => {
    let str = '';
    for (const it of res) str += it + ' ';
    alert(`Вывод в ОБРАТНОМ порядке чисел в диапазоне от ${(+start<+end) ? start: end} до ${(+start<+end) ? end: start}:  ` + str);
});

//Задание 3: Вывод числа задом наперед
let number = prompt('Введите число, которое надо перевернуть!');

function coup(num, callback) {
    let res = [];
    let fc = () => {
        res.push(+num % 10);
        num = parseInt(+num / 10);
        if (num == 0) {
            clearTimeout(timer);
            callback(res);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

coup(+number, (res) => {
    let str = '';
    for (const it of res) str += it;
    alert(`Переверное введенное число ${number} получится:  ${str}`);
});

//Задание 4: 
let number = prompt('Введите число длч подсчета суммы его цифр!');

function sumNumber(num, callback) {
    let res = [];
    let fc = () => {
        res.unshift(+num % 10);
        num = parseInt(+num / 10);
        if (num == 0) {
            clearTimeout(timer);
            callback(res);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

sumNumber(+number, (res) => {
    let sum = 0;
    for (const it of res) sum += it;
    alert(`Сумма цифр введенного числа ${number} равняется:  ${sum}`);
});

//Задание 5: Вывод нужного колличества круглых скобок
let number = prompt('Введите какое колличество парных круглых скобок вывести!');

function pairedBrackets(num, callback) {
    let res = [];
    let nim = parseInt(num);
    let fp = () => {
        if (+num > 0) {
            res.push('('); +
            num--;
        } else if (+num <= 0) {
            res.push(')'); +
            num--;
        }
        if (+num == (nim + 1) - 2 * nim) {
            res.push(')');
            clearTimeout(timer);
            callback(res);
            return;
        }
        timer = setTimeout(fp);
    }
    let timer = setTimeout(fp);
}

pairedBrackets(+number, (res) => {
    let str = '';
    for (const it of res) str += it;
    alert(`Результат создания ${number} круглых парных скобок:  ` + str);
})