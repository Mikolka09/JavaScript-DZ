window.onload = function () {
    let numb = document.getElementById('cont_number');
    let in_up = document.getElementById('input_up');
    let in_down = document.getElementById('input_down');

    in_up.addEventListener('click', function (e) {
        let cnt = parseInt(numb.innerHTML);
        cnt++;
        numb.innerHTML = cnt;
    });

    in_down.addEventListener('click', function (e) {
        let cnt = parseInt(numb.innerHTML);
        cnt--;
        if(cnt>=0) numb.innerHTML = cnt;
        else numb.innerHTML = 0;
    });

}