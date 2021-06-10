//Задание 1
let shoppingList = [{
        name: 'хлеб',
        count: 2,
        bought: true
    },
    {
        name: 'молоко',
        count: 1,
        bought: false
    },
    {
        name: 'банан',
        count: 2,
        bought: false
    },
    {
        name: 'масло',
        count: 2,
        bought: true
    },
    {
        name: 'пиво',
        count: 4,
        bought: false
    },
    {
        name: 'яблоко',
        count: 1,
        bought: false
    },
    {
        name: 'мясо',
        count: 2,
        bought: true
    },
];

//Вывод всего списка покупок на экран:
function print(array) {
    array.sort((a, b) => {
        if (a.bought < b.bought) return -1;
        if (a.bought > b.bought) return 1;
        return 0;
    });
    console.log(`\t\t\t\t\tСписок покупок:`);
    for (const it of array) {
        console.log(` 
                      Имя продукта: ${it.name} ,
                      Колличество: ${it.count},
                      Куплен: ${(it.bought==true)? 'Да':'Нет'}`);
    }
}

print(shoppingList);

//Добавление покупки в список:
function addBuyList(array, buy) {
    let res = 0;
    for (const it of array) {
        if (it.name == buy.name) {
            it.count += buy.count;
            it.bought = false;
            res++;
        } else res = 0;
    }
    if (res == 0)
        array.push(buy);
}

let buy = {
    name: 'масло',
    count: 2,
    bought: false
};

addBuyList(shoppingList, buy);
print(shoppingList);

//Покупка продукта:
function buyProduct(array, name) {
    for (const it of array) {
        if (it.name == name) it.bought = true;
    }
}

buyProduct(shoppingList, 'молоко');
print(shoppingList);