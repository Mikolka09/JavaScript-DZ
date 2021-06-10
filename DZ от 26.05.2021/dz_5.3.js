//Задание 3
class Employee {
    constructor(name, surname, age, position, department, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }
}
let arrEmployee = new Array(
    new Employee('Ivan', 'Popov', 30, 'seller', 'sales', 15000),
    new Employee('Inna', 'Garand', 32, 'seller', 'sales', 12000),
    new Employee('Oleg', 'Kurlik', 45, 'com. director', 'directorate', 35000),
    new Employee('Lola', 'Jordan', 27, 'secretary', 'directorate', 18000),
    new Employee('Maksim', 'Shishkin', 50, 'director', 'directorate', 60000),
    new Employee('Fill', 'Mamont', 33, 'seller', 'sales', 16000));

class empTable {
    constructor(arrEmp) {
        this.arrEmp = arrEmp;
    }
    getHTML() {
        let body = document.getElementsByTagName('body')[0];
        let tbl = document.createElement('table');
        tbl.setAttribute('border', '1');
        let tbdy = document.createElement('tbody');
        let arrKey = Object.keys(this.arrEmp[0]);

        let tr = document.createElement('tr');
        for (let i = 0; i < arrKey.length; i++) {
            let th = document.createElement('th');
            let t1 = document.createTextNode(arrKey[i]);
            th.appendChild(t1);
            tr.appendChild(th);
            tbdy.appendChild(tr);
        }
        let arr = Object.values(this.arrEmp).map(v => Object.values(v));
        for (let i = 0; i < arr.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < arr[i].length; j++) {
                let td = document.createElement('td');
                let t2 = document.createTextNode(arr[i][j]);
                td.appendChild(t2);
                tr.appendChild(td);
               
            }
            tbdy.appendChild(tr);
        }
        
        tbl.appendChild(tbdy);
        body.appendChild(tbl);
        return tbl;
    }
}

let empTab = new empTable(arrEmployee);
empTab.getHTML();