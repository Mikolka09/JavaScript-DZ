window.onload = function () {
    document.onmousemove = function (e) {
        let coords = document.getElementById('coordinates');
        let xCoord = e.pageX;
        let yCoord = e.pageY;
        coords.innerHTML = 'X = ' + xCoord + '  ' + 'Y = ' + yCoord;
        coords.appendChild(coords.innerHTML);
    };

    document.onmousedown = function(e){
        let key = document.getElementById('put_key');
        let putKey = e.which===1 ? 'Левая кнопка': 'Правая кнопка';
        key.innerHTML = putKey;
        key.appendChild(key.innerHTML);
    }

}