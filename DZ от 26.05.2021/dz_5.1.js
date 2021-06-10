//Задание 1
class simpleMarker {
    constructor(colorMarker, countInkPercent) {
        (colorMarker != null) ? this.colorMarker = colorMarker: this.colorMarker = 'white';
        (countInkPercent != null) ? this.countInkPercent = countInkPercent: this.countInkPercent = 0;
    };

    printing(str) {
        if (str.length != 0) {
            let i = 0;
            let cnt = str.length;
            while (this.countInkPercent > 0) {
                process.stdout.write(str[i++]);
                if (str[i] != ' ')
                    this.countInkPercent -= .5;
                cnt--;
                if (cnt == 0) break;
            }
            if (this.countInkPercent == 0)
                return true;
            else return false;
        } else console.log('Строка пустая!');
    };
}

class refuelingMarker extends simpleMarker {
    constructor(colorMarker, countInkPercent, colorInk, countInk) {
        super(colorMarker, countInkPercent);
        (this.colorInk != null) ? this.colorInk = colorInk: this.colorInk = 'white';
        (this.countInk != null) ? this.countInk = countInk: this.countInk = 0;
    }

    refueling() {
        if (this.countInkPercent == 0 && this.colorInk == this.colorMarker) {
            while (this.countInkPercent < 100) {
                this.countInkPercent += 0.5;
                this.colorInk -= 0.5;
            }
            console.log('Маркер заправлен!');
        }
        else console.log('Маркер не пуск или краски не совпадают!');
    }
}

let str = 'Получить символ, который занимает позицию pos, можно с помощью квадратных скобок';
let marker = new simpleMarker('red', 100);
if (marker.printing(str)) {
    let refuele = new refueleMarker('red', 100);
    refuele.refueling();
} else console.log('Текст напечатан!');