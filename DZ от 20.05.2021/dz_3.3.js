//Задание 3
let stylesCSS = [
{
    name:'style_1',
    paramenter:"color:aqua; font-size:12pt; font-weight:400; font-family:Arial, Helvetica, sans-serif; text-align:center; text-decoration: dashed; text-transform: uppercase;"
},
{
    name:'style_2',
    paramenter:"color:blueviolet; font-size:14pt; font-weight:400; font-family:'Times New Roman', Times, serif; text-align:left; text-decoration: dotted; text-transform: capitalize;"
},
{
    name:'style_3',
    paramenter:"color:chartreuse; font-size:16pt; font-weight:700; font-family:Arial, Helvetica, sans-serif; text-align:right; text-decoration: double; text-transform: lowercase;"
},
{
    name:'style_4',
    paramenter:"color:deeppink; font-size:10pt; font-weight:300; font-family:'Times New Roman', Times, serif; text-align:end; text-decoration: line-through; text-transform: lowercase;"
},
{
    name:'style_5',
    paramenter:"color:firebrick; font-size:18pt; font-weight:500; font-family:'Courier New', Courier, monospace; text-align:justify; text-decoration: overline; text-transform: uppercase;"
},
{
    name:'style_6',
    paramenter:"color:green; font-size:16pt; font-family:'Courier New', Courier, monospace; font-weight:700; text-align:start; text-decoration: solid; text-transform: uppercase;"
}
];

function docWrite(array, st){
    for (const it of array) {
        document.write(`<p>Наименование стиля - ${it.name}</p>`);
        document.write(`<p style="${it.paramenter}">${st}</p>`);
    }
}

let st = 'Hello Freinds!';
docWrite(stylesCSS, st);