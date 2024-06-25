function getColor(selection) { //Definimos una función que toma un parámetro "selection".
	switch (selection) { //Declaramos "switch" para comparar el valor de "selection" contra varios casos.

		case "red": //Estos son los casos.
			return true; //Retornamos "true" si el caso es "red".
		case "green":
			return true; //El "return" termina la ejecución por lo que el "break" es innecesario.
		case "blue":
			return true;
		default: //Si ningún caso se cumple la función retorna "false"
			return false;
	}
}
//"prompt()"Muestra un cuadro de diálogo que solicita al usuario que ingrese un color.
let colorname = prompt('What color do you want?').trim(); //".trim()" elimina los espacios en blanco al principio y al final del "string"
let isAvailable = getColor(colorname); //Llamamos a "getColor" pasando el valor de "colorname" como argumento y lo guardamos en "isAvailable".
if (isAvailable) //Si "isAvailable" es "true", imprimimos en la consola.
	console.log('Good news! That color is available');
else //Si isAvailable es false, imprimimos en la consola.
	console.log('We are sorry, that color is not available');
