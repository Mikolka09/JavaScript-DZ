window.onload = function () {
    let content = document.getElementsByClassName('cont_color');
    let txt = document.getElementById('text');
    for (const it of content) {
        it.addEventListener('click', function (e) {
            let art = document.getElementById(e.target.id);
            txt.style.color = art.dataset.color;
        })
    }

}