//Задание №1
function compar(a1, a2) {
    if (a1 < a2) return -1;
    else if (a1 > a2) return 1;
    else return 0;
}

console.log(compar(2, 2));


//Задание 2
function factorial(a) {
    let f = 1;
    for (i = 1; i <= a; i++) {
        f = f * i;
    }
    return f;
}

console.log(factorial(6));


//Задание 3
function catcan(a, b, c) {
    return Number(String(a) + String(b) + String(c));
}

console.log(catcan(7, 7, 8));


//Задание 4
function area(a, b) {
    if (b) return a * b;
    else return a * a;
}

console.log(area(5, 6));


//Задание 5
function perfect(a) {
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) sum += i;
    }
    if (a == sum) return true;
    else return false;
}

console.log(perfect(28));


//Задание 6
function perfectRow(a, b) {
    for (i = a; i < b; i++) {
        if (perfect(i)) console.log(i);
    }
}

perfectRow(2, 1000);