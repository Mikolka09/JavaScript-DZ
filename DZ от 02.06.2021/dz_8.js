class progressBar {
    constructor(width, height, color, id) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.id = id;
    }

    createBar() {
        let body = document.getElementsByTagName('body')[0];
        let div1 = document.createElement('div');
        div1.id = this.id;
        div1.setAttribute('style', `width: ${this.width + 'px'}; height: ${this.height + 'px'}; border: 2px solid lightgray; 
            background-color:lightgray; border-radius:${(parseInt(this.height) * 0.5) + 'px'}; position: relative; 
            margin-top: 150px; margin-left: 300px;`);
        let div2 = document.createElement('div');
        div2.id = 'bar' + this.id;
        div1.appendChild(div2);
        div2.setAttribute('style', `width: 35px; height: 50px; border-radius:${(parseInt(this.height) * 0.5) + 'px'}; 
            position: relative; background-color:${this.color}; transition: 2s linear;`);
        let span = document.createElement('span');
        span.id = 'perc' + this.id;
        span.setAttribute('style', "font-size:40px; font-family: 'Times New Roman', Times, serif; font-weight:800; " +
            "position: absolute; display:inline-block; left: 0px; top:5px; color:white; transition: 2s linear;");
        div2.appendChild(span);
        body.appendChild(div1);
    }

    workBar(time, id) {
        let bar = document.getElementById('bar' + id);
        let sp = document.getElementById('perc' + id);
        let txt = document.createTextNode('');
        sp.appendChild(txt);
        let st = 0;
        let stp = 10;
        let widthSt = 0;
        let fr = () => {
            st += 5;
            widthSt = st;
            stp = widthSt - 100;
            bar.style.width = widthSt + 'px';
            sp.style.left = stp + 'px';
            txt.data = ((widthSt / this.width) * 100).toFixed(0) + '%';
            if (st >= this.width) {
                clearTimeout(timer);
                return;
            }
            timer = setTimeout(fr, time);
        }
        let timer = setTimeout(fr, time);
    }

}

let bar1 = new progressBar(2000, 50, 'red', 1);
bar1.createBar();
let bar2 = new progressBar(2000, 50, 'green', 2);
bar2.createBar();
let bar3 = new progressBar(2000, 50, 'blue', 3);
bar3.createBar();
if (confirm('Запустить ПРОГРЕССБАРЫ?')) {
    bar1.workBar(80, 1);
    bar2.workBar(60, 2);
    bar3.workBar(100, 3);
} else alert('Спасибо! До свидания!');