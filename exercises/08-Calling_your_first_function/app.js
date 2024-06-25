function isOdd(myNumber) //Definimos la función con un parámetro.
{
//Especificamos la operación y retornamos el resultado.
	return !(myNumber % 2 == 0); 
}
//Si "myNumber" es par, "myNumber % 2 == 0" es "true", y "!(true)" es "false".
//Si "myNumber" es impar, "myNumber % 2 == 0" es "false", y "!(false)" es "true".

console.log(isOdd(45345)); //Llamamos a la función con el valor"45345" e imprimimos el resultado