window.onload = function () {
    let btn = document.getElementById('btn');
    let bar = document.getElementById('bar');
    btn.addEventListener('click',function(){
        bar.value +=5;
    });
}