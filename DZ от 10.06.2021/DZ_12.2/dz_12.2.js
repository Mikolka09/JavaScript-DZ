window.onload = function () {
    let button = document.getElementById('button_add');
    let content = document.getElementById('cont_block');
    let i=0;
    button.addEventListener('click', function(e){
        let div = document.createElement('div');
        div.setAttribute('style', 'width:150px; height:100px; margin:10px;');
        div.id = i++;
        let id = div.id;
        div.className = 'blockes';
        div.onclick = function(){
            document.getElementById(`${id}`).remove();
        }
        div.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        content.appendChild(div);
    });

   
}
