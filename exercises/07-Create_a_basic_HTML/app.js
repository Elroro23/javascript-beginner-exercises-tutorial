//Declaramos constantes con "string" como valores.
const a = '</title>'; 
const b = '</html>';
const c = '<head>';
const d = '</body>';
const e = '<html>';
const f = '</head>';
const g = '<title>';
const h = '<body>';

//Concatenamos las constantes en el orden correcto.
let htmlDocument = e+c+g+a+f+h+d+b; //Si dejamos las "" lo tomará como un string.

console.log(htmlDocument); //Llamamos a la variable y la imprimimos.