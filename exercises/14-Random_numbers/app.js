function getRandomInt() //Definimos una función sin parámetros
{
	let randomNumber = Math.floor(Math.random()* 10)+ 1; //Declaramos una variable y aplicamos las funciones.
	return randomNumber; //Retornamos el resultado de la variable.
}


console.log(getRandomInt());//Imprimimos la función.

//Math.random(): Para obtener un número decimal entre "o(inclusive) y 1(exclusive)".
//(*10): Para que sea entre "0(inclusive) y 10(exclusive)".
//Math.floor(): Redondea hacia abajo el número resultante al número entero más cercano. 
//(+1): Le sumamos 1 al rango para que sea de 1 a 10 en lugar de 0 a 9.