function getRandomInt() //Declaramos una función sin parámetros
{
	let randomNumber = Math.floor(Math.random()*6)+1; //Aplicamos las funciones y modificamos el rango.
	return randomNumber; //Retornamos el resultado de la variable "randomNumber".
}
console.log(getRandomInt()); //Imprimimos la función.