window.onload = function () {
    let button = document.getElementById('btn');
    button.addEventListener('click', function (e) {
        let resRand = getRandomInt(0, 100);
        let numb = document.getElementById('random_number');
        numb.innerHTML = resRand.toString();
        numb.appendChild( numb.innerHTML);
    })

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    };
}