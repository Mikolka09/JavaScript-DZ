window.onload = function () {
    let arrBtn = document.getElementsByClassName('btn');
    let arrNews = document.getElementsByClassName('container_news');
    for (const it of arrBtn) {
        it.addEventListener('click', function(){
            for (const iter of arrNews) {
                if(it.id===iter.id) iter.remove();
            }
        });
    }
}