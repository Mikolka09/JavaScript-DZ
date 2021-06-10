//Задание 1
let res = true;
let start = 0;
let end = 0;
while (res) {
    start = prompt('Введите начало диапазона!');
    if (start != null && !isNaN(Number(start, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}
res = true;
while (res) {
    end = prompt('Введите конец диапазона!');
    if (end != null && !isNaN(Number(start, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}

let sum = 0;
for (i = +start; i < +end; i++) sum += i;

alert(`Сумма чисел в диапазоне от ${start} до ${end} равна = ${sum}`);

//Задание 2
let res = true;
let st1 = 0;
let st2 = 0;
while (res) {
    st1 = prompt('Введите первое число!');
    if (st1 != null && !isNaN(Number(st1, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}
res = true;
while (res) {
    st2 = prompt('Введите второе число!');
    if (st2 != null && !isNaN(Number(st2, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}

let array = new Array();
if (st1 < st2) {
    for (i = 1; i <= st1; i++) {
        if (st1 % i == 0 && st2 % i == 0) array.push(i);
    }
} else {
    for (i = 1; i <= st2; i++) {
        if (st1 % i == 0 && st2 % i == 0) array.push(i);
    }
}

alert(`Наибольший общий делитель чисел ${st1} и ${st2} равен ${Math.max.apply(null, array)}`);

//Задание 3
let res = true;
let st1 = 0;
while (res) {
    st1 = prompt('Введите число!');
    if (st1 != null && !isNaN(Number(st1, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}

let array = new Array();

for (i = 1; i <= st1; i++) {
    if (st1 % i == 0) array.push(i);
}

alert(`Все делители числа ${st1} равны ${String(array)}`);

//Задание 4
let res = true;
let st1;
while (res) {
    st1 = prompt('Введите число!');
    if (st1 != null && !isNaN(Number(st1, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}

alert(`Колличесвто цифр в числе ${st1} равно ${st1.length}`);

//Задание 5
let res = true;
let st1;
let array = new Array();
while (res) {
    st1 = prompt('Введите 10 чисел через пробел!');
    array = st1.split(' ');
    for (const it of array) {
        if (it != null && !isNaN(Number(it, 10))) res = false;
        else {
            alert('Одно из чисел введено не правильно, попробуйте еще раз!')
            res = true;
            break;
        }
    }
}

let countP = 0;
let countO = 0;
let countZ = 0;
let countCh = 0;
let countNch = 0;
for (const iter of array) {
    if (iter < 0) countO++;
    else if (iter == 0) countZ++;
    else countP++;
    if (iter % 2 == 0) countCh++;
    else countNch++;
}

alert(`Статистика введенных числе:
        кол-во положительных - ${countP}
        кол-во орицательных - ${countO}
        кол-во нулей - ${countZ}
        кол-во четных - ${countCh}
        кол-во нечетных - ${countNch}`);

//Задание 6
let st1;
let res = true;
while (res) {
    st1 = prompt('Введите два числа и знак через пробел!');
    array = st1.split(' ');
    switch (array[2]) {
        case '+':
            alert(`Сумма чисел ${array[0]} и ${array[1]} равна ${+array[0] + +array[1]}!`)
            break;
        case '-':
            alert(`Разница чисел ${array[0]} и ${array[1]} равна ${+array[0] - +array[1]}!`)
            break;
        case '*':
            alert(`Произведение чисел ${array[0]} на ${array[1]} равна ${+array[0] * +array[1]}!`)
            break;
        case '/':
            alert(`Деление чисел ${array[0]} на ${array[1]} равна ${+array[0] / +array[1]}!`)
            break;
    }

    let ques = confirm('Хотите продолжить или выйти?');
    if (ques == true) res = true;
    else res = false;
}

//Задание 7
let res = true;
let st;
let sd = 0;
while (res) {
    st = prompt('Введите число!');
    if (st != null && !isNaN(Number(st, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}
res = true;
while (res) {
    sd = prompt('На сколько цифр его сдвинуть?');
    if (sd != null && !isNaN(Number(sd, 10))) res = false;
    else {
        alert('Число введено не правильно, попробуйте еще раз!')
        res = true;
    }
}
let st1 = st;
alert(`Результат сдвига на ${sd} цифр введенного числа ${st1} будет равен ${st.substring(sd) + st.substring(0, sd)}`);