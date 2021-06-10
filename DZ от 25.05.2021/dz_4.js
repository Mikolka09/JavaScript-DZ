//Задание 1 "Возведение в степень":
function exponent(a, n) {
    if (n == 0) return 1;
    return (n == 1) ? a : a * exponent(a, n - 1);
}

console.log(exponent(2, 3));

//Задание 2 "Наибольший общий делитель"
function commonMaxDivisor(a, b) {
    if (a == b) return a;
    if (a > b) return commonMaxDivisor(a - b, b);
    return commonMaxDivisor(a, b - a);
}

console.log(commonMaxDivisor(6, 36));

//Задание 3 "Максимальная цифра в числе"
function maxNumeral(a) {
    return a < 10 ? a : Math.max(a % 10, maxNumeral(a / 10)).toFixed(0);
}

console.log(maxNumeral(1569245));

//Задание 4 "Простое ли переданное число"
function primeNumber(num, div) {
    if (num / 2 < div) return true;
    if (num % div == 0) return false;
    return primeNumber(num, div + 1);

}

console.log(primeNumber(101, 2));

//Задание 5 "Вывод множетелей в возростном порядке"
function multipliers(a, b) {
    if (a == 1) return a;
    if (a > b) {
        if (a % b == 0) {
            str += (b + ' * ');
            multipliers(a / b, b);
        } else multipliers(a, ++b);
    } else str += (a);
    return str;
}

let str = "";
console.log(multipliers(156, 2));

//Задание 6 "Вывести число Фибонначи по индексу"
function fibonacci(n) {
    if (n <= 1) return n;
    else return (fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(`Число Фибонначи будет - ` + fibonacci(7));