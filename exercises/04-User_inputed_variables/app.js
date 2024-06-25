//Declaramos una variable y le asignamos un valor "string" con la función "prompt"(Solicita una cuadro de diálogo al usuario y lo guarda como un "string").
let age = prompt('What is your age?'); 

//Declaramos una variable y le asignamos como parámetro la variable "age" con la función "parseInt"(Convierte un "string" en un número entero).
let result = parseInt(age) + 10; //Le sumamos 10.
console.log(result); //Llamamos a la variable "result" e imprimimos el resultado.
