window.onload = function () {
    let button = document.getElementById('btn_add');
    button.addEventListener('click',function (e){
        let txt = document.getElementById('text');
        if(txt.style.display != 'none') txt.style.display = 'none';
        else txt.style.display = 'block';
        txt.appendChild(txt.style.display);
    })

}