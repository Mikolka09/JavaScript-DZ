window.onload = function () {

    document.getElementById('theform').onsubmit = function () {
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;

        let body = document.getElementsByTagName('body')[0];
        let div = document.createElement('div');
        div.setAttribute('style', 'margin-top: 100px; text-align: left; margin-left: 80px;')
        let txt = MonthSelect(+month) + ', ' + year;
        let dateST = document.createTextNode(txt);
        div.appendChild(dateST);
        let divCon = document.getElementById('cont');
        divCon.append(div);

        let tbl = document.createElement('table');
        tbl.setAttribute('style', 'text-align: center; width:748px;');
        let tbdy = document.createElement('tbody');
        let divTbl = document.createElement('div');
        divTbl.setAttribute('style', 'margin-top: 50px; text-align: left; margin-left: 80px;')
        let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let tr = document.createElement('tr');
        for (let i = 0; i < dayNames.length; i++) {
            let th = document.createElement('th');
            th.setAttribute('style',' border: 3px solid black;')
            th.appendChild(document.createTextNode(dayNames[i]));
            tr.appendChild(th);
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);

        let lastDayMonth = new Date(year, month + 1, 0).getDate();
        let newRow = tbl.insertRow(-1);
        let firstday = [7, 1, 2, 3, 4, 5, 6][new Date(year, month, 1).getDay()];

        lastDayMonth = lastDayMonth + firstday - 1
        for (let j = 1; j <= lastDayMonth; j++) {
            let newCell = newRow.insertCell(-1);
            newCell.setAttribute('style','font-weight:300; border: 3px solid black;');
            newCell.className = (j % 7 == 0) ? 'odd' : 'even';
            if (j - firstday + 1 > 0) newCell.appendChild(document.createTextNode(j - firstday + 1));
            else newCell.appendChild(document.createTextNode(''));
            if (j % 7 == 0) newRow = tbl.insertRow(-1);
        }
        tbl.appendChild(newRow);
        divTbl.appendChild(tbl);
        divCon.appendChild(divTbl);
        body.appendChild(divCon);
        return false;
    };

    function MonthSelect(n) {
        switch (n) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                break;
        }
    }
}