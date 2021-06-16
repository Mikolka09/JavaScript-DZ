//Получение и вывод информации о пользоватиле
//1.Получение координат
var res;
var myMap;

window.onload = function () {

    res = document.getElementById("result");

    let options = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 17
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), options);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geolocationSuccess);
    } else {
        res.innerHTML = "Ваш браузер не поддерживает геолокацию";
    }

    function geolocationSuccess(position) {
        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        myMap.setCenter(location);

        let marker = new google.maps.Marker({
            position: location,
            map: myMap,
            title: 'Вы навели на метку!\nНажмите для получения информации!'
        });

        marker.setMap(myMap);

        let infowindow = new google.maps.InfoWindow({
            content: `<h2 style="text-align: center;">Это ваше местоположение</h2><p style ="font-weight: 600">Ваши координаты: Широта: ${position.coords.latitude};  
            Долгота: ${position.coords.longitude}</p>`
        });
        marker.addListener("click", function () {
            infowindow.open(myMap, marker);
        })

        res.innerHTML = "Местоположение отмечено на карте.";
    }

    //Данные о браузере
    document.getElementById("appName").innerHTML =
        "Имя браузера как приложения - " + navigator.appName;
    document.getElementById("appCodeName").innerHTML =
        "Кодовое имя браузера - " + navigator.appCodeName;
    document.getElementById("product").innerHTML =
        "Движок браузера - " + navigator.product;
    document.getElementById("appVersion").innerHTML =
        "Версия браузера - " + navigator.appVersion;
    document.getElementById("userAgent").innerHTML =
        "Пользовательский агент браузера - " + navigator.userAgent;
    document.getElementById("onLine").innerHTML =
        "Браузер подключен к сети Интернет? - " + `${(navigator.onLine)? 'ДА!':'НЕТ!'}`;
}