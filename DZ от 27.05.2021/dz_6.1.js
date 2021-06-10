//Задание 1
class printMaсhine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(str) {
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily}">` +
            str + `</p>`);
    }
}
let str = "Ahh thank you! It works now. One more question, what is the benefit of doing this over using innerHTML? " +
    "Is there any difference in the output?"
let printMaсh = new printMaсhine('18px', 'red', 'arial');
printMaсh.print(str);