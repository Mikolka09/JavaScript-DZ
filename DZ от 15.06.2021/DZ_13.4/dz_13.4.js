window.onload = function () {
    let html_key = document.getElementById('HTML_id');
    let css_key = document.getElementById('CSS_id');
    let js_key = document.getElementById('JS_id');
    let txt = document.getElementById('text');
    html_key.addEventListener('click', function () {
        html_key.style.backgroundColor = 'darkslateblue';
        css_key.style.backgroundColor = 'rgb(116, 100, 216)';
        js_key.style.backgroundColor = 'rgb(116, 100, 216)';
        txt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque necessitatibus saepe blanditiis nihil
        recusandae autem aperiam architecto ipsam sequi aspernatur, error obcaecati minus voluptate laudantium
        expedita. Maxime consequatur, iure ut omnis, obcaecati commodi ea ipsa accusamus labore quasi quod
        nostrum hic?<br> Vero nostrum porro doloribus dolorum deserunt, vel temporibus. Repudiandae dignissimos
        voluptatibus dolores vitae quis similique assumenda, deserunt ipsam accusantium nostrum nisi incidunt
        optio perspiciatis eaque. Maiores et repudiandae mollitia minus suscipit odio assumenda, voluptatem
        velit numquam amet praesentium accusamus porro aspernatur vel consequatur enim quis exercitationem iure
        consectetur iusto provident! Dicta, veritatis eveniet.`;
    });

    css_key.addEventListener('click', function () {
        css_key.style.backgroundColor = 'darkslateblue';
        html_key.style.backgroundColor = 'rgb(116, 100, 216)';
        js_key.style.backgroundColor = 'rgb(116, 100, 216)';
        txt.innerHTML = `<code style="font-size:12pt">
        * {<br>
        box-sizing: border-box;<br>
    }<br>
    <br>
    .container {<br>
        position: relative;<br>
        display: block;<br>
        width: 50%;<br>
        height: 400px;<br>
        top: 100px;<br>
        left: 100px;<br>
        background-color: blanchedalmond;<br>
    }<br>
    <br>
    .container_box {<br>
        margin: 0px auto;<br>
        text-align: justify;<br>
        position: absolute;<br>
        top: 0;<br>
        left: 0;<br>
        bottom: 0;<br>
        right: 0;<br>
        margin: auto;<br>
        display: flex;<br>
        align-items: center;<br>
        width: 90%;<br>
        height: 300px;<br>
        background-color: rgb(116, 100, 216);<br>
    }<br>
    <br>
    .container_button {<br>
        display: grid;<br>
        width: 110px;<br>
        height: 200px;<br>
        align-items: center;<br>
        justify-items: center;<br>
        font-size: 18pt;<br>
        font-weight: 700;<br>
    }<br>
    <br>
    .container_text {<br>
        padding: 20px;<br>
        font-size: 18pt;<br>
        width: 1100px;<br>
        height: 300px;<br>
        overflow: auto;<br>
        background-color: blanchedalmond;<br>
        border: 4px solid rgb(116, 100, 216);<br>
    }<br>
    <br>
    #HTML_id,<br>
    #CSS_id,<br>
    #JS_id {<br>
        width: 110px;<br>
        text-align: center;<br>
        color: white;<br>
    }<br>
    <br>
    #HTML_id:hover,<br>
    #CSS_id:hover,<br>
    #JS_id:hover {<br>
        cursor: pointer;<br>
        background-color: darkslateblue!important;<br>
    }
        </code>`;
    });

    js_key.addEventListener('click', function () {
        js_key.style.backgroundColor = 'darkslateblue';
        html_key.style.backgroundColor = 'rgb(116, 100, 216)';
        css_key.style.backgroundColor = 'rgb(116, 100, 216)';
        txt.innerHTML = `<code style="font-size:12pt">
        window.onload = function () {<br>
            let html_key = document.getElementById('HTML_id');<br>
            let css_key = document.getElementById('CSS_id');<br>
            let js_key = document.getElementById('JS_id');<br>
            let txt = document.getElementById('text');<br>
            html_key.addEventListener('click', function () {<br>
                html_key.style.backgroundColor = 'darkslateblue';<br>
                css_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                js_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                txt.innerHTML = 'text';<br>
            });<br>
            <br>
            css_key.addEventListener('click', function () {<br>
                css_key.style.backgroundColor = 'darkslateblue';<br>
                html_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                js_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                txt.innerHTML = 'text';<br>
            });<br>
            <br>
            js_key.addEventListener('click', function () {<br>
                js_key.style.backgroundColor = 'darkslateblue';<br>
                html_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                css_key.style.backgroundColor = 'rgb(116, 100, 216)';<br>
                txt.innerHTML = 'text';<br>
            });<br>
            <br>
        }
        </code>`
    });

}