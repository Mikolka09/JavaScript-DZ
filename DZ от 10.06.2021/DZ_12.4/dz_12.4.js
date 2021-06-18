window.onload = function () {
    let addCom = document.getElementById('btn_add');
    addCom.addEventListener('click', function (e) {
        let name = document.getElementById('name').value;
        let comment = document.getElementById('comment').value;
        let comments = document.getElementById('com_add');
        let date = dateNow('.');
        let pName = document.createElement('p');
        
        pName.setAttribute('style','font-size:17pt; font-weight:800; margin-top:0.2em; margin-bottom:0.2em;');
        pName.innerHTML = name;
        let pDate= document.createElement('p');
        pDate.setAttribute('style','font-size:12pt; margin-top:0.2em; margin-bottom:0.2em;');
        pDate.innerHTML = date;
        let pComment = document.createElement('p');
        pComment.setAttribute('style','font-size:16pt; font-family:arial; margin-top:0.2em; margin-bottom:0.2em;');
        pComment.innerHTML = comment;
        let prop = document.createElement('p');
        prop.setAttribute('style','margin-top:0.2em; margin-bottom:0.2em;');
        prop.innerHTML = '<br>';

        comments.appendChild(pName);
        comments.appendChild(pDate);
        comments.appendChild(pComment);
        comments.appendChild(prop);

        //Очистка
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    });

    function dateNow(splinter) {
        let set = new Date();
        let getDate = set.getDate().toString();
        if (getDate.length == 1) { 
            getDate = "0" + getDate;
        }
        let getMonth = (set.getMonth() + 1).toString();
        if (getMonth.length == 1) {
            getMonth = "0" + getMonth;
        }
        let getYear = set.getFullYear().toString();
        let dateNow =  getDate + splinter + getMonth + splinter  + getYear;
        return dateNow;
    }



}