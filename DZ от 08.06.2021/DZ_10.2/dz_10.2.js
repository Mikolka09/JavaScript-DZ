//Задание 25
window.onload = function () {
    document.getElementById('list1').onclick = function () {
        let res = document.getElementById('list_item1');
        res.style.display == 'none' ? res.style.display = 'block' : res.style.display = 'none';
    }

    document.getElementById('list2').onclick = function () {
        let res = document.getElementById('list_item2');
        res.style.display == 'none' ? res.style.display = 'block' : res.style.display = 'none';
    }

    document.getElementById('list3').onclick = function () {
        let res = document.getElementById('list_item3');
        res.style.display == 'none' ? res.style.display = 'block' : res.style.display = 'none';
    }
}