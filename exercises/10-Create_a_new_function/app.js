function shortIntroduction(name, profession, age) { //Declaramos una función con 3 parámetros.
  return `Hello! my name is ${name}, my profession is ${profession}. I am ${age} years old.`; //construí un "string" que incluye los valores de name, profession, y age usando "Template literals".
  }
console.log(shortIntroduction(`Rodolfo`, `Programmer`, `24`)); //llamamos a la función, pasando los valores Rodolfo, Programmer, y 24 como argumentos para los parámetros e imprimimos el resultado.